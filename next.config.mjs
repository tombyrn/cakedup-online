
const nextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        loader: 'custom',
        loaderFile: './src/lib/imageLoader.ts',
      },
};

export default nextConfig;
