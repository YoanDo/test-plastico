/*
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: false, // or remove this line completely
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  images: {
    loader: 'akamai',
    path: ''
  }
};

module.exports = nextConfig;
