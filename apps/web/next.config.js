/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@yieldhive/ui"],
  images: {
    remotePatterns: [
      {
        hostname: "via.placeholder.com",
      },
    ],
  },
};
