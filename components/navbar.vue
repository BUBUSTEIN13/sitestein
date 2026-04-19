<template>
  <header :class="{ 'nav-hidden': scrollingDown || !atTop }">
    <a class="logo" href="/">
      <img src="/large-bubustein-5.png" alt="BUBUSTEIN Logo" />
    </a>
    <nav :class="{ 'nav-open': isNavOpen }">
      <ul class="nav-bar">
        <li v-for="(menuItem, index) in menuItems" :key="index">
          <a class="nav-link" :href="menuItem.link" @click="closeNav">{{ menuItem.name }}</a>
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
  components: {
  },
  data() {
    return {
      scrollingDown: false,
      atTop: true,
      lastScrollTop: 0,
      isNavOpen: false,
      menuItems: [
        { name: 'Home', link: '/' },
        { name: 'Download', link: '/download' },
        { name: 'Wiki', link: '/wiki' },
        { name: 'Credits', link: '/credits' },
        { name: 'Discord', link: 'https://discord.gg/PrKgF9gNfW' }
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
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
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
@import url('~/assets/style.css');

header {
  transition: transform 0.3s ease-in-out;
  background: rgba(10, 10, 15, 0.9);
  backdrop-filter: blur(10px);
}

.nav-hidden {
  transform: translateY(-100%);
}

.nav-open {
  transform: translateY(0%);
}

/* Navbar background on scroll */
header::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(10, 10, 15, 0.95), transparent);
  pointer-events: none;
}

header {
  position: fixed;
}
</style>