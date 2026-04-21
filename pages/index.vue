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
              <img src="/images/five_euros.png" alt="Coins">
            </div>
            <h3>Multiple Currencies</h3>
            <p>15+ real-world currencies including USD, EUR, GBP, JPY, and more. Collect coins and banknotes from around the world!</p>
            <div class="feature-tag">200+ Items</div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img src="/images/card_classic.png" alt="Cards">
            </div>
            <h3>Debit & Credit Cards</h3>
            <p>Upgrade your Rusty card to Steel, earn interest on savings, or manage debt with credit cards. Your financial freedom awaits!</p>
            <div class="feature-tag">5 Card Tiers</div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img src="/images/atm.png" alt="ATM">
            </div>
            <h3>ATM Machines</h3>
            <p>Withdraw, deposit, and transfer money at ATM terminals scattered across the world. Insert your card and manage your finances!</p>
            <div class="feature-tag">Instant Access</div>
          </div>

          <div class="feature-card">
            <small class="soon">Soon - WIP</small>
            <div class="feature-icon">
              <img src="/images/icon-wallet.png" alt="Wallet">
            </div>
            <h3><span>Wallet System</span></h3>
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