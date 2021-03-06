export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'type-nuxt-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['@/assets/style/app.scss'],
  plugins: ['~/plugins/vuetify.js'],
  
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    '@nuxtjs/vuetify'
  ],
  vuetify: {
     theme: {
       themes: {
         light: {
            primary: '#2c3e50',
            secondary: '#1abc9c',
            accent: '#2980b9',
            error: '#e74c3c',
            action: '#23DB2A'
         }
       }
    }, 
    // customVariables: ['~/assets/style/app.scss']
  }
}

