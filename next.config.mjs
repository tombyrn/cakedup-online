/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Required if you use next/image with static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;