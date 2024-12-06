/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.worldweatheronline.com',
            },
        ],
    },
};

export default nextConfig;
