/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5 : true,
  webpack: (config) => {
    config.resolve.fallback = { fs : false, net : false, tls : false, cardinal : false };
    return config;
  },
  async rewrites() {
		return [
			{
				source: "/:path*",
				destination: "http://localhost:3000/:path*",
			},
		];
	},
  images:{
    domains:['gyminwearimage.s3.ap-northeast-2.amazonaws.com']
  }
}

module.exports = nextConfig
