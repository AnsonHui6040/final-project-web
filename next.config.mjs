const isGithubActions = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? "/final-project-web" : ""
  },
  basePath: isGithubActions ? "/final-project-web" : "",
  assetPrefix: isGithubActions ? "/final-project-web/" : ""
};

export default nextConfig;
