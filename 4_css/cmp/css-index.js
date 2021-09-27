
import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./css-contenido.js";

export class CSSIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <css-contenido></css-contenido>
    </div>`;
 }
}

customElements.define("css-index", CSSIndex);