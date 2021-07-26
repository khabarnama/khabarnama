const withPWA = require('next-pwa')
const fs = require('fs')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  },
  images: {
    domains: ['admin.iap.af']
  },
  env: {
    robots: fs.readFileSync('./robots.txt').toString(),
    dialog: fs.readFileSync('/js/dialog.js').toString(),
    elementorwebpackruntime: fs.readFileSync('/js/elementorwebpackruntime.js').toString(),
    frontend: fs.readFileSync('/js/frontend.js').toString(),
    jquery: fs.readFileSync('/js/jquery.js').toString(),
    jquerycore: fs.readFileSync('/js/jquerycore.js').toString(),
    jquerymigrate: fs.readFileSync('/js/jquerymigrate.js').toString(),
    preloadedmodules: fs.readFileSync('/js/preloadedmodules.js').toString(),
    sharelink: fs.readFileSync('/js/sharelink.js').toString(),
    swiper: fs.readFileSync('/js/swiper.js').toString(),
    waypoints: fs.readFileSync('/js/waypoints.js').toString(),
    frontendmodules: fs.readFileSync('/js/frontendmodules.js').toString()
  }
})
