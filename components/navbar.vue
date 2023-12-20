<template>
    <header :class="{ 'nav-hidden': scrollingDown || !atTop }">
      <a class="logo" href="/">
        <img src="/large-bubustein-4.png" alt="BUBUSTEIN Logo" />
      </a>
      <nav :class="{ 'nav-open': isNavOpen }">
        <ul class="nav-bar">
          <li v-for="(menuItem, index) in menuItems" :key="index">
          <a class="nav-link" :href="menuItem.link" @click="toggleNav">{{ menuItem.name }}</a>
        </li>
        </ul>
        <div class="hamburger" @click="toggleNav">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    </header>
  </template>
<script>  
export default {
  components:{
    
  },
  data() {
    return {
      scrollingDown: false,
      atTop: true,
      lastScrollTop: 0,
      isNavOpen: false, // Adăugarea variabilei pentru deschiderea/închiderea meniului
      menuItems: [
        { name: 'Projects', link: '/#projects' },
        { name: 'Plans', link: '/#plans' },
        { name: 'Wiki', link: '/wiki' },
        { name: 'News', link: '/news' },
        { name: 'FAQ', link: '/#faq' },
        { name: 'Contact', link: '/#contact' }
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen; // Invertim starea meniului la fiecare apăsare pe butonul hamburger
    },

    handleScroll() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > this.lastScrollTop && currentScroll > 100) {
        this.scrollingDown = true;
      } else {
        this.scrollingDown = false;
      }

      this.atTop = currentScroll <= 0;
      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
  }
};
</script>
  
  <style scoped>
  /* Poți importa stilurile din fișierul extern direct aici sau le poți adapta conform nevoilor */
  @import url('~/assets/style.css');
  header {
  /* Alte stiluri */
  transition: transform 0.3s ease-in-out;
}
.nav-hidden {
  transform: translateY(-100%);
}
.nav-open {
  transform: translateY(0%);
}
  /* Poți adăuga și alte stiluri specifice pentru componenta Navbar aici */
  /* ... */
  </style>
  