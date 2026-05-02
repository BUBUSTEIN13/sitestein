<template>
  <div class="container">
    <navbar />

    <main class="doc-container">
      <div class="doc-wrapper">
        <!-- Sidebar -->
        <aside class="sidebar">
          <nav class="doc-nav">
            <a href="/wiki" class="back-link">← Back to Wiki</a>
            <h4>Getting Started</h4>
            <ul>
              <li><a href="#requirements">Requirements</a></li>
              <li><a href="#fabric">Fabric Installation</a></li>
              <li><a href="#forge">Forge/NeoForge Installation</a></li>
              <li><a href="#troubleshooting">Troubleshooting</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Content -->
        <article class="doc-content">
          <h1>Installation Guide</h1>
          <p class="intro">Get Bubustein's Money Mod running on your Minecraft server or single-player world.</p>

          <section id="requirements" class="doc-section">
            <h2>Requirements</h2>
            <div class="info-box">
              <h4>Supported Minecraft Versions</h4>
              <p>1.20.1 • 1.21.1 • 1.21.11</p>
            </div>
            <div class="info-box">
              <h4>Supported Mod Loaders</h4>
              <p>Fabric • NeoForge • MinecraftForge</p>
            </div>
            <div class="info-box warning">
              <h4>Important</h4>
              <p>You need a mod loader (Fabric, Neoforge or Forge) installed before installing this mod. The mod will not work on vanilla Minecraft.</p>
            </div>
          </section>

          <section id="fabric" class="doc-section">
            <h2>Fabric Installation</h2>

            <div class="step">
              <h3>Step 1: Install Fabric</h3>
              <ol>
                <li>Download <strong>Fabric Installer</strong> from <a href="https://fabricmc.net/use/installer/" target="_blank">fabricmc.net</a></li>
                <li>Run the installer (requires Java 17 for 1.20.1, Java 21 for 1.21.x and Java 25 for 26.x)</li>
                <li>Select your Minecraft version</li>
                <li>Click "Install" to create a Fabric profile</li>
              </ol>
            </div>

            <div class="step">
              <h3>Step 2: Download the Mod</h3>
              <ol>
                <li>Go to <a href="https://modrinth.com/mod/bubustein-money" target="_blank">Modrinth</a> or <a href="https://www.curseforge.com/minecraft/mc-mods/bubustein-money" target="_blank">CurseForge</a></li>
                <li>Select your Minecraft version</li>
                <li>Download the latest JAR file</li>
              </ol>
            </div>

            <div class="step">
              <h3>Step 3: Install the Mod</h3>
              <ol>
                <li>Open Minecraft with your Fabric profile</li>
                <li>Click "Mods" on the main menu</li>
                <li>Drag and drop the downloaded JAR file into the mods folder</li>
                <li>Restart Minecraft</li>
              </ol>
            </div>
          </section>

          <section id="forge" class="doc-section">
            <h2>Forge Installation</h2>

            <div class="step">
              <h3>Step 1: Install NeoForge/Forge</h3>
              <ol>
                <li>Download <strong>Forge Installer</strong> from <a href="https://files.minecraftforge.net/" target="_blank">files.minecraftforge.net</a> <br> Download <strong>NeoForge Installer</strong> from <a href="https://https://neoforged.net/" target="_blank">neoforged.net</a></li>
                
                <li>Select your Minecraft version</li>
                <li>Choose "Install Client" (for single-player) or "Install Server" (for servers)</li>
                <li>Run the installer and wait for completion</li>
              </ol>
            </div>

            <div class="step">
              <h3>Step 2: Download the Mod</h3>
              <p>Get the mod from <a href="https://modrinth.com/mod/bubustein-money" target="_blank">Modrinth</a> or <a href="https://www.curseforge.com/minecraft/mc-mods/bubustein-money" target="_blank">CurseForge</a></p>
            </div>

            <div class="step">
              <h3>Step 3: Install the Mod</h3>
              <ul>
                <li><strong>Client:</strong> Copy the JAR to <code>%appdata%\.minecraft\mods\</code></li>
                <li><strong>Server:</strong> Copy the JAR to your server's <code>mods/</code> folder</li>
              </ul>
            </div>
          </section>

          <section id="troubleshooting" class="doc-section">
            <h2>Troubleshooting</h2>

            <div class="faq-item">
              <h4>Q: The mod doesn't load</h4>
              <p>A: Make sure you have the correct mod loader installed (Fabric or Forge). Also check if your Minecraft version matches the mod version.</p>
            </div>

            <div class="faq-item">
              <h4>Q: Missing dependencies error</h4>
              <p>A: This mod requires <strong>Architectury API</strong>. Download it from <a href="https://modrinth.com/mod/architectury-api" target="_blank">Modrinth</a>.</p>
            </div>

            <div class="faq-item">
              <h4>Q: Crashes on startup</h4>
              <p>A: Try updating your graphics drivers. If that doesn't work, check if you have conflicting mods installed.</p>
            </div>
          </section>

          <div class="next-page">
            <a href="/wiki/commands" class="next-btn">
              Next: Commands Guide →
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

/* Sidebar */
.sidebar {
  width: 260px;
  padding: 40px 30px;
  padding-top: calc(70px + 40px);
  background: var(--bg-secondary);
  border-right: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  height: 100dvh;
  overflow-y: auto;
}
.back-link {
  display: inline-block;
  color: var(--accent-cyan);
  text-decoration: none;
  margin-bottom: 30px;
  font-size: 0.9rem;
}

.back-link:hover {
  text-decoration: underline;
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
  transition: color 0.2s;
}

.doc-nav a:hover {
  color: var(--accent-gold);
}

/* Content */
.doc-content {
  flex: 1;
  padding: 60px 80px;
  max-width: 900px;
}

.doc-content h1 {
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

.info-box {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px 25px;
  margin-bottom: 15px;
}

.info-box h4 {
  color: var(--accent-gold);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.info-box p {
  color: var(--text-primary);
  font-size: 1rem;
}

.info-box.warning {
  border-color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
}

.info-box.warning h4 {
  color: #ff6b6b;
}

.step {
  margin-bottom: 35px;
}

.step h3 {
  font-size: 1.3rem;
  color: var(--accent-cyan);
  margin-bottom: 15px;
}

.step ol, .step ul {
  margin-left: 25px;
}

.step li {
  color: var(--text-secondary);
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.step code {
  background: var(--bg-card);
  padding: 3px 8px;
  border-radius: 5px;
  font-size: 0.85rem;
  color: var(--accent-gold);
}

.faq-item {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px 25px;
  margin-bottom: 15px;
}

.faq-item h4 {
  color: var(--accent-gold);
  margin-bottom: 10px;
}

.faq-item p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.doc-content a {
  color: var(--accent-cyan);
  text-decoration: none;
}

.doc-content a:hover {
  text-decoration: underline;
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

/* Responsive */
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
}
</style>