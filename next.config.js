const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  },
  images: {
    domains: [
      'admin.iap.af',
      'khabarnama.net',
      'old.khabarnama.net',
      'www.etilaatroz.com',
      'reporterly.net',
      'secure.gravatar.com'
    ]
  }
})
