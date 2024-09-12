/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "cloudflare-ipfs.com",
      "avatars.githubusercontent.com",
      "picsum.photos",
		  "pbcambridge-livid.vercel.app"
    ],
  },
};

module.exports = nextConfig;
