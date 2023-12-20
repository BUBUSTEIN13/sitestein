<template>
  <div class="container" style="overflow-x: hidden;">
    <!-- Importul componentei Navbar -->
    <navbar />
    
    <!-- Secțiunea principală - Plans -->
    <main class="main">
      <!-- Titlul paginii Plans -->
      <div id="plans">
        <div class="filter"></div>
        <section class="intro">
          <h1>Plans<hr></h1>
      
          <!-- Carduri pentru diferitele planuri -->
          <div class="main__cards cards">
            <div class="cards__inner">
              <div class="cards__row">
              <div class="cards__card card">
                <h2 class="card__heading">Free Plan</h2>
                <p class="card__price">Free</p>
                <ul role="list" class="card__bullets flow">
                  <li>Basic features</li>
                  <li>Download my mod from Modrinth or Curseforge</li>
                </ul>
                <div class="card__buttons">
                  <a href="https://modrinth.com/user/BUBUSTEIN" target="_blank" class="cta cta--modrinth">
                    <SimpleIconsModrinth />
                     Modrinth
                  </a>
                  
                  <a href="https://www.curseforge.com/minecraft/mc-mods/bubustein-money" target="_blank" class="cta cta--curseforge">
                    <SimpleIconsCurseforge />
                     Curseforge
                  </a>
                </div>
              </div>
              <div class="cards__card card">
                <h2 class="card__heading">Donation</h2>
                <p class="card__price">2$-10$</p>
                <ul role="list" class="card__bullets flow">
                  <li>Everything in Free plus:</li>
                  <li>Early Access for 2 weeks</li>
                </ul>
                <div class="card__buttonsa">
                  <a href="https://ko-fi.com/bubustein" target="_blank" class="card__cta ctaa cta--kofi">
                    <SimpleIconsKofi/>
                     Kofi
                  </a>
                  
                </div>
              </div>
              <div class="cards__card card">
                <h2 class="card__heading">Bronze</h2>
                <p class="card__price">2.50$/month</p>
                <ul role="list" class="card__bullets flow">
                  <li>Everything in Free plus:</li>
                  <li>Early Access for that month</li>
                  <li>Priority in adding new things to Modrinth/Curseforge mod</li>
                </ul>
                <div class="card__buttonsaa">
                  <a href="https://www.patreon.com/bubustein" target="_blank" class="card__cta ctaa cta--patreon">
                    <SimpleIconsPatreon/>
                     Patreon
                  </a>
                  
                </div>
              </div>
            </div>
              <div class="cards__row">
              <div class="cards__card card">
                <h2 class="card__heading">Silver</h2>
                <p class="card__price">5$/month</p>
                <ul role="list" class="card__bullets flow">
                  <li>Bring your custom textures and custom recipes</li>
                  <li>Those textures will be added in the next update on Modrinth and Curseforge.</li>
                </ul>
                <div class="card__buttonsaaa">
                  <a href="https://www.patreon.com/bubustein" target="_blank" class="card__cta ctaa cta--patreon">
                    <SimpleIconsPatreon/>
                     Patreon
                  </a>
                  
                </div>
              </div>
              <div class="cards__card card">
                <h2 class="card__heading">Diamond</h2>
                <p class="card__price">9.50$/month</p>
                <ul role="list" class="card__bullets flow">
                  
                  <li>Custom Money Mod with ARR License.</li>
                  <li>You can use your custom mod in a server but you CANNOT distribute the mod without my consent.</li>
                </ul>
                


                <div class="card__buttonsaaa">
                  <a href="https://www.patreon.com/bubustein" target="_blank" class="card__cta ctaa cta--patreon">
                    <SimpleIconsPatreon/>
                     Patreon
                  </a>
                  
                </div>
              </div>
              <div class="cards__card card">
                <!-- Card nou pentru Ultimate -->
      <h2 class="card__heading">Ultimate</h2>
      <p class="card__price">15$/month</p>
      <ul role="list" class="card__bullets flow">
        <li>Advanced features</li>
        <li>Exclusive access to beta versions</li>
      </ul>
      <div class="card__buttons">
        <a href="#" target="_blank" class="card__cta ctaa cta--kofi">
          <SimpleIconsKofi />
          Kofi
        </a>
      </div>
    </div>
  </div>
              <!-- Alte carduri -->
            </div>
            <div class="overlay cards__inner"></div>
          </div>
          
        </section>
      </div>
    </main>
    
    <!-- Importul componentei Footer -->
    <Footer />
  </div>
</template>

<style scoped>
@import url('~/assets/style.css');
@import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700;800;900&display=swap");
/* Stilurile pentru componenta Plans */

.main {
  padding: 0;
	width: 100%;
	height: 100%;
  background: var(--main-background);
  
}
.main__heading {
  font-weight: 600;
  font-size: 2.25em;
  margin-bottom: 0.75em;
  text-align: center;
  color: #eceff1;
}

#plans{ 	
	margin: auto;
	height: 100vh;
	color: var(--main-fonts-color);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
}

#plans .filter{
	background: url('https://us-east-1.tixte.net/uploads/files.bubustein.tk/banner2.png') no-repeat;
	background-size: cover;
	background-position:center;
    position: absolute;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
	opacity:.20;
}  

.intro {
	text-align:center;
    color: var(--main-fonts-color);
	z-index: 1;
	margin: auto;
	padding: 20px;
}

h1{
	padding-bottom: 15px;
    letter-spacing: normal;
    font-family: var(--main-font-family);
	font-style: normal;
	font-size: 60px;
	color: var(--main-fonts-color);
	text-shadow: 0px 0px 40px var(--main-decor-color);
}
.cards {
  position: relative;
}

.card__buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
}
.card__buttonsaa {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
}
.card__buttonsa {
  display: flex;
  justify-content: space-between;
  margin-top: 3.30em;
}
.card__buttonsaaa {
  display: flex;
  justify-content: space-between;
}
.cards__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards__row {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.cards__card {
  flex: 0 0 calc(10% - 10px); /* Ajustează lățimea cardurilor */
  margin-right: 0px; /* Redu spațiul între carduri */
  margin-bottom: 0px; /* Adaugă spațiu vertical între rânduri */
}

.cards__card:last-child {
  margin-right: 0;
}

.card {
  --flow-space: 0.5em;
  --hsl: var(--hue), var(--saturation), var(--lightness);
  flex: 1 1 14rem;
  padding: 2.5em 3em;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  align-items: start;
  gap: 1.25em;
  color: #eceff1;
  background-color: #2b2b2b;
  border: 2px solid #eceff133;
  border-radius: 15px;
}

.card__cta {
  /* Am adăugat proprietăți pentru a face butonul mai mare și pentru a-l alinia cu conținutul cardului */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1em; /* Ajustează padding-ul pentru a mări butonul */
  border-radius: 10px; /* Adaugă colțuri rotunjite */
  background-color: #0d0d0d;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.card:nth-child(1) {
  --hue: 165;
  --saturation: 82.26%;
  --lightness: 51.37%;
}

.card__bullets {
  line-height: 1.4;
}

.card__bullets li::before {
  display: inline-block;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='16' title='check' fill='%23dddddd'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z' /%3E%3C/svg%3E");
  transform: translatey(0.25ch);
  margin-right: 1ch;
}

.card__heading {
  font-size: 1.05em;
  font-weight: 800;
  font-style:inherit;
  color:#00a9e2;
}

.card__price {
  font-size: 1.75em;
  font-weight: 700;
}

.flow > * + * {
  margin-top: var(--flow-space, 1.25em);
}

.cta {
  display: block;
  align-self: end;
  margin: 1em 0 0.5em 0;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #00a9e2;
  padding: 0.7em;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
}

.ctaa {
  display: block;
  align-self: end;
  margin: 1em 0 0.5em 0;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #00a9e2;
  padding: 0.7em;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
}
.cta--kofi:hover {
  background-color: magenta;
}

.cta--patreon:hover {
  background-color: orange;
}

.cta--modrinth:hover{
  background-color: aquamarine;
  color:black;
}
.cta--curseforge:hover{
  background-color: orangered;
}
.overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  user-select: none;
  opacity: var(--opacity, 0);
  -webkit-mask: radial-gradient(
    25rem 25rem at var(--x) var(--y),
    #000 1%,
    transparent 50%
  );
  mask: radial-gradient(
    25rem 25rem at var(--x) var(--y),
    #000 1%,
    transparent 50%
  );
  transition: 400ms mask ease;
  will-change: mask;
}

.overlay .card {
  background-color: hsla(var(--hsl), 0.15);
  border-color: hsla(var(--hsl), 1);
  box-shadow: 0 0 0 1px inset hsl(var(--hsl));
}

.overlay .cta {
  display: block;
  grid-row: -1;
  width: 100%;
  background-color: hsl(var(--hsl));
  box-shadow: 0 0 0 1px hsl(var(--hsl));
}

:not(.overlay) > .card {
  transition: 400ms background ease;
  will-change: background;
}

:not(.overlay) > .card:hover {
  --lightness: 95%;
  background: hsla(var(--hsl), 0.1);
}

.cta--dynamic {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7em;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1em; /* Ajustați margin-top-ul pentru a alinia butoanele */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta--dynamic svg {
  /* Stilizare pentru icon-ul SVG, dacă este necesar */
  /* Modificați stilurile SVG-ului așa cum doriți */
  width: 20px;
  height: 20px;
  margin-right: 0.5em;
}

.cta--dynamic:hover {
  background-color: #1a1a1a; /* Culorile butonului la hover */
}
</style>
  
<script scoped>
import navbar from '~/components/navbar.vue';
import Footer from '~/components/footer.vue';
import SimpleIconsModrinth from '~/components/SimpleIconsModrinth.vue';
import SimpleIconsCurseforge from '~/components/SimpleIconsCurseforge.vue';
import SimpleIconsPatreon from '~/components/SimpleIconsPatreon.vue';
import SimpleIconsKofi from '~/components/SimpleIconsKofi.vue';

export default {
  components: {
    navbar,
    Footer,
    SimpleIconsModrinth,
    SimpleIconsCurseforge,
    SimpleIconsPatreon,
    SimpleIconsKofi
  },
  mounted() {
    console.clear();



  }
};

  </script>
  