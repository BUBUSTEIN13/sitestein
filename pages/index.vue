<template>
  <div class="container">
    <navbar />

    <main>
      <!-- Hero Section -->
      <section id="hero">
        <div class="hero-bg"></div>
        <div class="hero-content">
          <h1 class="hero-title">BUBUSTEIN</h1>
          <p class="hero-subtitle">Bringing Real-World Currency Into Minecraft</p>
          <div class="hero-description">
            <p>Transform your Minecraft experience with Bubustein's Money Mod!</p>
            <p>From USD to EUR, GBP to JPY — spend, save, and trade with realistic banknotes and coins.</p>
          </div>
          <div class="hero-buttons">
            <a href="/download" class="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Mod
            </a>
            <a href="/wiki" class="btn btn-secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              View Wiki
            </a>
          </div>
          <div class="social-links">
            <a href="https://discord.gg/PrKgF9gNfW" target="_blank" class="social-btn discord">
              <SimpleIconsDiscord/>
              <span>Discord</span>
            </a>
            <a href="https://modrinth.com/mod/bubustein-money" target="_blank" class="social-btn modrinth">
              <SimpleIconsModrinth/>
              <span>Modrinth</span>
            </a>
            <a href="https://www.curseforge.com/minecraft/mc-mods/bubustein-money" target="_blank" class="social-btn curseforge">
              <SimpleIconsCurseforge/>
              <span>CurseForge</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features">
        <h2 class="section-title">What's Inside?</h2>
        <p class="section-subtitle">Everything you need for a complete economy experience</p>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <img src="/images/icon-coins.png" alt="Coins">
            </div>
            <h3>Multiple Currencies</h3>
            <p>15+ real-world currencies including USD, EUR, GBP, JPY, and more. Collect coins and banknotes from around the world!</p>
            <div class="feature-tag">200+ Items</div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img src="/images/icon-card.png" alt="Cards">
            </div>
            <h3>Debit & Credit Cards</h3>
            <p>Upgrade your Rusty card to Steel, earn interest on savings, or manage debt with credit cards. Your financial freedom awaits!</p>
            <div class="feature-tag">5 Card Tiers</div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img src="/images/icon-atm.png" alt="ATM">
            </div>
            <h3>ATM Machines</h3>
            <p>Withdraw, deposit, and transfer money at ATM terminals scattered across the world. Insert your card and manage your finances!</p>
            <div class="feature-tag">Instant Access</div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img src="/images/icon-wallet.png" alt="Wallet">
            </div>
            <h3>Wallet System</h3>
            <p>Store your currency and cards in a portable wallet. Right-click to open your personal 18-slot storage container.</p>
            <div class="feature-tag">Portable</div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>
              </svg>
            </div>
            <h3>Bank System</h3>
            <p>Create and manage banks with custom exchange rates. Each bank has its own accounts, interest rates, and financial services.</p>
            <div class="feature-tag">Full Economy</div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Exchange Rates</h3>
            <p>Real-time currency exchange with automatic rate updates. Trade between currencies and watch the market fluctuate!</p>
            <div class="feature-tag">Live Rates</div>
          </div>
        </div>
      </section>

      <!-- Free Forever Section -->
      <section id="plans">
        <h2 class="section-title">Free Forever</h2>
        <p class="section-subtitle">This mod is 100% free. However, you can buy me a coffee</p>

        <div class="pricing-grid">
          <div class="pricing-card free">
            <div class="pricing-header">
              <h3>Free Download</h3>
              <div class="price">$0</div>
            </div>
            <ul class="pricing-features">
              <li>Download from Modrinth or CurseForge</li>
              <li>All currencies included</li>
              <li>Basic ATM access</li>
              <li>Standard card tiers</li>
              <li>Full bank system</li>
              <li>Wallet with 18 slots</li>
            </ul>
            <div class="pricing-buttons">
              <a href="https://modrinth.com/mod/bubustein-money" target="_blank" class="cta cta--modrinth">
                <SimpleIconsModrinth/> Download on Modrinth
              </a>
              <a href="https://www.curseforge.com/minecraft/mc-mods/bubustein-money" target="_blank" class="cta cta--curseforge">
                <SimpleIconsCurseforge/> Download on CurseForge
              </a>
            </div>
          </div>

          <div class="pricing-card donator">
            <div class="pricing-badge">Donator</div>
            <div class="pricing-header">
              <h3>Support Me</h3>
              <div class="price">$3+</div>
            </div>
            <p class="donator-text">If you enjoy this mod, you can buy me a coffee!</p>
            <ul class="pricing-features">
              <li>One-time donation</li>
              <li>No monthly commitment</li>
              <li>Special Thanks</li>
              <li>My eternal gratitude</li>
            </ul>
            <div class="pricing-buttons">
              <a href="https://ko-fi.com/bubustein" target="_blank" class="cta cta--kofi">
                <SimpleIconsKofi/> Buy Me a Coffee
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Download Section -->
      <section id="download">
        <div class="download-card">
          <div class="download-content">
            <h2>Ready to Play?</h2>
            <p>Download Bubustein's Money Mod for Minecraft 1.20.1, 1.21.1, 1.21.11+</p>
            <div class="download-platforms">
              <a href="https://modrinth.com/mod/bubustein-money" target="_blank" class="platform-btn modrinth">
                <SimpleIconsModrinth/>
                <span>Modrinth</span>
                <small>Recommended</small>
              </a>
              <a href="https://www.curseforge.com/minecraft/mc-mods/bubustein-money" target="_blank" class="platform-btn curseforge">
                <SimpleIconsCurseforge/>
                <span>CurseForge</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about">
        <div class="about-content">
          <h2>About Me</h2>
          <div class="about-text">
            <p>Hey there! I'm <strong>BUBUSTEIN</strong>, the developer behind Bubustein's Money Mod.</p>
            <p>I created this mod because I wanted to bring real-world money into Minecraft. Whether you're playing on a roleplay server or just want a more immersive experience, this mod has everything you need.</p>
            <p>I regularly play on our <a href="https://discord.gg/PrKgF9gNfW" target="_blank">Roleplay Server</a>, so feel free to join and say hi!</p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact">
        <h2 class="section-title">Get in Touch</h2>
        <p class="section-subtitle">Have questions? Need help? I'm here!</p>
        <div class="contact-links">
          <a href="https://discord.gg/PrKgF9gNfW" target="_blank" class="contact-btn discord">
            <SimpleIconsDiscord/>
            <span>Join our Discord</span>
          </a>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue';
import Footer from '~/components/footer.vue';
import SimpleIconsDiscord from '~/components/SimpleIconsDiscord.vue';
import SimpleIconsModrinth from '~/components/SimpleIconsModrinth.vue';
import SimpleIconsCurseforge from '~/components/SimpleIconsCurseforge.vue';
import SimpleIconsKofi from '~/components/SimpleIconsKofi.vue';

export default {
  components: {
    navbar,
    Footer,
    SimpleIconsDiscord,
    SimpleIconsModrinth,
    SimpleIconsCurseforge,
    SimpleIconsKofi
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800;900&display=swap');

:root {
  /* Emerald + Gold + Cream palette */
  --bg-primary: #0f2a22;
  --bg-secondary: #133328;
  --bg-card: #1a4333;
  --bg-card-hover: #205541;
  --bg-header: rgba(15, 42, 34, 0.92);

  --accent-emerald: #2fb586;
  --accent-emerald-dark: #1f8a63;
  --accent-gold: #f2c14e;
  --accent-gold-dark: #d4a22a;
  --accent-cream: #f5ecd2;

  --text-primary: #f7f2e2;
  --text-secondary: #cfe3d6;
  --text-muted: #9ab5a6;

  --border-color: rgba(245, 236, 210, 0.12);
  --border-strong: rgba(242, 193, 78, 0.35);

  --success: #4ade80;
  --warning: #fbbf24;
  --danger: #ef4444;
  --info: #60a5fa;

  --font-body: 'Inter', 'Poppins', system-ui, sans-serif;
  --font-display: 'Inter', 'Poppins', sans-serif;

  --shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.25);
  --shadow-md: 0 8px 30px rgba(0, 0, 0, 0.35);
  --shadow-gold: 0 8px 30px rgba(242, 193, 78, 0.2);

  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html {
  -webkit-text-size-adjust: 100%;
  font-size: 16px;
}

@media (min-width: 1600px) {
  html { font-size: 17px; }
}

body {
  font-family: var(--font-body);
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.65;
  min-height: 100vh;
  overflow-x: hidden;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding-top: 70px;
  width: 100%;
}

/* Hero Section */
#hero {
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: clamp(40px, 6vw, 80px) clamp(20px, 4vw, 48px);
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: url('/images/hero-banner.png') center/cover no-repeat;
  opacity: 0.25;
  filter: blur(3px);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
}

.hero-title {
  font-size: clamp(3.5rem, 12vw, 7rem);
  font-weight: 900;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-emerald));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
  letter-spacing: -1px;
  text-shadow: none;
}

.hero-subtitle {
  font-size: clamp(1.3rem, 3vw, 2rem);
  color: var(--text-secondary);
  margin-bottom: 35px;
  font-weight: 400;
}

.hero-description {
  margin-bottom: 45px;
}

.hero-description p {
  color: var(--text-secondary);
  font-size: clamp(1.1rem, 1.5vw, 1.3rem);
  margin-bottom: 12px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 45px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}

.btn svg {
  width: 22px;
  height: 22px;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-gold-dark));
  color: #1a3a2c;
  box-shadow: var(--shadow-gold);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(242, 193, 78, 0.35);
  color: #0e1a14;
}

.btn-secondary {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--bg-card-hover);
  border-color: var(--accent-emerald);
  transform: translateY(-3px);
  color: var(--text-primary);
}

.social-links {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.social-btn:hover {
  border-color: var(--accent-emerald);
  transform: translateY(-2px);
  background: var(--bg-card-hover);
}

.social-btn svg {
  width: 22px;
  height: 22px;
}

/* Sections */
section {
  padding: clamp(60px, 8vw, 110px) clamp(20px, 4vw, 48px);
}

.section-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  text-align: center;
  margin-bottom: 16px;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-emerald));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.section-subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: clamp(1.1rem, 1.5vw, 1.35rem);
  margin: 0 auto 56px;
  max-width: 720px;
}

/* Features Grid */
#features {
  background: var(--bg-secondary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1300px;
  margin: 0 auto;
}

.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 35px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: var(--accent-gold);
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  background: var(--bg-card-hover);
}

.feature-icon {
  width: 90px;
  height: 90px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.feature-icon svg {
  width: 65px;
  height: 65px;
  stroke: var(--accent-gold);
}

.feature-card h3 {
  font-size: 1.4rem;
  margin-bottom: 16px;
  color: var(--text-primary);
  font-weight: 600;
}

.feature-card p {
  color: var(--text-secondary);
  font-size: 1.05rem;
  margin-bottom: 18px;
  line-height: 1.7;
}

.feature-tag {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(242, 193, 78, 0.15);
  color: var(--accent-gold);
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
}

/* Free Forever / Donations Section */
#plans {
  background: var(--bg-primary);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 35px;
  max-width: 900px;
  margin: 0 auto;
}

.pricing-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 40px;
  position: relative;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.pricing-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 24px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.free .pricing-badge {
  background: linear-gradient(135deg, var(--accent-emerald), var(--accent-emerald-dark));
  color: #fff;
}

.donator .pricing-badge {
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-gold-dark));
  color: #1a3a2c;
}

.pricing-header {
  text-align: center;
  margin-bottom: 25px;
  padding-top: 10px;
}

.pricing-header h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.price {
  font-size: 3rem;
  font-weight: 800;
  color: var(--accent-gold);
}

.donator-text {
  color: var(--text-secondary);
  font-size: 1.05rem;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.6;
}

.pricing-features {
  list-style: none;
  margin-bottom: 30px;
}

.pricing-features li {
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 1rem;
}

.pricing-features li::before {
  content: "✓";
  color: var(--accent-emerald);
  margin-right: 12px;
  font-weight: 700;
}

.pricing-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 24px;
  border-radius: var(--radius-sm);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.cta svg {
  width: 20px;
  height: 20px;
}

.cta--modrinth {
  background: #1bd96a;
  color: #000;
}

.cta--modrinth:hover {
  background: #17c45f;
  transform: translateY(-2px);
}

.cta--curseforge {
  background: #f16402;
  color: #fff;
}

.cta--curseforge:hover {
  background: #d85a02;
  transform: translateY(-2px);
}

.cta--kofi {
  background: #ff00e5;
  color: #fff;
}

.cta--kofi:hover {
  background: #e600cc;
  transform: translateY(-2px);
}

/* Download Section */
#download {
  background: linear-gradient(135deg, var(--bg-secondary), var(--bg-primary));
}

.download-card {
  max-width: 700px;
  margin: 0 auto;
  background: linear-gradient(135deg, var(--bg-card), var(--bg-secondary));
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: clamp(40px, 5vw, 60px);
  text-align: center;
}

.download-content h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 14px;
  color: var(--text-primary);
}

.download-content p {
  color: var(--text-secondary);
  font-size: 1.15rem;
  margin-bottom: 35px;
}

.download-platforms {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.platform-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 30px;
  border-radius: var(--radius-sm);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  background: var(--bg-primary);
  color: var(--text-primary);
  position: relative;
}

.platform-btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent-emerald);
}

.platform-btn small {
  position: absolute;
  top: -12px;
  right: -12px;
  background: var(--accent-emerald);
  color: #fff;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.platform-btn svg {
  width: 26px;
  height: 26px;
}

/* About Section */
#about {
  background: var(--bg-secondary);
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about-text p {
  color: var(--text-secondary);
  margin-bottom: 18px;
  font-size: 1.15rem;
  line-height: 1.7;
}

.about-text a {
  color: var(--accent-gold);
  text-decoration: none;
  font-weight: 500;
}

.about-text a:hover {
  color: var(--accent-emerald);
  text-decoration: underline;
}

/* Contact Section */
#contact {
  background: var(--bg-primary);
}

.contact-links {
  display: flex;
  justify-content: center;
}

.contact-btn {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 40px;
  border-radius: var(--radius-md);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  background: #5865F2;
  color: #fff;
}

.contact-btn:hover {
  background: #4752c4;
  transform: translateY(-3px);
  box-shadow: 0 10px 35px rgba(88, 101, 242, 0.3);
  color: #fff;
}

.contact-btn svg {
  width: 26px;
  height: 26px;
}

/* Footer */
footer {
  background: var(--bg-secondary);
  padding: 40px;
  text-align: center;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 1rem;
}

footer a {
  color: var(--accent-gold);
  text-decoration: none;
  font-weight: 500;
}

footer a:hover {
  color: var(--accent-emerald);
  text-decoration: underline;
}

/* Scrollbar */
::-webkit-scrollbar { width: 12px; }
::-webkit-scrollbar-track { background: var(--bg-primary); }
::-webkit-scrollbar-thumb {
  background: linear-gradient(var(--accent-emerald-dark), var(--accent-emerald));
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover { background: var(--accent-gold); }

/* Responsive */
@media (max-width: 900px) {
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .social-links {
    flex-direction: column;
    align-items: center;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .download-platforms {
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  .hero-title {
    letter-spacing: 0;
  }

  .pricing-buttons {
    flex-direction: column;
  }

  .cta {
    width: 100%;
  }
}
</style>
