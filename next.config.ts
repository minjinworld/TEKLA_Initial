import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // src 디렉토리 사용을 명시할 필요는 없지만,
  // Vercel이 문제를 일으키는 경우 pages를 루트로 올리는 게 가장 확실함
  pageExtensions: ["ts", "tsx", "js", "jsx"],

  // basePath 설정이 없는지 확인
  // basePath: '',

  // 만약 alias가 안 되는 문제라면 webpack 설정으로 paths를 수동 지정할 수도 있음
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": require("path").resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
