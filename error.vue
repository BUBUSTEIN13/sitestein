<template>
  <div class="container">
    <navbar />

    <main class="error-container">
      <div class="error-page">
        <div class="error-code">404</div>
        <div class="error-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
            <line x1="9" y1="9" x2="9.01" y2="9"/>
            <line x1="15" y1="9" x2="15.01" y2="9"/>
          </svg>
        </div>
        <h1>Page Not Found</h1>
        <p class="error-text">Oops! The page you're looking for doesn't exist.</p>
        <p class="error-subtext">It might have been moved, deleted, or you may have typed the wrong URL.</p>

        <div class="error-buttons">
          <a href="/" class="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Go Home
          </a>
          <a href="/download" class="btn btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download
          </a>
        </div>

        <div class="quick-links">
          <h3>Quick Links</h3>
          <div class="links-grid">
            <a href="/download" class="quick-link">
              <span class="link-icon">D</span>
              Download
            </a>
            <a href="/wiki" class="quick-link">
              <span class="link-icon">W</span>
              Wiki
            </a>
            <a href="/credits" class="quick-link">
              <span class="link-icon">C</span>
              Credits
            </a>
            <a href="/news" class="quick-link">
              <span class="link-icon">N</span>
              News
            </a>
          </div>
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

.error-container {
  flex: 1;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px clamp(20px, 4vw, 48px) clamp(50px, 6vw, 80px);
}

.error-page {
  text-align: center;
  max-width: 550px;
  padding: 60px 40px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
}

.error-code {
  font-size: clamp(5rem, 15vw, 9rem);
  font-weight: 900;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-emerald));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 10px;
}

.error-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 25px;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-gold-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-icon svg {
  width: 40px;
  height: 40px;
  color: #1a3a2c;
}

.error-page h1 {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.error-text {
  font-size: 1.15rem;
  color: var(--text-secondary);
  margin-bottom: 10px;
}

.error-subtext {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 35px;
}

.error-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
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

.quick-links {
  padding-top: 30px;
  border-top: 1px solid var(--border-color);
}

.quick-links h3 {
  font-size: 1rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
  font-weight: 500;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.quick-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.quick-link:hover {
  background: var(--bg-card-hover);
  border-color: var(--accent-emerald);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.link-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, var(--accent-emerald), var(--accent-emerald-dark));
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
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
  .error-page {
    padding: 40px 25px;
  }

  .error-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
