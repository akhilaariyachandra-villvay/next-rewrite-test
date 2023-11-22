/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `https://next-rewrite-test-cra.vercel.app/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
