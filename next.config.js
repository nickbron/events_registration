module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's1.ticketm.net',
                port: '',
                pathname: '/dam/**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/a/**',
            },
        ],
    },
    transpilePackages: ['@mui/x-charts'],
}
