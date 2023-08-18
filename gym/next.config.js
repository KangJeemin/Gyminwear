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
  env:{
    NEXT_PUBLIC_NAVER_ClientId:'vqhMSE8joE5v7eeLQaHt',
    NEXT_PUBLIC_NAVER_ClientSecret:'EMjd5sI8k9',

  }
}

module.exports = nextConfig
