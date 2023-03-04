/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      {
        source: "/:path*",
        destination: "/",
      },
    ];
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

export default nextConfig;
