
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			'is1-ssl.mzstatic.com',
            'i0.wp.com',
		],
	},
};

module.exports = nextConfig;
