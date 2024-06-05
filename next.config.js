/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "https://digital-hippo-production-037e.up.railway.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
