import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

export default function nextConfig(phase: string): NextConfig {
  return {
    // A production build must not overwrite the running dev server's chunks
    // and route manifests. Each mode owns a separate output directory.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
}
