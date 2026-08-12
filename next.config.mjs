/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/matrix',
        destination: '/Matrix',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
