// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css:['~/assets/style.css'],
  app:{
    head: {
        title: 'BUBUSTEIN Town',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        ],
        link:[{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        script: [
            {
                src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
                defer: true
            }, 
            {
              src: 'https://kit.fontawesome.com/40dc1031cc.js',
              async: true,
              crossorigin:"anonymous"
  
            }
        ]
    }
   
  }
})
