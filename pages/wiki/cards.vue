<template>
  <div class="container">
    <navbar />

    <main class="doc-container">
      <div class="doc-wrapper">
        <!-- Sidebar -->
        <aside class="sidebar">
          <nav class="doc-nav">
            <a href="/wiki" class="back-link">← Back to Wiki</a>
            <h4>Cards</h4>
            <ul>
              <li><a href="#types">Card Types</a></li>
              <li><a href="#tiers">Card Tiers</a></li>
              <li><a href="#creating">Creating Cards</a></li>
              <li><a href="#upgrading">Upgrading</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Content -->
        <article class="doc-content">
          <h1>Cards Guide</h1>
          <p class="intro">Everything about debit cards, credit cards, and savings cards in Bubustein's Money Mod.</p>

          <section id="types" class="doc-section">
            <h2>Card Types</h2>

            <div class="card-type">
              <h3>💳 Debit Cards</h3>
              <p>Standard cards linked to your bank account. Used for ATM withdrawals and payments.</p>
              <ul>
                <li>Direct access to account balance</li>
                <li>Withdraw/deposit at ATMs</li>
                <li>Pay at shops (in roleplay servers)</li>
                <li>Tier upgrades affect interest rates</li>
              </ul>
            </div>

            <div class="card-type">
              <h3>💰 Credit Cards</h3>
              <p>Special cards that allow you to spend beyond your balance up to a credit limit.</p>
              <ul>
                <li>Access to credit line (negative balance)</li>
                <li>Interest on borrowed amounts</li>
                <li>Credit limit based on tier</li>
                <li>Monthly debt cap per tier</li>
              </ul>
            </div>

            <div class="card-type">
              <h3>🏦 Savings Cards</h3>
              <p>Dedicated cards for your savings account with higher interest rates.</p>
              <ul>
                <li>Cannot go negative (no debt)</li>
                <li>Higher savings interest</li>
                <li>Long-term growth focused</li>
                <li>Safe way to store money</li>
              </ul>
            </div>
          </section>

          <section id="tiers" class="doc-section">
            <h2>Card Tiers</h2>
            <p>Upgrade your cards to unlock better benefits and lower interest rates!</p>

            <div class="tier-grid">
              <div class="tier-card rusty">
                <span class="tier-badge">Tier 1</span>
                <h4>Rusty Card</h4>
                <p class="tier-desc">The basic starter card. Every new player gets this.</p>
                <div class="tier-stats">
                  <div><span>Savings:</span> <strong>1%</strong></div>
                  <div><span>Loan:</span> <strong>20%</strong></div>
                  <div><span>Debt Cap:</span> <strong>$1,000</strong></div>
                </div>
              </div>

              <div class="tier-card classic">
                <span class="tier-badge">Tier 2</span>
                <h4>Classic Card</h4>
                <p class="tier-desc">A step up from rusty. Better rates for regular users.</p>
                <div class="tier-stats">
                  <div><span>Savings:</span> <strong>2%</strong></div>
                  <div><span>Loan:</span> <strong>15%</strong></div>
                  <div><span>Debt Cap:</span> <strong>$5,000</strong></div>
                </div>
              </div>

              <div class="tier-card gold">
                <span class="tier-badge">Tier 3</span>
                <h4>Gold Card</h4>
                <p class="tier-desc">Premium tier with significant improvements.</p>
                <div class="tier-stats">
                  <div><span>Savings:</span> <strong>3%</strong></div>
                  <div><span>Loan:</span> <strong>10%</strong></div>
                  <div><span>Debt Cap:</span> <strong>$25,000</strong></div>
                </div>
              </div>

              <div class="tier-card steel">
                <span class="tier-badge">Tier 4</span>
                <h4>Steel Card</h4>
                <p class="tier-desc">For serious users who want lower costs.</p>
                <div class="tier-stats">
                  <div><span>Savings:</span> <strong>4%</strong></div>
                  <div><span>Loan:</span> <strong>7%</strong></div>
                  <div><span>Debt Cap:</span> <strong>$100,000</strong></div>
                </div>
              </div>

              <div class="tier-card supreme">
                <span class="tier-badge">Tier 5</span>
                <h4>Supreme Card</h4>
                <p class="tier-desc">The ultimate tier. Best rates in the game.</p>
                <div class="tier-stats">
                  <div><span>Savings:</span> <strong>5%</strong></div>
                  <div><span>Loan:</span> <strong>5%</strong></div>
                  <div><span>Debt Cap:</span> <strong>Unlimited</strong></div>
                </div>
              </div>
            </div>
          </section>

          <section id="creating" class="doc-section">
            <h2>Creating Cards</h2>
            <p>You can create cards using the following commands:</p>
            <div class="code-block">
              <code>/card create debit</code>
              <small>Create a debit card</small>
            </div>
            <div class="code-block">
              <code>/card create credit</code>
              <small>Create a credit card</small>
            </div>
            <div class="code-block">
              <code>/card create savings</code>
              <small>Create a savings card</small>
            </div>
            <div class="info-box">
              <h4>Note</h4>
              <p>Cards must be bound to an account with IBAN using <code>/card bind [iban]</code> before they can be used.</p>
            </div>
          </section>

          <section id="upgrading" class="doc-section">
            <h2>Upgrading Cards</h2>
            <p>Upgrade your card tier to get better rates:</p>
            <div class="code-block">
              <code>/card upgrade [tier]</code>
              <small>Example: /card upgrade gold</small>
            </div>
            <p>Tiers available: rusty, classic, gold, steel, supreme</p>
          </section>

          <div class="next-page">
            <a href="/wiki/atm" class="next-btn">
              Next: ATM Guide →
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

.card-type {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 20px;
}

.card-type h3 {
  color: var(--accent-gold);
  margin-bottom: 10px;
}

.card-type ul {
  list-style: none;
  margin-top: 15px;
}

.card-type li {
  color: var(--text-secondary);
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.card-type li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--accent-cyan);
}

.tier-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.tier-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 25px;
  position: relative;
}

.tier-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.rusty .tier-badge { background: #8b4513; color: #fff; }
.classic .tier-badge { background: #c0c0c0; color: #000; }
.gold .tier-badge { background: linear-gradient(135deg, #ffd700, #ffaa00); color: #000; }
.steel .tier-badge { background: #4a4a4a; color: #fff; }
.supreme .tier-badge { background: linear-gradient(135deg, #8b5cf6, #a855f7); color: #fff; }

.tier-card h4 {
  font-size: 1.3rem;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.tier-desc {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 15px;
}

.tier-stats {
  display: flex;
  gap: 20px;
}

.tier-stats div {
  background: var(--bg-primary);
  padding: 8px 15px;
  border-radius: 8px;
}

.tier-stats span {
  color: var(--text-secondary);
  font-size: 0.8rem;
}

.tier-stats strong {
  color: var(--accent-cyan);
}

.code-block {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px 25px;
  margin: 15px 0;
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
  margin-bottom: 10px;
}

.info-box p {
  color: var(--text-secondary);
}

.info-box code {
  background: rgba(0, 212, 255, 0.1);
  padding: 3px 8px;
  border-radius: 5px;
  color: var(--accent-cyan);
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

  .tier-stats {
    flex-wrap: wrap;
  }
}
</style>