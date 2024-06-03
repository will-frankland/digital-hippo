/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/media/**",
      },
      {
        hostname: 'https://digital-hippo-production-037e.up.railway.app'
      }
    ],
  },
};

module.exports = nextConfig;
