/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
    typedRoutes: true,
    optimizePackageImports: [
      '@material-tailwind/react',
      '@tanstack/react-query',
    ],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },
  webpack: (config) => {
    // SVGR for importing .svg as React components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/[\\/]\.(ts|tsx|js|jsx|mdx)?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: { icon: true },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
