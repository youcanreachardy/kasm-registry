/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'ardy.tech kasm registry',
    description: 'ardy's registry for stuff',
    icon: '/img/logo.svg',
    listUrl: 'https://youcanreachardy.github.io/kasm-registry/',
    contactUrl: 'https://ardy.tech',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
