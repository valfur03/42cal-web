/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [{
      source: '/events',
      destination: `${process.env.API_BASE_URL}/events`,
      permanent: true,
    }]
  }
};

export default nextConfig;
