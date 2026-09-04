<template>
  <div class="container">
    <navbar />

    <main class="wiki-container">
      <!-- Hero -->
      <section class="wiki-hero">
        <div class="hero-content">
          <h1>BUBUSTEIN's Money Mod</h1>
          <h2>Wiki & Documentation</h2>
          <p>Your complete guide to mastering the economy in Minecraft</p>
        </div>
      </section>

      <!-- Navigation Cards -->
      <section class="wiki-nav">
        <h2>Explore the Wiki</h2>
        <div class="nav-grid">
          <a href="/wiki/installation" class="wiki-card">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </div>
            <h3>Installation</h3>
            <p>Learn how to install the mod on Fabric, NeoForge or Forge for Minecraft 1.20.1, 1.21+</p>
            <span class="card-tag">Getting Started</span>
          </a>

          <a href="/wiki/commands" class="wiki-card">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0-3-3 3 3 0 0 0-3 3"/>
              </svg>
            </div>
            <h3>Commands</h3>
            <p>Complete list of all mod commands with usage examples and permissions</p>
            <span class="card-tag">Reference</span>
          </a>

          <a href="/wiki/under_construction" class="wiki-card">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>
              </svg>
            </div>
            <h3>Banks</h3>
            <p>Create banks, manage accounts, set exchange rates</p>
            <span class="card-tag">Economy</span>
          </a>

          <a href="/wiki/under_construction" class="wiki-card">
            <div class="card-icon">
              <img src="/images/card_classic.png" alt="Cards">
            </div>
            <h3>Cards</h3>
            <p>Debit cards, credit cards, savings* cards - upgrade paths and features</p>
            <span class="card-tag" style="background-color: var(--accent-gold-dark);">5 Debit Tiers</span><span class="card-tag" style="background-color: var(--accent-emerald-dark);">3 Credit Tiers</span>
          </a>

          <a href="/wiki/under_construction" class="wiki-card">
            <div class="card-icon">
              <img src="/images/atm.png" alt="ATM">
            </div>
            <h3>ATM Guide</h3>
            <p>How to use ATM machines - withdraw, deposit, transfer, and more</p>
            <span class="card-tag">Tutorial</span>
          </a>

          <a href="/wiki/under_construction" class="wiki-card">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10"/>
              </svg>
            </div>
            <h3>Buildings</h3>
            <p>Where to find ATM machines and bank buildings in different biomes</p>
            <span class="card-tag">Locations</span>
          </a>
        </div>
      </section>

      <!-- Quick Info -->
      <section class="quick-info">
        <h2>Quick Info</h2>
        <div class="info-grid">
          <div class="info-card">
            <h4>Supported Versions</h4>
            <p>Minecraft 1.20.1, 1.21.1, 1.21.11, 26.2</p>
          </div>
          <div class="info-card">
            <h4>Currencies</h4>
            <p>15+ real-world currencies</p>
          </div>
          <div class="info-card">
            <h4>Card Tiers</h4>
            <p>Rusty, Classic, Gold, Steel, Supreme for Debit</p>
            <p>Classic, Gold, Platinum for Credit cards</p>
          </div>
          <div class="info-card">
            <h4>Loan Interest</h4>
            <p>15%, 10%, 5% depending on tier</p>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue';
import Footer from '~/components/footer.vue';

export default {
  components: {
    navbar,
    Footer
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --bg-card: #1a1a24;
  --accent-gold: #ffd700;
  --accent-cyan: #00d4ff;
  --text-primary: #ffffff;
  --text-secondary: #a0a0b0;
  --border-color: rgba(255, 255, 255, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
}

.container {
  min-height: 100vh;
}

.wiki-container main {
  padding-top: 70px;
}

/* Hero */
.wiki-hero {
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-primary), var(--bg-secondary));
  padding: 60px 20px;
  text-align: center;
}

.hero-content h1 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 15px;
  color: #f2c14e;
  text-align: center;
  background: linear-gradient(135deg, #f2c14e, #2fb586);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-content h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 15px;
  color: #f2c14e;
  text-align: center;
  background: linear-gradient(135deg, #f2c14e, #2fb586);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-content p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

/* Wiki Navigation */
.wiki-nav {
  padding: 80px 20px;
  background: var(--bg-secondary);
}

.wiki-nav h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 50px;
  color: var(--text-primary);
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.wiki-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 30px;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.wiki-card:hover {
  border-color: var(--accent-gold);
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(255, 215, 0, 0.1);
}

.card-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-icon svg {
  width: 50px;
  height: 50px;
  stroke: var(--accent-gold);
}

.wiki-card h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.wiki-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  flex-grow: 1;
  margin-bottom: 15px;
}

.card-tag {
  margin-top:10px;
  padding: 5px 12px;
  background: rgba(0, 212, 255, 0.1);
  color: var(--accent-cyan);
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 600;
  width: fit-content;
}

/* Quick Info */
.quick-info {
  padding: 80px 20px;
  background: var(--bg-primary);
}

.quick-info h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.info-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 25px;
  text-align: center;
}

.info-card h4 {
  color: var(--accent-gold);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.info-card p {
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
}

/* Footer */
footer {
  background: var(--bg-secondary);
  padding: 30px;
  text-align: center;
  border-top: 1px solid var(--border-color);
}

footer a {
  color: var(--accent-cyan);
  text-decoration: none;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-grid {
    grid-template-columns: 1fr;
  }
  
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>