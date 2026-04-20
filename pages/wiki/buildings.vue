<template>
  <div class="container">
    <navbar />

    <main class="doc-container">
      <div class="doc-wrapper">
        <!-- Sidebar -->
        <aside class="sidebar">
          <nav class="doc-nav">
            <a href="/wiki" class="back-link">← Back to Wiki</a>
            <h4>Buildings</h4>
            <ul>
              <li><a href="#atm-locations">ATM Locations</a></li>
              <li><a href="#bank-buildings">Bank Buildings</a></li>
              <li><a href="#biomes">Biome Guide</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Content -->
        <article class="doc-content">
          <h1>Buildings Guide</h1>
          <p class="intro">Find where ATMs and bank buildings spawn in the Minecraft world.</p>

          <section id="atm-locations" class="doc-section">
            <h2>ATM Locations</h2>
            <p>ATM machines spawn naturally in various biomes around the world. They look like small buildings with a glowing screen.</p>

            <div class="location-grid">
              <div class="location-card">
                <div class="location-icon desert"></div>
                <h4>Desert</h4>
                <p>ATMs often appear near desert villages and outposts. Sandy beige buildings with blue accents.</p>
                <span class="rarity common">Common</span>
              </div>

              <div class="location-card">
                <div class="location-icon savanna"></div>
                <h4>Savanna</h4>
                <p>Frequent spawns near savanna villages. Warm brown buildings with orange roofs.</p>
                <span class="rarity common">Common</span>
              </div>

              <div class="location-card">
                <div class="location-icon plains"></div>
                <h4>Plains</h4>
                <p>Found near plains villages. Classic white and brown cottage style.</p>
                <span class="rarity common">Common</span>
              </div>

              <div class="location-card">
                <div class="location-icon taiga"></div>
                <h4>Taiga</h4>
                <p>Snow-covered ATM buildings in cold taiga areas. Spruce wood construction.</p>
                <span class="rarity uncommon">Uncommon</span>
              </div>

              <div class="location-card">
                <div class="location-icon snowy"></div>
                <h4>Snowy Tundra</h4>
                <p>Rare spawns in snowy biomes. Icicle-laden buildings with blue glow.</p>
                <span class="rarity rare">Rare</span>
              </div>

              <div class="location-card">
                <div class="location-icon swamp"></div>
                <h4>Swamp</h4>
                <p>Hidden among swamp vegetation. Dark wooden buildings with green moss.</p>
                <span class="rarity uncommon">Uncommon</span>
              </div>
            </div>
          </section>

          <section id="bank-buildings" class="doc-section">
            <h2>Bank Buildings</h2>
            <p>Large bank buildings spawn in specific locations and offer multiple ATM terminals inside.</p>

            <div class="info-box">
              <h4>🏦 What You'll Find</h4>
              <ul>
                <li>Multiple ATM terminals (2-4 machines)</li>
                <li>Bank counter for admin services</li>
                <li>Exchange rate board showing current rates</li>
                <li>Security features (walls, fences)</li>
              </ul>
            </div>

            <p>Bank buildings spawn in:</p>
            <ul class="spawn-list">
              <li><strong>Plains villages</strong> - Small banks near the town center</li>
              <li><strong>Savanna towns</strong> - Large brick buildings</li>
              <li><strong>Desert cities</strong> - Sandstone architecture with gold trim</li>
            </ul>
          </section>

          <section id="biomes" class="doc-section">
            <h2>Biome Spawn Guide</h2>

            <table class="biome-table">
              <thead>
                <tr>
                  <th>Biome</th>
                  <th>ATM Frequency</th>
                  <th>Bank Frequency</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Desert</td>
                  <td><span class="freq high">High</span></td>
                  <td><span class="freq medium">Medium</span></td>
                  <td>Near village wells and market areas</td>
                </tr>
                <tr>
                  <td>Savanna</td>
                  <td><span class="freq high">High</span></td>
                  <td><span class="freq high">High</span></td>
                  <td>Most common spawn location</td>
                </tr>
                <tr>
                  <td>Plains</td>
                  <td><span class="freq medium">Medium</span></td>
                  <td><span class="freq medium">Medium</span></td>
                  <td>Near blacksmith and churches</td>
                </tr>
                <tr>
                  <td>Taiga (Snowy)</td>
                  <td><span class="freq low">Low</span></td>
                  <td><span class="freq low">Low</span></td>
                  <td>Appears in snowy taiga villages</td>
                </tr>
                <tr>
                  <td>Swamp</td>
                  <td><span class="freq low">Low</span></td>
                  <td><span class="freq none">None</span></td>
                  <td>Hidden structures, harder to find</td>
                </tr>
                <tr>
                  <td>Forest</td>
                  <td><span class="freq rare">Rare</span></td>
                  <td><span class="freq none">None</span></td>
                  <td>Occasionally in small clearings</td>
                </tr>
                <tr>
                  <td>Mountain</td>
                  <td><span class="freq rare">Rare</span></td>
                  <td><span class="freq none">None</span></td>
                  <td>Stone buildings, high elevation</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section class="doc-section">
            <h2>🔍 Tips for Finding Buildings</h2>
            <div class="tip-grid">
              <div class="tip">
                <h4>📍 Use F3 Menu</h4>
                <p>Open the debug menu (F3) to see biome information and navigate efficiently.</p>
              </div>
              <div class="tip">
                <h4>🏘️ Explore Villages</h4>
                <p>Villages are the most reliable spawn locations for both ATMs and banks.</p>
              </div>
              <div class="tip">
                <h4>🌍 Use Explorer Maps</h4>
                <p>If your server has village explorer maps, use them to find ATM locations.</p>
              </div>
            </div>
          </section>

          <div class="next-page">
            <a href="/" class="next-btn">
              ← Back to Home
            </a>
          </div>
        </article>
      </div>
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

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

.doc-container main {
  padding-top: 70px;
}

.doc-wrapper {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  min-height: calc(100vh - 70px);
}

.sidebar {
  width: 260px;
  padding: 40px 30px;
  background: var(--bg-secondary);
  border-right: 1px solid var(--border-color);
  position: sticky;
  top: 70px;
  height: calc(100vh - 70px);
  overflow-y: auto;
}

.back-link {
  display: inline-block;
  color: var(--accent-cyan);
  text-decoration: none;
  margin-bottom: 30px;
  font-size: 0.9rem;
}

.doc-nav h4 {
  color: var(--text-secondary);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.doc-nav ul {
  list-style: none;
}

.doc-nav li {
  margin-bottom: 8px;
}

.doc-nav a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
}

.doc-nav a:hover {
  color: var(--accent-gold);
}

.doc-content {
  flex: 1;
  padding: 60px 80px;
  max-width: 900px;
}

.doc-content h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 15px;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.doc-content .intro {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 50px;
}

.doc-section {
  margin-bottom: 60px;
}

.doc-section h2 {
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: var(--text-primary);
  padding-bottom: 10px;
  border-bottom: 2px solid var(--border-color);
}

.doc-section p {
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.location-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.location-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  position: relative;
}

.location-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 15px;
  border-radius: 12px;
}

.location-icon.desert { background: linear-gradient(135deg, #f4d03f, #d4a853); }
.location-icon.savanna { background: linear-gradient(135deg, #c4a35a, #8b7355); }
.location-icon.plains { background: linear-gradient(135deg, #7cb342, #558b2f); }
.location-icon.taiga { background: linear-gradient(135deg, #b0bec5, #78909c); }
.location-icon.snowy { background: linear-gradient(135deg, #e3f2fd, #bbdefb); }
.location-icon.swamp { background: linear-gradient(135deg, #4a5d23, #2e3d16); }

.location-card h4 {
  color: var(--accent-gold);
  margin-bottom: 10px;
}

.location-card p {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-bottom: 15px;
}

.rarity {
  display: inline-block;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 600;
}

.rarity.common { background: rgba(0, 212, 255, 0.2); color: var(--accent-cyan); }
.rarity.uncommon { background: rgba(139, 92, 246, 0.2); color: #a78bfa; }
.rarity.rare { background: rgba(255, 215, 0, 0.2); color: var(--accent-gold); }

.info-box {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 25px;
  margin: 20px 0;
}

.info-box h4 {
  color: var(--accent-gold);
  margin-bottom: 15px;
}

.info-box ul {
  list-style: none;
}

.info-box li {
  color: var(--text-secondary);
  padding: 5px 0;
}

.spawn-list {
  list-style: none;
  margin-top: 15px;
}

.spawn-list li {
  color: var(--text-secondary);
  padding: 10px 0;
  border-bottom: 1px solid var(--border-color);
}

.spawn-list strong {
  color: var(--accent-cyan);
}

.biome-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.biome-table th,
.biome-table td {
  padding: 15px 20px;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.biome-table th {
  background: var(--bg-card);
  color: var(--accent-gold);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.biome-table td {
  color: var(--text-secondary);
}

.freq {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
}

.freq.high { background: rgba(0, 212, 255, 0.2); color: var(--accent-cyan); }
.freq.medium { background: rgba(139, 92, 246, 0.2); color: #a78bfa; }
.freq.low { background: rgba(255, 107, 107, 0.2); color: #ff6b6b; }
.freq.rare { background: rgba(255, 215, 0, 0.2); color: var(--accent-gold); }
.freq.none { background: rgba(100, 100, 100, 0.2); color: #888; }

.tip-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.tip {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 20px;
}

.tip h4 {
  color: var(--accent-gold);
  margin-bottom: 10px;
}

.tip p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0;
}

.next-page {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.next-btn {
  display: inline-block;
  padding: 15px 30px;
  background: linear-gradient(135deg, var(--accent-gold), #ffaa00);
  color: #000;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.next-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(255, 215, 0, 0.3);
}

@media (max-width: 900px) {
  .doc-wrapper {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    position: relative;
    top: 0;
    height: auto;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }

  .doc-content {
    padding: 40px 20px;
  }

  .location-grid,
  .tip-grid {
    grid-template-columns: 1fr;
  }
}
</style>