/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, swcMinify: true, images: {
        domains: ['cdn.sanity.io', "th.bing.com"],
    }
}

module.exports = nextConfig
