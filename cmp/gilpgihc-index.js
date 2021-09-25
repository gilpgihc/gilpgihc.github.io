import "../js/config.js"
import { Diapositiva } from "../lib/Diapositiva.js";

export class GilPGIHCIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
    <h2>por Gilberto Paheco Gallegos</h2>
    <mi-nav open></mi-nav>
   </div>`;
 }
}

customElements.define("gilpgihc-index", GilPGIHCIndex);