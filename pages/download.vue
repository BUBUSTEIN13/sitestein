<template>
  <div class="container">
    <navbar />

    <main class="download-page">
      <section class="hero-section">
        <div class="section-shell hero-shell">
          <h1 class="hero-title">Download</h1>
          <p class="hero-subtitle">
            Get Bubustein's Money Mod for your Minecraft server or single-player world
          </p>
        </div>
      </section>

      <section class="download-section">
        <div class="section-shell">
          <div class="platform-cards">
            <a href="https://modrinth.com/mod/bubustein-money" target="_blank" rel="noopener noreferrer" class="platform-card modrinth">
              <div class="platform-icon">
                <SimpleIconsModrinth />
              </div>
              <h3><span>Modrinth</span></h3><small class="recommended">Recommended</small>
              <p>Recommended download source</p>
              <span class="download-btn">Download</span>
            </a>

            <a href="https://www.curseforge.com/minecraft/mc-mods/bubustein-money" target="_blank" rel="noopener noreferrer" class="platform-card curseforge">
              <div class="platform-icon">
                <SimpleIconsCurseforge />
              </div>
              <h3>CurseForge</h3>
              <p>Alternative download</p>
              <span class="download-btn">Download</span>
            </a>

            <a href="https://github.com/BUBUSTEIN13/bubustein-money" target="_blank" rel="noopener noreferrer" class="platform-card github">
              <div class="platform-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3>GitHub</h3>
              <p>Source code & releases</p>
              <span class="download-btn">View Repo</span>
            </a>
          </div>
        </div>
      </section>

      <section class="versions-section">
        <div class="section-shell narrow-shell">
          <h2 class="section-title">Supported Versions</h2>
          <p class="section-subtitle">Minecraft versions and upcoming compatibility targets</p>

          <div class="version-grid">
            <div class="version-badge" v-for="version in supportedVersions" :key="version.name">
              <span class="version-icon">M</span>
              <div class="version-meta">
                <span class="version-number">{{ version.name }}</span>
                <span class="version-status" :class="version.status">{{ version.statusText }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="changelog-section">
        <div class="section-shell">
          <h2 class="section-title">Changelog</h2>
          <p class="section-subtitle">Major updates, fixes, and content changes across recent versions</p>

          <div class="changelog-list">
            <article class="release-card" v-for="release in changelog" :key="release.version">
              <div class="release-header">
                <div>
                  <h3>v{{ release.version }}</h3>
                  <p class="release-date">{{ release.date }}</p>
                </div>
                <span v-if="release.latest" class="latest-badge">Latest</span>
              </div>

              <div class="release-content">
                <div v-if="release.added && release.added.length" class="change-group added">
                  <h4>Added</h4>
                  <ul>
                    <li v-for="item in release.added" :key="`added-${release.version}-${item}`">{{ item }}</li>
                  </ul>
                </div>

                <div v-if="release.changed && release.changed.length" class="change-group changed">
                  <h4>Changed</h4>
                  <ul>
                    <li v-for="item in release.changed" :key="`changed-${release.version}-${item}`">{{ item }}</li>
                  </ul>
                </div>

                <div v-if="release.fixed && release.fixed.length" class="change-group fixed">
                  <h4>Fixed</h4>
                  <ul>
                    <li v-for="item in release.fixed" :key="`fixed-${release.version}-${item}`">{{ item }}</li>
                  </ul>
                </div>

                <div v-if="release.removed && release.removed.length" class="change-group removed">
                  <h4>Removed</h4>
                  <ul>
                    <li v-for="item in release.removed" :key="`removed-${release.version}-${item}`">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="dependencies-section">
        <div class="section-shell">
          <h2 class="section-title">Dependencies</h2>
          <p class="section-subtitle">Required and optional mods for full compatibility and integrations</p>

          <h3 class="subsection-title">Required</h3>
          <div class="dependencies-grid required-grid">
            <div class="dependency-card required">
              <div class="dep-icon">
                <img height="64" width="64" src="https://cdn.modrinth.com/data/lhGA9TYQ/05fe3a61c28faaccaec3533b92e1b321edde7bf6_96.webp">
              </div>
              <div class="dep-info">
                <h4>Architectury API</h4>
                <p>Required for cross-loader compatibility</p>
                <a href="https://modrinth.com/mod/architectury-api" target="_blank" rel="noopener noreferrer" class="dep-link">Download on Modrinth</a>
              </div>
            </div>

            <div class="dependency-card required">
              <div class="dep-icon fabric">
                <img alt="Fabric-API Icon" height="64" width="64" src="https://cdn.modrinth.com/data/P7dR8mSH/icon.png">
              </div>
              <div class="dep-info">
                <h4>Fabric API</h4>
                <p>Required for Fabric mod loader (not compatible with Forge)</p>
                <a href="https://modrinth.com/mod/fabric-api" target="_blank" rel="noopener noreferrer" class="dep-link">Download on Modrinth</a>
              </div>
            </div>
          </div>

          <h3 class="subsection-title">Optional</h3>
          <div class="dependencies-grid optional-grid">
            <div class="dependency-card optional">
              <div class="dep-icon optional-icon">
                <img width="64" height="64" src="https://cdn.modrinth.com/data/9s6osm5g/ed8a2316cbb6f4fc5f510e8e13a59a85cbbbff4d_96.webp">
              </div>
              <div class="dep-info">
                <h4>Cloth Config API</h4>
                <p>Better config screen styling</p>
                <a href="https://modrinth.com/mod/cloth-config" target="_blank" rel="noopener noreferrer" class="dep-link">Download on Modrinth</a>
              </div>
            </div>

            <div class="dependency-card optional">
              <div class="dep-icon optional-icon">
                <img height="64" width="64" src="https://cdn.modrinth.com/data/nfn13YXA/54ac5daa4166011bae713448e84413987316433a_96.webp">
              </div>
              <div class="dep-info">
                <h4>REI (Roughly Enough Items)</h4>
                <p>Item display in REI (only 1.20.1, 1.21.1)</p>
                <a href="https://modrinth.com/mod/rei" target="_blank" rel="noopener noreferrer" class="dep-link">Download on Modrinth</a>
              </div>
            </div>

            <div class="dependency-card optional">
              <div class="dep-icon optional-icon">
                <img src="https://media.forgecdn.net/avatars/thumbnails/29/69/64/64/635838945588716414.jpeg">
              </div>
              <div class="dep-info">
                <h4>JEI (Just Enough Items)</h4>
                <p>Item display in JEI (all versions)</p>
                <a href="https://modrinth.com/mod/jei" target="_blank" rel="noopener noreferrer" class="dep-link">Download on Modrinth</a>
              </div>
            </div>
          </div>

          <div class="incompatible-warning">
            <h4>Incompatible</h4>
            <p><strong>More Culling</strong> - This mod is not compatible with More Culling. Disable it to use Bubustein's Money Mod.</p>
          </div>
        </div>
      </section>

      <section class="requirements-section">
        <div class="section-shell">
          <h2 class="section-title">System Requirements</h2>
          <p class="section-subtitle">Basic hardware and runtime requirements to run the mod smoothly</p>

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
        </div>
      </section>

      <section class="contact-section">
        <div class="section-shell contact-shell">
          <h2 class="section-title">Get in Touch</h2>
          <p class="section-subtitle">Have questions? Need help? I'm here!</p>
          <div class="contact-links">
            <a href="https://discord.gg/PrKgF9gNfW" target="_blank" rel="noopener noreferrer" class="contact-btn discord">
              <SimpleIconsDiscord />
              <span>Join our Discord</span>
            </a>
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
import SimpleIconsDiscord from '~/components/SimpleIconsDiscord.vue';
import SimpleIconsModrinth from '~/components/SimpleIconsModrinth.vue';
import SimpleIconsCurseforge from '~/components/SimpleIconsCurseforge.vue';

export default {
  components: {
    navbar,
    Footer,
    SimpleIconsDiscord,
    SimpleIconsModrinth,
    SimpleIconsCurseforge
  },
  data() {
    return {
      supportedVersions: [
        { name: '1.20.1', status: 'stable', statusText: 'Stable' },
        { name: '1.21.1', status: 'stable', statusText: 'Stable' },
        { name: '1.21.11', status: 'stable', statusText: 'Stable' },
        { name: '26.1.x / 26.2', status: 'upcoming', statusText: 'Coming Soon' }
      ],
      changelog: [
        {
          version: 'x.1.0 RELEASE',
          date: 'April 2026',
          latest: true,
          added: [
            'Update exchange rates (auto sync every 7 days in the jar using the official BCE XML rates)',
            'New card system. (and a better one) based by the UUID and other things',
            'New useful commands.',
            'ATM GUI.'
          ],
          changed: [
            'Improved performance'
          ],
          fixed: [
            'Various bug fixes',
            'JEI Compat for 1.21.11 and newer'
          ],
          removed: []
        },
        {
          version: 'x.0.12 Beta',
          date: 'September 2025',
          latest: false,
          added: [
            'If you have [currency] in your command help description it will appear the currency abreviation (e.g. HUF, RON, EUR)',
            'Set the max balance per card to 1 000 000 000 (1 Billion)',
            'New translations: Romanian (RO), German (DE), Polish (PL), Arabic (AR), Shakespearean English (WS), Dutch (NL), Czech (CZ)',
            'Added EGP (Egyptian Pound) currency',
            'Added the KEY (you need it to have access to the Bank Machine, has 50 durability, enchantable with UNBREAKING and MENDING)',
            'Added new custom landmarks (Cottage, Hotel, Snowy Mansion - high value landmarks, Desert Castle, Gong, Jungle Hut, Mangrove Witch Hut, Swamp Witch Hut - small landmarks)',
            'KEY system for cards',
            'New Rusty and Supreme cards',
            'Added Polymer, Polymer Sheet, Plastic, Plastic Card.'
          ],
          changed: [
            'Changed the village houses (now there are different houses for every village with custom loot, regional currencies)',
            'Changed the recipes for getting smaller banknotes or bigger ones (you now have to go to Crafting Table)',
            'Changed the Recipes for ATM, Cards',
            'Change the tax of Steel Card to 1%',
            'Changed the textures of every card (removed the transparency corners)',
            'Changed the Villager profession textures (Banker & Exchanger)'
          ],
          fixed: [
            'Fixed when upgrading from a card to another (if you have money in it the money stays)',
            'Fixed SetdefaultCurrency command (the command itself will only change in the config file, so only the new cards will have the new currency set)',
            'Fix setCurrency Command',
            'Fix withdraw command',
            'Fix broken textures.'
          ],
          removed: ['Removed BGN (Bulgarian Leva)']
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --bg-primary: #272a3b;
  --bg-secondary: #131733;
  --bg-card: #1a2043;
  --bg-card-hover: #202555;

  --accent-emerald: #2fb586;
  --accent-emerald-dark: #1f8a63;
  --accent-gold: #f2c14e;
  --accent-gold-dark: #d4a22a;

  --text-primary: #f7f2e2;
  --text-secondary: #cfe3d6;
  --text-muted: #9ab5a6;

  --border-color: rgba(245, 236, 210, 0.12);
  --success: #4ade80;
  --warning: #fbbf24;
  --danger: #ef4444;

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
}

html {
  -webkit-text-size-adjust: 100%;
  font-size: 16px;
}

body {
  font-family: var(--font-body);
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.65;
  overflow-x: hidden;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.download-page {
  flex: 1;
  width: 100%;
  padding-top: 70px;
}

section {
  padding: clamp(60px, 8vw, 110px) 0;
}

.section-shell {
  width: min(1300px, calc(100% - clamp(40px, 8vw, 96px)));
  margin: 0 auto;
}

.narrow-shell {
  width: min(1100px, calc(100% - clamp(40px, 8vw, 96px)));
}

.hero-section {
  min-height: calc(55vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-primary), var(--bg-secondary));
}

.hero-shell {
  text-align: center;
  max-width: 900px;
}

.hero-title,
.section-title {
  font-family: var(--font-display);
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-emerald));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5.5rem);
  margin-bottom: 16px;
  line-height: 1.05;
}

.hero-subtitle,
.section-subtitle {
  color: var(--text-secondary);
  font-size: clamp(1.05rem, 1.4vw, 1.25rem);
  line-height: 1.7;
}

.section-title {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  text-align: center;
  margin-bottom: 16px;
}

.section-subtitle {
  text-align: center;
  margin: 0 auto 56px;
  max-width: 720px;
}

.download-section,
.changelog-section,
.requirements-section,
.contact-section {
  background: var(--bg-primary);
}

.versions-section,
.dependencies-section {
  background: var(--bg-secondary);
}

.platform-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.platform-card,
.release-card,
.dependency-card,
.requirement-card,
.version-badge {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}
.recommended{
  position: absolute;
  top: -13px;
  right: -13px;
  background: var(--accent-emerald-dark);
  color: #fff;
  padding: 5px 10px;
  border-radius: 800px;
  font-size: 0.75rem;
  font-weight: 600;
}
.platform-card {
  border-radius: var(--radius-lg);
  padding: clamp(30px, 4vw, 45px) clamp(20px, 3vw, 35px);
  text-align: center;
  text-decoration: none;
}

.platform-card:hover,
.release-card:hover,
.dependency-card:hover,
.requirement-card:hover,
.version-badge:hover {
  transform: translateY(-5px);
  border-color: var(--accent-gold);
  box-shadow: var(--shadow-md);
  background: var(--bg-card-hover);
}

.platform-icon,
.req-icon,
.version-icon,
.dep-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.platform-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 22px;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-emerald));
  border-radius: var(--radius-md);
}

.platform-icon svg {
  width: 34px;
  height: 34px;
  color: #1a3a2c;
}

.platform-card h3 {
  color: var(--text-primary);
  font-size: 1.45rem;
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
  box-shadow: var(--shadow-gold);
}

.version-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.version-badge {
  display: flex;
  align-items: center;
  gap: 14px;
  border-radius: var(--radius-md);
  padding: 18px 22px;
}

.version-icon,
.req-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-emerald));
  border-radius: var(--radius-sm);
  font-weight: 800;
  color: #1a3a2c;
}

.version-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.version-number {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text-primary);
}

.version-status {
  font-size: 0.9rem;
  font-weight: 600;
}

.version-status.stable {
  color: var(--success);
}

.version-status.upcoming {
  color: var(--warning);
}

.changelog-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.release-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.release-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 24px 28px;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid var(--border-color);
  flex-wrap: wrap;
}

.release-header h3 {
  color: var(--accent-gold);
  font-size: 1.45rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.release-date {
  color: var(--text-secondary);
}

.latest-badge {
  background: var(--accent-emerald);
  color: #fff;
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
}

.release-content {
  padding: 28px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.change-group h4,
.subsection-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 14px;
}

.subsection-title {
  color: var(--text-primary);
  margin: 8px 0 18px;
}

.change-group.added h4 { color: var(--success); }
.change-group.changed h4 { color: var(--accent-gold); }
.change-group.fixed h4 { color: var(--warning); }
.change-group.removed h4 { color: var(--danger); }

.change-group ul {
  list-style: none;
}

.change-group li {
  color: var(--text-secondary);
  font-size: 1rem;
  padding: 8px 0 8px 18px;
  position: relative;
  line-height: 1.6;
}

.change-group li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 17px;
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
  gap: 24px;
}

.required-grid {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  margin-bottom: 30px;
}

.optional-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.dependency-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  border-radius: var(--radius-md);
  padding: 24px;
}

.dep-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-emerald));
}

.dep-icon.fabric {
  background: linear-gradient(135deg, #71ddff, #00b0ff);
}

.dep-icon.optional-icon {
  background: linear-gradient(135deg, var(--warning), #f59e0b);
}

.dep-icon svg {
  width: 28px;
  height: 28px;
  color: #1a3a2c;
}

.dependency-card.required {
  border-left: 4px solid var(--success);
}

.dependency-card.optional {
  border-left: 4px solid var(--warning);
}

.dep-info h4 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 6px;
  font-weight: 600;
}

.dep-info p {
  color: var(--text-secondary);
  font-size: 0.98rem;
  margin-bottom: 12px;
  line-height: 1.6;
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
  line-height: 1.6;
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 22px;
}

.requirement-card {
  border-radius: var(--radius-md);
  padding: 30px 20px;
  text-align: center;
}

.req-icon {
  margin: 0 auto 16px;
  font-size: 1.6rem;
}

.requirement-card h4 {
  color: var(--accent-gold);
  font-size: 1.15rem;
  margin-bottom: 8px;
  font-weight: 600;
}

.requirement-card p {
  color: var(--text-secondary);
  font-size: 0.98rem;
}

.contact-shell {
  text-align: center;
}

.contact-links {
  display: flex;
  justify-content: center;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 20px 40px;
  border-radius: var(--radius-md);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.15rem;
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

@media (max-width: 900px) {
  .release-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .hero-section {
    min-height: auto;
  }

  .release-header {
    align-items: flex-start;
  }

  .contact-btn {
    width: 100%;
    justify-content: center;
  }

  .section-shell,
  .narrow-shell {
    width: min(1300px, calc(100% - 32px));
  }
}
</style>
