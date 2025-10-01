// This line follows the CommonJS (cjs) pattern of importing modules
const path = require('path'); // I "think" this is the Node:path


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
    //            [ 'C:\\GH\\DMIT2008\...\C\...\styles' ]
  }
}

module.exports = nextConfig
