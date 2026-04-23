<template>
  <div class="container">
    <navbar />

    <main class="doc-container">
      <div class="doc-wrapper">
        <!-- Sidebar -->
        <aside class="sidebar">
          <nav class="doc-nav">
            <a href="/wiki" class="back-link">← Back to Wiki</a>
            <h4>ATM Guide</h4>
            <ul>
              <li><a href="#using">Using the ATM</a></li>
              <li><a href="#menu">ATM Menu</a></li>
              <li><a href="#tips">Tips & Tricks</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Content -->
        <article class="doc-content">
          <h1>ATM Guide</h1>
          <p class="intro">Learn how to use ATM machines to manage your money on the go.</p>

          <section id="using" class="doc-section">
            <h2>Using the ATM</h2>
            <div class="step">
              <h3>Step 1: Find an ATM</h3>
              <p>ATM machines are located in various biomes around the world. Check the <a href="/wiki/buildings">Buildings Guide</a> for exact locations.</p>
            </div>

            <div class="step">
              <h3>Step 2: Insert Your Card</h3>
              <p>Right-click on the ATM block with a debit or credit card in your hand.</p>
            </div>

            <div class="step">
              <h3>Step 3: Enter PIN</h3>
              <p>Use the ATM interface to enter your 4-digit PIN (created when you bind the card).</p>
            </div>

            <div class="step">
              <h3>Step 4: Choose Action</h3>
              <p>Select from the ATM menu what you want to do: withdraw, deposit, check balance, transfer, etc.</p>
            </div>
          </section>

          <section id="menu" class="doc-section">
            <h2>ATM Menu Options</h2>

            <div class="menu-grid">
              <div class="menu-option">
                <h4>💵 Withdraw</h4>
                <p>Take money out of your account. The ATM will calculate the best combination of bills and coins.</p>
              </div>

              <div class="menu-option">
                <h4>💰 Deposit</h4>
                <p>Put money into your account. Drop bills and coins in the interface.</p>
              </div>

              <div class="menu-option">
                <h4>📊 Balance</h4>
                <p>View your current account balance and card tier info.</p>
              </div>

              <div class="menu-option">
                <h4>🔄 Transfer</h4>
                <p>Send money to another account using their IBAN number.</p>
              </div>

              <div class="menu-option">
                <h4>💳 Pay</h4>
                <p>Pay another player directly from your account (no IBAN needed).</p>
              </div>

              <div class="menu-option">
                <h4>📜 Statement</h4>
                <p>View recent transactions and account history.</p>
              </div>
            </div>
          </section>

          <section id="tips" class="doc-section">
            <h2>Tips & Tricks</h2>

            <div class="tip-card">
              <h4>⚡ Quick Tip: Currency Conversion</h4>
              <p>ATMs automatically convert currencies if you have multiple accounts. Your card can access any of your accounts in any currency.</p>
            </div>

            <div class="tip-card">
              <h4>🔒 Security</h4>
              <p>Never share your PIN! If you lose your card, use <code>/card unbind</code> immediately to prevent unauthorized access.</p>
            </div>

            <div class="tip-card">
              <h4>📱 Portable Banking</h4>
              <p>Your Wallet item can store cards, allowing you to have multiple cards with you at once!</p>
            </div>

            <div class="info-box">
              <h4>Credit Card Tip</h4>
              <p>When using a credit card at the ATM, you can withdraw up to your credit limit (negative balance). Interest accrues on the borrowed amount.</p>
            </div>
          </section>

          <div class="next-page">
            <a href="/wiki/buildings" class="next-btn">
              Next: Buildings Guide →
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

.doc-section a {
  color: var(--accent-cyan);
  text-decoration: none;
}

.doc-section a:hover {
  text-decoration: underline;
}

.step {
  margin-bottom: 30px;
}

.step h3 {
  font-size: 1.2rem;
  color: var(--accent-cyan);
  margin-bottom: 10px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.menu-option {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 25px;
}

.menu-option h4 {
  color: var(--accent-gold);
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.menu-option p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 0;
}

.tip-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 15px;
}

.tip-card h4 {
  color: var(--accent-gold);
  margin-bottom: 10px;
}

.tip-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 0;
}

.tip-card code {
  background: rgba(255, 215, 0, 0.1);
  padding: 3px 8px;
  border-radius: 5px;
  color: var(--accent-gold);
  font-size: 0.85rem;
}

.info-box {
  background: var(--bg-card);
  border: 1px solid var(--accent-cyan);
  border-radius: 12px;
  padding: 20px 25px;
  margin: 20px 0;
}

.info-box h4 {
  color: var(--accent-cyan);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.info-box p {
  color: var(--text-secondary);
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

  .menu-grid {
    grid-template-columns: 1fr;
  }
}
</style>