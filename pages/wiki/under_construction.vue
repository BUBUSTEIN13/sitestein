<template>
  <div class="container">
    <navbar />

    <main class="wiki-container">
      <div class="construction-page">
        <div class="construction-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
        <h1>Wiki Under Construction</h1>
        <p class="construction-text">The wiki documentation is currently being built.</p>
        <p class="construction-subtext">Please check back later or visit the download page for more information.</p>

        <div class="construction-buttons">
            <a href="/wiki" class="btn btn-secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              View Wiki
            </a>
          <a href="/download" class="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download Page
          </a>
          <a href="/" class="btn btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Home Page
          </a>
        </div>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
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
  display: flex;
  flex-direction: column;
}

.wiki-container {
  flex: 1;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px clamp(20px, 4vw, 48px) clamp(50px, 6vw, 80px);
}

.construction-page {
  text-align: center;
  max-width: 600px;
  padding: 60px 40px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
}

.construction-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto 30px;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-gold-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s ease-in-out infinite;
}

.construction-icon svg {
  width: 50px;
  height: 50px;
  color: #1a3a2c;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.construction-page h1 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-emerald));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.construction-text {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.construction-subtext {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 40px;
}

.construction-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn svg {
  width: 20px;
  height: 20px;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-gold-dark));
  color: #1a3a2c;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(242, 193, 78, 0.35);
}

.btn-secondary {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--bg-card-hover);
  border-color: var(--accent-emerald);
  transform: translateY(-2px);
}

footer {
  background: var(--bg-secondary);
  padding: 30px;
  text-align: center;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
}

footer a {
  color: var(--accent-gold);
  text-decoration: none;
}

footer a:hover {
  color: var(--accent-emerald);
  text-decoration: underline;
}

@media (max-width: 600px) {
  .construction-page {
    padding: 40px 25px;
  }

  .construction-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>