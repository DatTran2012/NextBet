/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};
// const withHtml = require('next-html');
const TerserPlugin = require('terser-webpack-plugin');
// const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.html$/i,
            loader: 'html-loader',
            exclude: /node_modules/,
        });
        config.output.crossOriginLoading = 'anonymous';
        // config.plugins.push(new SubresourceIntegrityPlugin());
        config.optimization = {
            minimize: true,
            minimizer: [new TerserPlugin()],
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.css$/,
                        chunks: 'all',
                        enforce: true,
                    },
                    vendor: {
                        chunks: 'initial',
                        test: 'vendor',
                        name: 'vendor',
                        enforce: true,
                    },
                },
            },
        };

        // Important: return the modified config
        return config;
    },
};
