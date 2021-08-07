const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  },
  images: {
    domains: [
      'admin.iap.af',
      'wp.en.aleteia.org',
      'en.aleteia.org',
      'aleteia.org',
      'etilaatroz.com'
    ]
  }
})
