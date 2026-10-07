import { Component } from 'react';

/**
 * Decorative 3D must never take down the page it sits behind — a WebGL
 * context failure, an old driver or a shader error should degrade to nothing
 * rather than unmount the content around it.
 *
 * Renders `children`; if the subtree throws, renders `fallback` (nothing by
 * default) and stops retrying.
 */
export default class SceneBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    // console only — the surrounding content is unaffected either way
    console.warn('[SceneBoundary] 3D layer disabled:', error?.message ?? error);
  }

  render() {
    if (this.state.failed) return this.props.fallback ?? null;
    return this.props.children;
  }
}
