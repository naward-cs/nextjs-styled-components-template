/** @type {import('next').NextConfig} */
const currentGitBranchName = require("current-git-branch");

const nextConfig = {
  images: {
    minimumCacheTTL: 60,
    disableStaticImages: true,
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    GIT_BRANCH: currentGitBranchName(),
  },
};

module.exports = nextConfig;
