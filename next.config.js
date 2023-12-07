const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});

const nodeEnv = process.env.NODE_ENV;
const dev = nodeEnv !== 'production';

const withPWA = require('next-pwa')({
	dest: 'public',
	disable: dev
});

const config = {
	webpack: (config) => {
		config.devtool = dev ? 'eval-source-map' : false;
		config.resolve.alias['@'] = path.join(__dirname, 'src');
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						icon: true
					}
				}
			]
		});
		return config;
	},
	images: {
		domains: []
	},
	swcMinify: true,
	crossOrigin: 'anonymous'
};

module.exports = withPWA(withBundleAnalyzer(config));
