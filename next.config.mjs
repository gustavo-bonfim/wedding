/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'e2ylbm9ze5ru4jfv.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
