import "../1_sgml/cmp/sgml-print.js";
import "../2_introduccion/cmp/introduccion-print.js";
import "../3_elementos/cmp/elementos-print.js";
import "../4_css/cmp/css-print.js";
import "../5_basicas/cmp/basicas-print.js";
import "../6_display/cmp/display-print.js";
import "../7_cajas/cmp/cajas-print.js";
import "../8_posicionamiento/cmp/posicionamiento-print.js";
import "../js/config.js";
import { Diapositiva } from "../lib/Diapositiva.js";
import "./gilpgihc-index.js";

export class GilPGIHCPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<gilpgihc-index></gilpgihc-index>
    <mi-footer></mi-footer>
    <section>
     <h1 class="presentación">1. SGML</h1>
     <sgml-print></sgml-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">2. Introducción a HTML</h1>
     <introduccion-print></introduccion-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">3. Elementos básicos de HTML</h1>
     <elementos-print></elementos-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">4. CSS</h1>
     <css-print></css-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">5. Propiedades básicas de CSS</h1>
     <basicas-print></basicas-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">6. La propiedad <strong>display</strong></h1>
     <display-print></display-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">7. El modelo de cajas</h1>
     <cajas-print></cajas-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">8. Posicionamiento</h1>
     <posicionamiento-print></posicionamiento-print>
     <mi-footer></mi-footer>
    </section>`;
 }
}

customElements.define("gilpgihc-print", GilPGIHCPrint);