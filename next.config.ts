/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allows any local IP address format to connect to development resources
  allowedDevOrigins: ['*.local', 'localhost:*', '192.168.*.*', '10.*.*.*', '172.*.*.*'],
};

module.exports = nextConfig;