import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, AdaptiveDpr } from '@react-three/drei';

/**
 * Abstract developer-inspired scene: a slowly rotating wireframe torus knot,
 * a solid inner core, orbiting rings and a drifting particle field.
 *
 * No external models or textures are loaded — everything is generated, so
 * there is nothing to 404 and nothing to download.
 *
 * `tier` steps complexity down: 'high' desktop, 'medium' mobile,
 * 'low' very small screens.
 *
 * This component is only mounted at all when motion is allowed (Hero skips it
 * entirely under `prefers-reduced-motion`), so no reduced-motion branches are
 * needed here.
 */

function Core({ tier }) {
  const knot = useRef();
  const core = useRef();
  const ringA = useRef();
  const ringB = useRef();
  const shell = useRef();
  const group = useRef();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const d = Math.min(delta, 0.05);
    const { pointer } = state;

    if (knot.current) knot.current.rotation.y += d * 0.16;
    if (knot.current) knot.current.rotation.x += d * 0.05;

    if (core.current) {
      // gentle breathing, not a spin loop
      core.current.scale.setScalar(1 + Math.sin(t * 0.9) * 0.035);
      core.current.rotation.y -= d * 0.1;
    }

    if (ringA.current) ringA.current.rotation.z += d * 0.22;
    if (ringB.current) ringB.current.rotation.x += d * 0.16;

    // shell counter-rotates against the knot for a parallax feel
    if (shell.current) {
      shell.current.rotation.y -= d * 0.05;
      shell.current.rotation.x += d * 0.022;
    }

    // the whole assembly leans toward the pointer, damped so it trails
    if (group.current) {
      const tx = pointer.y * 0.16;
      const ty = pointer.x * 0.22;
      group.current.rotation.x += (tx - group.current.rotation.x) * d * 1.6;
      group.current.rotation.y += (ty - group.current.rotation.y) * d * 1.6;
    }
  });

  const detail = tier === 'high' ? 180 : tier === 'medium' ? 110 : 70;

  return (
    <group ref={group}>
      {/* inner glowing core */}
      <mesh ref={core}>
        <icosahedronGeometry args={[0.72, tier === 'high' ? 2 : 1]} />
        <meshStandardMaterial
          color="#2f6fe4"
          emissive="#4d8dff"
          emissiveIntensity={0.55}
          roughness={0.28}
          metalness={0.72}
          flatShading={tier === 'low'}
        />
      </mesh>

      {/* wireframe knot wrapping the core */}
      <mesh ref={knot}>
        <torusKnotGeometry args={[1.5, 0.28, detail, tier === 'low' ? 8 : 14]} />
        <meshStandardMaterial
          color="#7cb0ff"
          wireframe
          transparent
          opacity={0.34}
          roughness={0.5}
          metalness={0.4}
        />
      </mesh>

      {/* orbiting rings */}
      <mesh ref={ringA} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.35, 0.012, 8, 96]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.42} />
      </mesh>

      <mesh ref={ringB} rotation={[0, Math.PI / 3, Math.PI / 2.6]}>
        <torusGeometry args={[2.75, 0.01, 8, 96]} />
        <meshBasicMaterial color="#4d8dff" transparent opacity={0.3} />
      </mesh>

      {/* outer geodesic shell: a slow counter-rotating cage that reads as
          depth around the knot without needing a texture */}
      <mesh ref={shell}>
        <icosahedronGeometry args={[3.15, tier === 'low' ? 1 : 2]} />
        <meshBasicMaterial
          color="#4d8dff"
          wireframe
          transparent
          opacity={0.09}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function Particles({ tier }) {
  const ref = useRef();
  const count = tier === 'high' ? 420 : tier === 'medium' ? 240 : 120;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // shell distribution keeps it from clumping at the centre
      const r = 3.2 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += Math.min(delta, 0.05) * 0.018;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.032}
        color="#8fa3c8"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/**
 * A key light that tracks the pointer, so the metal actually catches the
 * cursor instead of sitting under fixed studio lighting.
 */
function PointerLight() {
  const light = useRef();
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!light.current) return;
    const d = Math.min(delta, 0.05);
    const tx = pointer.x * 4.2;
    const ty = pointer.y * 2.8 + 1.4;
    const tz = 3.4;
    light.current.position.x += (tx - light.current.position.x) * d * 3;
    light.current.position.y += (ty - light.current.position.y) * d * 3;
    light.current.position.z += (tz - light.current.position.z) * d * 3;
  });

  return <pointLight ref={light} position={[0, 1.4, 3.4]} intensity={14} distance={16} color="#bcd4ff" />;
}

function CameraRig() {
  const camera = useThree((s) => s.camera);
  const pointer = useThree((s) => s.pointer);

  useFrame((_, delta) => {
    if (!camera) return;
    const d = Math.min(delta, 0.05);
    // damped follow: the camera drifts toward the pointer, never snaps
    camera.position.x += (pointer.x * 1.15 - camera.position.x) * d * 2.2;
    camera.position.y += (pointer.y * 0.7 + 0.25 - camera.position.y) * d * 2.2;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D({ tier = 'high' }) {
  const dpr = tier === 'high' ? [1, 1.75] : tier === 'medium' ? [1, 1.35] : [1, 1.1];

  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      role="presentation"
    >
      <Canvas
        dpr={dpr}
        gl={{
          antialias: tier === 'high',
          alpha: true,
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: false,
        }}
        camera={{ position: [0, 0.25, 6.4], fov: 42, near: 0.1, far: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 5, 6]} intensity={1.5} color="#cfe0ff" />
        <pointLight position={[-5, -2, 3]} intensity={26} distance={16} color="#4d8dff" />
        <pointLight position={[5, 3, -3]} intensity={18} distance={14} color="#8b5cf6" />

        <CameraRig />
        <PointerLight />

        <Float speed={1.1} rotationIntensity={0.22} floatIntensity={0.5}>
          <Core tier={tier} />
        </Float>

        <Particles tier={tier} />

        <AdaptiveDpr pixelated={false} />
      </Canvas>
    </div>
  );
}
