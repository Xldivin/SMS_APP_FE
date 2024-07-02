/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['www.africaeats.com', 'picsum.photos', 'res.cloudinary.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'africaeats.com',
        },
        {
          protocol: 'https',
          hostname: 'picsum.photos',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
        },
      ],
    }
};

export default nextConfig;
