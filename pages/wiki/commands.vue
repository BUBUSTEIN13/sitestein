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
              <li><a href="#help">Help</a></li>
              <li><a href="#accounts">Accounts & Cards</a></li>
              <li><a href="#banks">Banks</a></li>
              <li><a href="#transfer">Transfers</a></li>
              <li><a href="#cash">Deposit & Withdraw</a></li>
              <li><a href="#currency">Currency & Rates</a></li>
              <li><a href="#admin">Admin / Economy</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Content -->
        <article class="doc-content">
          <h1>Commands Guide</h1>
          <p class="intro">
            All Bubustein’s Money commands start with the <code>/bubustein</code> prefix.
            This page explains what each command does, its syntax and who can run it.
          </p>

          <!-- HELP -->
          <section id="help" class="doc-section">
            <h2>Help</h2>

            <div class="command-block">
              <code>/bubustein help</code>
              <p>Shows the help menu with all available commands split into pages.</p>
            </div>

            <div class="command-block">
              <code>/bubustein help [page]</code>
              <p>Opens a specific help page. Example: <code>/bubustein help 2</code></p>
            </div>
          </section>

          <!-- ACCOUNTS & CARDS -->
          <section id="accounts" class="doc-section">
            <h2>Account & Card Commands</h2>

            <div class="command-block">
              <code>/bubustein accounts</code>
              <p>Shows all your bank accounts with IBAN, type, bank prefix, card tier, balance and active status.</p>
            </div>

            <div class="command-block">
              <code>/bubustein accounts [player]</code>
              <p>View another player’s accounts (OP only, permission ≥ 2). Example: <code>/bubustein accounts Steve</code></p>
            </div>

            <div class="command-block">
              <code>/bubustein accounts [player] [page]</code>
              <p>Browse through account pages for a specific player.</p>
            </div>

            <div class="command-block">
              <code>/bubustein createAccount &lt;type&gt; [bank]</code>
              <p>
                Creates a new account for you. The account kind (DEBIT / CREDIT / SAVINGS) is chosen via the
                <code>type</code> argument with tab-completion in game.
              </p>
              <small>
                The real syntax uses a <code>type</code> argument and an optional bank prefix,
                but in-game, suggestions guide you when typing the command.
              </small>
            </div>

            <div class="command-block">
              <code>/bubustein deleteAccount [iban]</code>
              <p>Deletes one of your own accounts that has zero balance. Only eligible IBANs are suggested.</p>
            </div>

            <div class="command-block">
              <code>/bubustein link</code>
              <p>
                Links the card in your main hand to one of your inactive accounts.
                If you only have one inactive account, it links directly; otherwise, a selection menu is shown.
              </p>
            </div>

            <div class="command-block">
              <code>/bubustein link [iban]</code>
              <p>
                Explicitly links the empty card in your main hand to the given IBAN,
                if that inactive account belongs to you.
              </p>
            </div>

            <div class="command-block">
              <code>/bubustein invalidate</code>
              <p>Opens a menu listing your active accounts that can be remotely invalidated.</p>
            </div>

            <div class="command-block">
              <code>/bubustein invalidate [iban]</code>
              <p>
                Remotely invalidates the active account with that IBAN.
                The account becomes inactive and any linked physical cards turn into Empty Cards.
              </p>
            </div>
          </section>

          <!-- BANKS -->
          <section id="banks" class="doc-section">
            <h2>Bank Commands</h2>

            <div class="command-block">
              <code>/bubustein banks</code>
              <p>Lists all registered banks with prefix, name, active status and whether they are protected.</p>
            </div>

            <div class="command-block">
              <code>/bubustein bank create &lt;PREFIX&gt; &lt;Name...&gt;</code>
              <p>
                Creates a new bank with a 4-letter prefix (A–Z only) and a name.
                Requires operator permissions.
              </p>
              <small>Example: <code>/bubustein bank create BSTN "Bubustein National Bank"</code></small>
            </div>

            <div class="command-block">
              <code>/bubustein bank delete &lt;PREFIX&gt;</code>
              <p>
                Requests deletion of a non-protected bank you own.
                Accounts are migrated to a protected bank and you must confirm the action.
              </p>
            </div>

            <div class="command-block">
              <code>/bubustein confirm</code>
              <p>Confirms the last dangerous action (bank deletion) within a short time window.</p>
            </div>
          </section>

          <!-- TRANSFER -->
          <section id="transfer" class="doc-section">
            <h2>Transfer Commands</h2>

            <div class="command-block">
              <code>/bubustein transfer &lt;player&gt; &lt;iban&gt; &lt;amount&gt;</code>
              <p>
                Transfers money from the account linked to your card (in main hand) to the given IBAN
                belonging to the target player. You can send to other players’ DEBIT accounts or any of your own accounts.
              </p>
              <small>
                Example: <code>/bubustein transfer Steve RO22BSTN... 100</code> – sends 100 in your account currency.
              </small>
            </div>

            <div class="command-block">
              <code>/bubustein transfer &lt;player&gt; &lt;iban&gt; &lt;amount&gt; &lt;currency&gt;</code>
              <p>
                Same as above, but you specify the transfer currency (EUR, USD, etc.).
                The amount is converted from that currency to the sender and target account currencies.
              </p>
            </div>
          </section>

          <!-- CASH (DEPOSIT & WITHDRAW) -->
          <section id="cash" class="doc-section">
            <h2>Deposit & Withdraw</h2>

            <div class="command-block">
              <code>/bubustein deposit &lt;amount&gt;</code>
              <p>
                Deposits physical money from your inventory into the account associated with your card,
                using the account’s own currency and all matching currency items you hold.
              </p>
            </div>

            <div class="command-block">
              <code>/bubustein deposit &lt;amount&gt; &lt;currency&gt;</code>
              <p>
                Deposits a specific amount using only items of the given currency (if physical items exist for it),
                then converts that amount into your account’s currency.
              </p>
            </div>

            <div class="command-block">
              <code>/bubustein withdraw &lt;amount&gt;</code>
              <p>
                Withdraws money from your account into physical currency items, using the account’s currency.
                For DEBIT cards, a withdrawal fee applies depending on the card tier.
              </p>
            </div>
          </section>

          <!-- CURRENCY -->
          <section id="currency" class="doc-section">
            <h2>Currency & Rates Commands</h2>

            <div class="command-block">
              <code>/bubustein rates</code>
              <p>Shows all available currencies and their exchange rates relative to EUR, plus last update time.</p>
            </div>

            <div class="command-block">
              <code>/bubustein rates &lt;currency&gt;</code>
              <p>
                Shows detailed information for a single currency:
                EUR → that currency and that currency → EUR conversion lines.
              </p>
            </div>

            <div class="command-block">
              <code>/bubustein defaultCurrency</code>
              <p>Displays the current default server currency used when no valid default is configured elsewhere.</p>
            </div>

            <div class="command-block">
              <code>/bubustein setcurrency &lt;currency&gt;</code>
              <p>
                Changes the currency of the account linked to the card in your hand,
                converting the full balance into the new currency respecting max balance limits.
              </p>
            </div>

            <div class="command-block">
              <code>/bubustein setdefaultcurrency &lt;currency&gt;</code>
              <p>Sets the default server currency. OP only.</p>
            </div>

            <div class="command-block">
              <code>/bubustein updateRates</code>
              <p>Forces an asynchronous update of all exchange rates from the external source. OP only.</p>
            </div>
          </section>

          <!-- ADMIN -->
          <section id="admin" class="doc-section">
            <h2>Admin & Economy Commands</h2>

            <div class="info-box warning">
              <h4>Admin Only</h4>
              <p>The commands below require permission level ≥ 2 (operator) and are logged to the console.</p>
            </div>

            <div class="command-block">
              <code>/bubustein ecoAddMoney &lt;amount&gt;</code>
              <p>Adds money to the account linked to the card in your hand, using the account currency.</p>
            </div>

            <div class="command-block">
              <code>/bubustein ecoAddMoney &lt;amount&gt; &lt;currency&gt;</code>
              <p>
                Adds money using a specific currency and converts that amount into the account’s currency
                before applying it.
              </p>
            </div>

            <div class="command-block">
              <code>/bubustein ecoSetMoney &lt;amount&gt;</code>
              <p>Sets the balance of the account linked to your card to the given amount (in account currency).</p>
            </div>

            <div class="command-block">
              <code>/bubustein ecoSetMoney &lt;amount&gt; &lt;currency&gt;</code>
              <p>
                Sets the balance based on an amount expressed in another currency,
                which is converted into the account’s currency.
              </p>
            </div>

            <div class="command-block">
              <code>/bubustein resetMoney</code>
              <p>Resets the account linked to your card to a balance of 0 and notifies the owner if it isn’t you.</p>
            </div>

            <div class="command-block">
              <code>/bubustein invalidateAll &lt;player-uuid&gt;</code>
              <p>
                Invalidates all active accounts for the given player UUID, marks the data as dirty
                and notifies the player if they are online.
              </p>
            </div>
          </section>
          <!---
          <div class="next-page">
            <a href="/wiki/banks" class="next-btn">
              Next: Banks Guide →
            </a>
          </div> --->
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