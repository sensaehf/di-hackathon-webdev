const { composePlugins, withNx } = require('@nx/next')
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin()

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  publicRuntimeConfig: {
    graphqlEndpoint: 'https://rickandmortyapi.graphcdn.app/',
    test: process.env.TEST,
    NEXTAUTH_URL: 'http://localhost:3000',
  },
  serverRuntimeConfig: {
    NEXTAUTH_URL: 'http://localhost:3000',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        pathname: '/api/character/avatar/**',
      },
    ],
  },
}

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withVanillaExtract,
]

module.exports = composePlugins(...plugins)(nextConfig)
