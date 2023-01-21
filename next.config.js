// eslint-disable-next-line @typescript-eslint/no-var-requires
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: [
      'dummyjson.com',
      'i.dummyjson.com',
      'i.pinimg.com',
      'png.pngtree.com'
    ]
  },
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx']
}
