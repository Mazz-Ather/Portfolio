/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'], // Add the Unsplash domain
        // domains: ['placeholder.com'],
     

      }, eslint: {
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
