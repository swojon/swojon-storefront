/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              hostname: 'localhost',
              pathname: '**',
            },
            {
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                hostname: 'picsum.photos',
                pathname: '**',
            },
            {
                hostname: 'lh3.googleusercontent.com',
                pathname: "**"
            }
        ]
    }

}

module.exports = nextConfig
