<template>
  <div class="container">
    <navbar />

    <main class="download-container">
      <div class="hero-section">
        <h1>Download</h1>
        <p class="subtitle">Get Bubustein's Money Mod for your Minecraft server or single-player world</p>
      </div>

      <section class="download-section">
        <div class="platform-cards">
          <a href="https://modrinth.com/mod/bubustein-money" target="_blank" class="platform-card modrinth">
            <div class="platform-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Modrinth</h3>
            <p>Recommended download source</p>
            <span class="download-btn">Download</span>
          </a>

          <a href="https://www.curseforge.com/minecraft/mc-mods/bubustein-money" target="_blank" class="platform-card curseforge">
            <div class="platform-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <h3>CurseForge</h3>
            <p>Alternative download</p>
            <span class="download-btn">Download</span>
          </a>

          <a href="https://github.com/BUBUSTEIN13/bubustein-money" target="_blank" class="platform-card github">
            <div class="platform-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3>GitHub</h3>
            <p>Source code & releases</p>
            <span class="download-btn">View Repo</span>
          </a>
        </div>
      </section>

      <section class="versions-section">
        <h2>Supported Versions</h2>
        <div class="version-grid">
          <div class="version-badge" v-for="version in supportedVersions" :key="version.name">
            <span class="version-icon">M</span>
            <div class="version-info">
              <span class="version-number">{{ version.name }}</span>
              <span class="version-status" :class="version.status">{{ version.statusText }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="changelog-section">
        <h2>Changelog</h2>

        <div class="changelog">
          <div class="version-header" v-for="release in changelog" :key="release.version">
            <div class="version-info">
              <h3>v{{ release.version }}</h3>
              <span class="release-date">{{ release.date }}</span>
              <span v-if="release.latest" class="latest-badge">Latest</span>
            </div>

            <div class="version-content">
              <div v-if="release.added && release.added.length" class="change-group added">
                <h4>Added</h4>
                <ul>
                  <li v-for="item in release.added" :key="item">{{ item }}</li>
                </ul>
              </div>

              <div v-if="release.changed && release.changed.length" class="change-group changed">
                <h4>Changed</h4>
                <ul>
                  <li v-for="item in release.changed" :key="item">{{ item }}</li>
                </ul>
              </div>

              <div v-if="release.fixed && release.fixed.length" class="change-group fixed">
                <h4>Fixed</h4>
                <ul>
                  <li v-for="item in release.fixed" :key="item">{{ item }}</li>
                </ul>
              </div>

              <div v-if="release.removed && release.removed.length" class="change-group removed">
                <h4>Removed</h4>
                <ul>
                  <li v-for="item in release.removed" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="dependencies-section">
        <h2>Required Dependencies</h2>
        <div class="dependencies-grid">
          <div class="dependency-card required">
            <div class="dep-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div class="dep-info">
              <h4>Architectury API</h4>
              <p>Required for cross-loader compatibility</p>
              <a href="https://modrinth.com/mod/architectury-api" target="_blank" class="dep-link">Download on Modrinth</a>
            </div>
          </div>

          <div class="dependency-card required">
            <div class="dep-icon fabric">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.3 5.9L12 20l10.7-14.1L12 0 1.3 5.9zm10.7 5.5l-4.5 5.6 5.3 1.3 4.5-6.4-5.3-.5zM3.3 6.4l4.9 6.1 5.1-1-4.8-6.1-5.2 1zm18.3.5l-4.6 6 4.8.9 4.2-5.8-4.4-1.1z"/>
              </svg>
            </div>
            <div class="dep-info">
              <h4>Fabric API</h4>
              <p>Required for Fabric mod loader (NOT compatible with Forge)</p>
              <a href="https://modrinth.com/mod/fabric-api" target="_blank" class="dep-link">Download on Modrinth</a>
            </div>
          </div>
        </div>

        <h3 class="optional-header">Optional Dependencies</h3>
        <div class="dependencies-grid optional">
          <div class="dependency-card optional">
            <div class="dep-icon optional-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5c-1.7-4.4-6-7.5-11-7.5zM12 17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/>
              </svg>
            </div>
            <div class="dep-info">
              <h4>Cloth Config API</h4>
              <p>Better config screen styling</p>
              <a href="https://modrinth.com/mod/cloth-config" target="_blank" class="dep-link">Download on Modrinth</a>
            </div>
          </div>

          <div class="dependency-card optional">
            <div class="dep-icon optional-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div class="dep-info">
              <h4>REI (Requires Items)</h4>
              <p>Item display in REI (Only 1.20.1, 1.21.1)</p>
              <a href="https://modrinth.com/mod/rei" target="_blank" class="dep-link">Download on Modrinth</a>
            </div>
          </div>

          <div class="dependency-card optional">
            <div class="dep-icon optional-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <div class="dep-info">
              <h4>JEI (Just Enough Items)</h4>
              <p>Item display in JEI (All versions)</p>
              <a href="https://modrinth.com/mod/jei" target="_blank" class="dep-link">Download on Modrinth</a>
            </div>
          </div>
        </div>

        <div class="incompatible-warning">
          <h4>Incompatible</h4>
          <p><strong>More Culling</strong> - This mod is NOT compatible with More Culling. Disable it to use Bubustein's Money Mod.</p>
        </div>
      </section>

      <section class="requirements-section">
        <h2>System Requirements</h2>
        <div class="requirements-grid">
          <div class="requirement-card">
            <div class="req-icon">J</div>
            <h4>Java</h4>
            <p>Java 17 or higher required</p>
          </div>
          <div class="requirement-card">
            <div class="req-icon">R</div>
            <h4>RAM</h4>
            <p>4GB minimum, 8GB recommended</p>
          </div>
          <div class="requirement-card">
            <div class="req-icon">C</div>
            <h4>CPU</h4>
            <p>Modern dual-core processor</p>
          </div>
          <div class="requirement-card">
            <div class="req-icon">D</div>
            <h4>Storage</h4>
            <p>100MB free disk space</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue';
import Footer from '~/components/footer.vue';

export default {
  components: {
    navbar,
    Footer
  },
  data() {
    return {
      supportedVersions: [
        { name: '1.21.11', status: 'stable', statusText: 'Stable' },
        { name: '1.21.1', status: 'stable', statusText: 'Stable' },
        { name: '1.20.1', status: 'stable', statusText: 'Stable' },
        { name: '26.1.x / 26.2', status: 'upcoming', statusText: 'Coming Soon' }
      ],
      changelog: [
        {
          version: 'x.1.0',
          date: 'February 2025',
          latest: true,
          added: [
            'New card system with 4 card tiers (Rusty, Classic, Gold, Supreme)',
            'Safe - Personal storage for your cards and money',
            'ATM GUI - Complete ATM interface redesign',
            'Auto exchange rates - Rates update automatically',
            'New bank note textures'
          ],
          changed: [
            'Improved performance',
            'Better card upgrade system',
            'Enhanced village ATM spawning'
          ],
          fixed: [
            'Various bug fixes'
          ],
          removed: [
            'Removed structures (no longer spawn in world)',
            'Removed all non-existent currencies'
          ]
        },
        {
          version: 'x.0.12',
          date: 'January 2025',
          latest: false,
          added: [
            'Fixed card upgrade not working properly',
            'New translations: Romanian (RO), German (DE), Polish (PL), Arabic (AR), Wolof (WS), Dutch (NL), Czech (CZ)',
            'Added EGP (Egyptian Pound) currency',
            'Changed village ATM spawn rate',
            'KEY system for cards',
            'New Rusty and Supreme cards',
            'Polymer item and Plastic item'
          ],
          changed: [
            'Improved village ATM placement'
          ],
          fixed: [
            'Card upgrade bug fix'
          ],
          removed: []
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  /* Emerald + Gold + Cream palette */
  --bg-primary: #0f2a22;
  --bg-secondary: #133328;
  --bg-card: #1a4333;
  --bg-card-hover: #205541;

  --accent-emerald: #2fb586;
  --accent-emerald-dark: #1f8a63;
  --accent-gold: #f2c14e;
  --accent-gold-dark: #d4a22a;
  --accent-cream: #f5ecd2;

  --text-primary: #f7f2e2;
  --text-secondary: #cfe3d6;
  --text-muted: #9ab5a6;

  --border-color: rgba(245, 236, 210, 0.12);

  --success: #4ade80;
  --warning: #fbbf24;
  --danger: #ef4444;

  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'Poppins', system-ui, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.65;
}

.container {
  min-height: 100vh;
}

.download-container {
  padding-top: 70px;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 60px;
}

.hero-section {
  text-align: center;
  padding: clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px);
}

.hero-section h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-emerald));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: clamp(1.1rem, 1.5vw, 1.35rem);
  color: var(--text-secondary);
}

.download-section {
  padding: 0 clamp(20px, 4vw, 48px) clamp(50px, 6vw, 80px);
}

.platform-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.platform-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: clamp(30px, 4vw, 45px) clamp(20px, 3vw, 35px);
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.platform-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-gold);
  box-shadow: 0 10px 40px rgba(242, 193, 78, 0.2);
  background: var(--bg-card-hover);
}

.platform-icon {
  width: 65px;
  height: 65px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-emerald));
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.platform-icon svg {
  width: 34px;
  height: 34px;
  color: #1a3a2c;
}

.platform-card h3 {
  color: var(--text-primary);
  font-size: 1.4rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.platform-card p {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 22px;
}

.download-btn {
  display: inline-block;
  padding: 12px 32px;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-gold-dark));
  color: #1a3a2c;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.platform-card:hover .download-btn {
  box-shadow: 0 8px 25px rgba(242, 193, 78, 0.4);
}

.versions-section,
.changelog-section,
.requirements-section,
.dependencies-section {
  padding: clamp(40px, 5vw, 70px) clamp(20px, 4vw, 48px);
}

.versions-section h2,
.changelog-section h2,
.requirements-section h2,
.dependencies-section h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 35px;
  color: var(--text-primary);
  font-weight: 700;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--border-color);
}

.version-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.version-badge {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 16px 24px;
  transition: all 0.3s ease;
}

.version-badge:hover {
  background: var(--bg-card-hover);
  border-color: var(--accent-emerald);
}

.version-icon {
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-emerald));
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
  color: #1a3a2c;
}

.version-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.version-number {
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--text-primary);
}

.version-status {
  font-size: 0.85rem;
  font-weight: 500;
}

.version-status.stable {
  color: var(--success);
}

.version-status.upcoming {
  color: var(--warning);
}

.changelog {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.version-header {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.version-info {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px 28px;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  flex-wrap: wrap;
}

.version-info h3 {
  color: var(--accent-gold);
  font-size: 1.4rem;
  font-weight: 700;
}

.release-date {
  color: var(--text-secondary);
  font-size: 1rem;
}

.latest-badge {
  background: var(--accent-emerald);
  color: #fff;
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
}

.version-content {
  padding: 25px 28px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.change-group h4 {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
  font-weight: 700;
}

.change-group.added h4 { color: var(--success); }
.change-group.changed h4 { color: var(--accent-gold); }
.change-group.fixed h4 { color: var(--warning); }
.change-group.removed h4 { color: var(--danger); }

.change-group ul {
  list-style: none;
  padding: 0;
}

.change-group li {
  color: var(--text-secondary);
  font-size: 1rem;
  padding: 8px 0;
  padding-left: 18px;
  position: relative;
  line-height: 1.5;
}

.change-group li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.change-group.added li::before { background: var(--success); }
.change-group.changed li::before { background: var(--accent-gold); }
.change-group.fixed li::before { background: var(--warning); }
.change-group.removed li::before { background: var(--danger); }

.dependencies-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  margin-bottom: 35px;
}

.dependencies-grid.optional {
  grid-template-columns: repeat(3, 1fr);
}

.dependency-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 25px;
  transition: all 0.3s ease;
}

.dependency-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--accent-emerald);
}

.dependency-card.required {
  border-left: 4px solid var(--success);
}

.dependency-card.optional {
  border-left: 4px solid var(--warning);
}

.dep-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-emerald));
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dep-icon.fabric {
  background: linear-gradient(135deg, #71ddff, #00b0ff);
}

.dep-icon.optional-icon {
  background: linear-gradient(135deg, var(--warning), #f59e0b);
}

.dep-icon svg {
  width: 26px;
  height: 26px;
  color: #1a3a2c;
}

.dep-info h4 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 6px;
  font-weight: 600;
}

.dep-info p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 12px;
  line-height: 1.5;
}

.dep-link {
  color: var(--accent-emerald);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
}

.dep-link:hover {
  color: var(--accent-gold);
  text-decoration: underline;
}

.optional-header {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin: 20px 0 25px;
  font-weight: 600;
}

.incompatible-warning {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid var(--danger);
  border-radius: var(--radius-md);
  padding: 22px 28px;
  margin-top: 30px;
}

.incompatible-warning h4 {
  color: var(--danger);
  font-size: 1.1rem;
  margin-bottom: 8px;
  font-weight: 700;
}

.incompatible-warning p {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.5;
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.requirement-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 30px 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.requirement-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--accent-emerald);
  transform: translateY(-3px);
}

.req-icon {
  width: 55px;
  height: 55px;
  margin: 0 auto 16px;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-emerald));
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.6rem;
  color: #1a3a2c;
}

.requirement-card h4 {
  color: var(--accent-gold);
  font-size: 1.15rem;
  margin-bottom: 8px;
  font-weight: 600;
}

.requirement-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

@media (max-width: 1000px) {
  .platform-cards {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }

  .version-content {
    grid-template-columns: 1fr;
  }

  .dependencies-grid {
    grid-template-columns: 1fr;
  }

  .dependencies-grid.optional {
    grid-template-columns: 1fr;
  }

  .requirements-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .hero-section {
    padding: 50px 20px 40px;
  }

  .requirements-grid {
    grid-template-columns: 1fr;
  }

  .version-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
