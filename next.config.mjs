/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images:{
    remotePatterns:[
      {
        hostname: '**'
      }
    ]
  }
};

export default nextConfig;
