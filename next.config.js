/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, swcMinify: true, images: {
        domains: ['www.shin-sekai.fr', 'th.bing.com'],
    }
}

module.exports = nextConfig
