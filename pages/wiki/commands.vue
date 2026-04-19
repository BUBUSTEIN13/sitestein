<template>
  <div class="container">
    <navbar />

    <main class="doc-container">
      <div class="doc-wrapper">
        <!-- Sidebar -->
        <aside class="sidebar">
          <nav class="doc-nav">
            <a href="/wiki" class="back-link">← Back to Wiki</a>
            <h4>Commands</h4>
            <ul>
              <li><a href="#account">Account Commands</a></li>
              <li><a href="#bank">Bank Commands</a></li>
              <li><a href="#transfer">Transfer Commands</a></li>
              <li><a href="#card">Card Commands</a></li>
              <li><a href="#currency">Currency Commands</a></li>
              <li><a href="#admin">Admin Commands</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Content -->
        <article class="doc-content">
          <h1>Commands Guide</h1>
          <p class="intro">All mod commands with usage examples and permission requirements.</p>

          <section id="account" class="doc-section">
            <h2>Account Commands</h2>
            <div class="command-block">
              <code>/account create [bank] [currency]</code>
              <p>Create a new bank account. Example: <code>/account create MainBank USD</code></p>
            </div>
            <div class="command-block">
              <code>/account balance</code>
              <p>View your current account balance and currency.</p>
            </div>
            <div class="command-block">
              <code>/account delete [iban]</code>
              <p>Delete your account (admin only for other accounts).</p>
            </div>
            <div class="command-block">
              <code>/account info [iban]</code>
              <p>View detailed account information including interest rates.</p>
            </div>
          </section>

          <section id="bank" class="doc-section">
            <h2>Bank Commands</h2>
            <div class="command-block">
              <code>/bank create [name] [prefix] [exchangeRate]</code>
              <p>Create a new bank (requires admin permissions).</p>
              <small>Example: /bank create "National Bank" NB 1.0</small>
            </div>
            <div class="command-block">
              <code>/bank delete [bankName]</code>
              <p>Delete a bank and all its accounts (admin only).</p>
            </div>
            <div class="command-block">
              <code>/bank list</code>
              <p>List all available banks in the server.</p>
            </div>
            <div class="command-block">
              <code>/bank info [bankName]</code>
              <p>View bank details including exchange rates.</p>
            </div>
            <div class="command-block">
              <code>/bank setrate [bankName] [rate]</code>
              <p>Set exchange rate for a bank (admin only).</p>
            </div>
          </section>

          <section id="transfer" class="doc-section">
            <h2>Transfer Commands</h2>
            <div class="command-block">
              <code>/transfer [iban] [amount]</code>
              <p>Transfer money to another account using IBAN.</p>
            </div>
            <div class="command-block">
              <code>/pay [player] [amount]</code>
              <p>Pay another player directly from your account.</p>
            </div>
            <div class="command-block">
              <code>/deposit [amount]</code>
              <p>Deposit money from your inventory into your account.</p>
            </div>
            <div class="command-block">
              <code>/withdraw [amount]</code>
              <p>Withdraw money from your account to your inventory.</p>
            </div>
          </section>

          <section id="card" class="doc-section">
            <h2>Card Commands</h2>
            <div class="command-block">
              <code>/card create [type]</code>
              <p>Create a new card. Types: debit, credit, savings</p>
            </div>
            <div class="command-block">
              <code>/card upgrade [tier]</code>
              <p>Upgrade your card tier. Tiers: rusty, classic, gold, steel, supreme</p>
            </div>
            <div class="command-block">
              <code>/card bind [iban]</code>
              <p>Bind your card to a specific account.</p>
            </div>
            <div class="command-block">
              <code>/card unbind</code>
              <p>Remove the account binding from your card.</p>
            </div>
            <div class="command-block">
              <code>/card info</code>
              <p>View your current card details and bound account.</p>
            </div>
          </section>

          <section id="currency" class="doc-section">
            <h2>Currency Commands</h2>
            <div class="command-block">
              <code>/currency list</code>
              <p>View all available currencies and their exchange rates.</p>
            </div>
            <div class="command-block">
              <code>/currency convert [from] [to] [amount]</code>
              <p>Convert an amount from one currency to another.</p>
            </div>
            <div class="command-block">
              <code>/currency rate [from] [to]</code>
              <p>Check the current exchange rate between two currencies.</p>
            </div>
          </section>

          <section id="admin" class="doc-section">
            <h2>Admin Commands</h2>
            <div class="info-box warning">
              <h4>Admin Only</h4>
              <p>The following commands require permission level 2 (OP).</p>
            </div>
            <div class="command-block">
              <code>/admin setbalance [player] [amount]</code>
              <p>Set a player's account balance directly.</p>
            </div>
            <div class="command-block">
              <code>/admin invalidate [player]</code>
              <p>Invalidate all accounts for a player.</p>
            </div>
            <div class="command-block">
              <code>/admin reloadconfig</code>
              <p>Reload mod configuration without server restart.</p>
            </div>
            <div class="command-block">
              <code>/admin export</code>
              <p>Export all bank data to a file.</p>
            </div>
          </section>

          <div class="next-page">
            <a href="/wiki/banks" class="next-btn">
              Next: Banks Guide →
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

.command-block {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px 25px;
  margin-bottom: 15px;
}

.command-block code {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  color: var(--accent-gold);
  margin-bottom: 8px;
  background: rgba(255, 215, 0, 0.1);
  padding: 8px 12px;
  border-radius: 8px;
}

.command-block p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 5px;
}

.command-block small {
  display: block;
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-style: italic;
}

.info-box {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px 25px;
  margin-bottom: 15px;
}

.info-box.warning {
  border-color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
}

.info-box h4 {
  color: #ff6b6b;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.info-box p {
  color: var(--text-secondary);
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