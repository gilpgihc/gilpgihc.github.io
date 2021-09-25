import "../10_textos/cmp/textos-print.js";
import "../11_logicos/cmp/logicos-print.js";
import "../12_do_while/cmp/do-while-print.js";
import "../13_numeros/cmp/numeros-print.js";
import "../14_mas_numeros/cmp/mas-numeros-print.js";
import "../15_while/cmp/while-print.js";
import "../16_for/cmp/for-print.js";
import "../17_switch/cmp/switch-print.js";
import "../1_fundamentos/cmp/fundamentos-print.js";
import "../2_conceptos/cmp/conceptos-print.js";
import "../3_variables/cmp/variables-print.js";
import "../4_comentarios/cmp/comentarios-print.js";
import "../5_bloques/cmp/bloques-print.js";
import "../6_if/cmp/if-print.js";
import "../7_if_else/cmp/if-else-print.js";
import "../8_multiple/cmp/multiple-print.js";
import "../9_melse/cmp/multiple-else-print.js";
import "../js/config.js";
import { Diapositiva } from "../lib/Diapositiva.js";
import "./gilpgijs-index.js";

export class GilPGIHCPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<gilpgijs-index></gilpgijs-index>
    <mi-footer></mi-footer>
    <section>
     <h1 class="presentación">1. Fundamentos</h1>
     <fundamentos-print></fundamentos-print>
     <mi-footer></mi-footer>
    </section>`;
 }
}

customElements.define("gilpgihc-print", GilPGIHCPrint);