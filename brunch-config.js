module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': /^(?!app)/,
        'js/app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /.*scss$/
      }
    }
  },

  plugins: {
    babel: {
      presets: ['es2015']
    },
    autoReload: {
      match: {
        stylesheets: ['*.css', '*.jpg', '*.png'],
        javascripts: ['*.js'],
        templates: ['*.pug']
      }
    },
    sass: {
      mode: 'native'
    },
    pug: {
      pretty: true,
      preCompile: true,
      locals: {
        appName: 'My App'
      },
      globals: ['App']
    }
  }
}
