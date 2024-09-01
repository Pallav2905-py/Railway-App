module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3000/api/v1/complaint/register-complaint*' // Proxy to backend
        }
      ];
    }
  };