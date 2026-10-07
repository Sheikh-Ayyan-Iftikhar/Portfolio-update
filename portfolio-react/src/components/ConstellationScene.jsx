import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';

/**
 * A small constellation of nodes joined by thin lines — the motif used beside
 * the inner page headers.
 *
 * Fully procedural: no models, textures or font fetches, so there is nothing
 * to 404 and the geometry costs almost nothing to build.
 *
 * Only mounted when motion is allowed, so reduced-motion needs no branch here.
 */

const COUNT_BY_TIER = { high: 26, medium: 18, low: 12 };

function Nodes({ tier }) {
  const group = useRef();
  const count = COUNT_BY_TIER[tier] ?? 12;

  // points on a fibonacci sphere: even coverage without clumping
  const points = useMemo(() => {
    const pts = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (count === 1 ? 0 : (i / (count - 1)) * 2);
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = golden * i;
      pts.push([Math.cos(theta) * r * 1.5, y * 1.5, Math.sin(theta) * r * 1.5]);
    }
    return pts;
  }, [count]);

  // join each node to its two nearest neighbours
  const edges = useMemo(() => {
    const verts = [];
    for (let i = 0; i < points.length; i++) {
      const near = points
        .map((p, j) => ({
          j,
          dist:
            (p[0] - points[i][0]) ** 2 +
            (p[1] - points[i][1]) ** 2 +
            (p[2] - points[i][2]) ** 2,
        }))
        .filter((x) => x.j !== i)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 2);

      for (const n of near) verts.push(...points[i], ...points[n.j]);
    }
    return new Float32Array(verts);
  }, [points]);

  useFrame((state, delta) => {
    const d = Math.min(delta, 0.05);
    const t = state.clock.elapsedTime;
    if (!group.current) return;
    group.current.rotation.y += d * 0.12;
    // gentle nod, offset from the spin so it does not look mechanical
    group.current.rotation.x = Math.sin(t * 0.28) * 0.22;
  });

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[edges, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#4d8dff" transparent opacity={0.34} toneMapped={false} />
      </lineSegments>

      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshBasicMaterial color="#8fb6ff" toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

/** Nudge the whole motif toward the pointer. */
function CameraRig() {
  const camera = useThree((s) => s.camera);
  const pointer = useThree((s) => s.pointer);

  useFrame((_, delta) => {
    const d = Math.min(delta, 0.05);
    camera.position.x += (pointer.x * 0.4 - camera.position.x) * d * 1.8;
    camera.position.y += (pointer.y * 0.3 - camera.position.y) * d * 1.8;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ConstellationScene({ tier = 'high' }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.2], fov: 45, near: 0.1, far: 30 }}
      style={{ background: 'transparent' }}
    >
      <CameraRig />
      <Nodes tier={tier} />
      <AdaptiveDpr pixelated={false} />
    </Canvas>
  );
}
