/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    NEXT_PUBLIC_NAVER_ClientSecret:'EMjd5sI8k9'

  }
}

module.exports = nextConfig
