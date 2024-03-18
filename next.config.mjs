/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["jsx", "js"],
  compiler: {
    styledComponents: true,
  },
  output: "export",
};
export default nextConfig;
