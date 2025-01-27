/** @type {import('next').NextConfig} */

// Lecture #10
/**
  "remotePatterns"
  Inside this file, use this format, 'remotePatterns'.
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
