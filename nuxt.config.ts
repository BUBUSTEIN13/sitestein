export default defineNuxtConfig({
  
  devtools: { enabled: false },
  compatibilityDate: 'latest',
  css: ['~/assets/style.css'],
  app: {
    head: {
      title: "Bubustein's Money Mod — Minecraft Economy & Banking System",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'copyrighted-site-verification', content: '7190812fb2c716c9' },

        // SEO
        {
          name: 'description',
          content: "Bubustein's Money Mod — a full banking and economy system for Minecraft Fabric & NeoForge. Free on Modrinth & CurseForge."
        },
        {
          name: 'keywords',
          content: 'minecraft economy mod, minecraft banking mod, fabric economy mod, neoforge money mod, bubustein money mod, cash mod, coins mod, banknotes mod, atm mod, minecraft cash mod, fabric money mod'
        },

        // Open Graph (preview pe Discord, social media)
        { property: 'og:title', content: "Bubustein's Money Mod" },
        { property: 'og:description', content: 'Minecraft banking and economy mod for Fabric & NeoForge. Free forever.' },
        { property: 'og:image', content: 'https://bubustein.com/favicon.png' },
        { property: 'og:url', content: 'https://bubustein.com/' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://bubustein.com/' }
      ],
      script: [
        {
          src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
          defer: true
        },
        {
          src: 'https://kit.fontawesome.com/40dc1031cc.js',
          async: true,
          crossorigin: 'anonymous'
        },
        // Schema.org — spune explicit Google-ului ce e site-ul
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Bubustein's Money Mod",
            "applicationCategory": "GameApplication",
            "operatingSystem": "Minecraft Java Edition",
            "description": "Banking and economy system mod for Minecraft Fabric and NeoForge.",
            "url": "https://bubustein.com",
            "author": { "@type": "Person", "name": "BUBUSTEIN" }
          })
        }
      ]
    }
  }
})