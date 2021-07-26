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
    robots: fs.readFileSync('./public/robots.txt').toString(),
    dialog: fs.readFileSync('./public/js/dialog.js').toString(),
    elementorwebpackruntime: fs.readFileSync('./public/js/elementorwebpackruntime.js').toString(),
    frontend: fs.readFileSync('./public/js/frontend.js').toString(),
    jquery: fs.readFileSync('./public/js/jquery.js').toString(),
    jquerycore: fs.readFileSync('./public/js/jquerycore.js').toString(),
    jquerymigrate: fs.readFileSync('./public/js/jquerymigrate.js').toString(),
    preloadedmodules: fs.readFileSync('./public/js/preloadedmodules.js').toString(),
    sharelink: fs.readFileSync('./public/js/sharelink.js').toString(),
    swiper: fs.readFileSync('./public/js/swiper.js').toString(),
    waypoints: fs.readFileSync('./public/js/waypoints.js').toString(),
    frontendmodules: fs.readFileSync('./public/js/frontendmodules.js').toString()
  }
})
