import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Example: Add a custom module path alias (for example, using `@/` to refer to `src/`)
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    
    return config;
  },
};

export default nextConfig;
