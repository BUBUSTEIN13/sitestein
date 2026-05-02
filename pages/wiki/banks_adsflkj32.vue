<template>
  <div class="container">
    <navbar />

    <main class="doc-container">
      <div class="doc-wrapper">
        <!-- Sidebar -->
        <aside class="sidebar">
          <nav class="doc-nav">
            <a href="/wiki" class="back-link">← Back to Wiki</a>
            <h4>Banks</h4>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#creating">Creating Banks</a></li>
              <li><a href="#accounts">Accounts</a></li>
              <li><a href="#interest">Interest Rates</a></li>
              <li><a href="#exchange">Exchange Rates</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Content -->
        <article class="doc-content">
          <h1>Banks Guide</h1>
          <p class="intro">Learn how to create and manage banks, accounts, and financial services.</p>

          <section id="overview" class="doc-section">
            <h2>Overview</h2>
            <p>Banks are the core of Bubustein's Money Mod economy system. Each bank operates independently with its own:</p>
            <ul class="feature-list">
              <li>Custom exchange rates between currencies</li>
              <li>Individual interest rates for savings and loans</li>
              <li>Private account system with IBAN identifiers</li>
              <li>Admin-controlled permissions and settings</li>
            </ul>
          </section>

          <section id="creating" class="doc-section">
            <h2>Creating a Bank</h2>
            <p>Only players with admin permissions can create banks.</p>
            <div class="code-block">
              <code>/bank create [name] [prefix] [baseRate]</code>
              <small>Example: /bank create "First National" FN 1.0</small>
            </div>
            <div class="info-box">
              <h4>Parameters</h4>
              <ul>
                <li><strong>name:</strong> Display name for the bank (can contain spaces)</li>
                <li><strong>prefix:</strong> 2-3 letter code for IBAN generation (e.g., "FN")</li>
                <li><strong>baseRate:</strong> Base exchange rate multiplier (1.0 = normal)</li>
              </ul>
            </div>
          </section>

          <section id="accounts" class="doc-section">
            <h2>Bank Accounts</h2>
            <p>Players can create multiple accounts in different currencies within the same bank.</p>

            <div class="step">
              <h3>Creating an Account</h3>
              <div class="code-block">
                <code>/account create [bankName] [currency]</code>
                <small>Example: /account create FirstNational EUR</small>
              </div>
            </div>

            <div class="step">
              <h3>Available Currencies</h3>
              <div class="currency-grid">
                <span class="currency-tag">EUR</span>
                <span class="currency-tag">USD</span>
                <span class="currency-tag">GBP</span>
                <span class="currency-tag">CAD</span>
                <span class="currency-tag">RON</span>
                <span class="currency-tag">CHF</span>
                <span class="currency-tag">JPY</span>
                <span class="currency-tag">AUD</span>
                <span class="currency-tag">CNY</span>
                <span class="currency-tag">INR</span>
                <span class="currency-tag">KRW</span>
                <span class="currency-tag">MXN</span>
                <span class="currency-tag">BRL</span>
                <span class="currency-tag">PLN</span>
                <span class="currency-tag">SEK</span>
              </div>
            </div>

            <div class="step">
              <h3>IBAN System</h3>
              <p>Each account gets a unique IBAN (International Bank Account Number) for transfers:</p>
              <div class="code-block">
                <code>[PREFIX]-[RANDOM_ID] (e.g., FN-847291)</code>
              </div>
            </div>
          </section>

          <section id="interest" class="doc-section">
            <h2>Interest Rates</h2>
            <p>Interest is calculated based on card tier and account type:</p>

            <table class="data-table">
              <thead>
                <tr>
                  <th>Card Tier</th>
                  <th>Savings Interest</th>
                  <th>Loan Interest</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rusty</td>
                  <td>1% per period</td>
                  <td>20% per period</td>
                </tr>
                <tr>
                  <td>Classic</td>
                  <td>2% per period</td>
                  <td>15% per period</td>
                </tr>
                <tr>
                  <td>Gold</td>
                  <td>3% per period</td>
                  <td>10% per period</td>
                </tr>
                <tr>
                  <td>Steel</td>
                  <td>4% per period</td>
                  <td>7% per period</td>
                </tr>
                <tr>
                  <td>Supreme</td>
                  <td>5% per period</td>
                  <td>5% per period</td>
                </tr>
              </tbody>
            </table>
            <p class="table-note">Interest periods are approximately 7 real-life days (1 Minecraft "year").</p>
          </section>

          <section id="exchange" class="doc-section">
            <h2>Exchange Rates</h2>
            <p>Banks can set custom exchange rates for currency conversion within their system.</p>
            <div class="code-block">
              <code>/bank setrate [bankName] [currencyFrom] [currencyTo] [rate]</code>
              <small>Example: /bank setrate FirstNational EUR USD 1.08</small>
            </div>
            <p>Exchange rates are automatically fetched from online sources every 7 days, but admins can override them.</p>
          </section>

          <div class="next-page">
            <a href="/wiki/cards" class="next-btn">
              Next: Cards Guide →
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
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 15px;
  color: #f2c14e;
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

.doc-section p {
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.feature-list {
  list-style: none;
  margin: 20px 0;
}

.feature-list li {
  color: var(--text-secondary);
  padding: 10px 0;
  padding-left: 25px;
  position: relative;
}

.feature-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--accent-gold);
}

.code-block {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px 25px;
  margin: 20px 0;
}

.code-block code {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  color: var(--accent-gold);
  margin-bottom: 5px;
}

.code-block small {
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.info-box {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px 25px;
  margin: 20px 0;
}

.info-box h4 {
  color: var(--accent-cyan);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
}

.info-box ul {
  list-style: none;
}

.info-box li {
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.info-box strong {
  color: var(--accent-gold);
}

.step {
  margin-bottom: 35px;
}

.step h3 {
  font-size: 1.2rem;
  color: var(--accent-cyan);
  margin-bottom: 15px;
}

.currency-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.currency-tag {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.data-table th,
.data-table td {
  padding: 15px 20px;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.data-table th {
  background: var(--bg-card);
  color: var(--accent-gold);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.data-table td {
  color: var(--text-secondary);
}

.table-note {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-style: italic;
  margin-top: 10px;
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
}
</style>