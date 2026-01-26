/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const config = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = config
