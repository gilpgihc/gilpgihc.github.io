
import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./introduccion-contenido.js";

export class IntroduccionIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <introduccion-contenido></introduccion-contenido>
    </div>`;
 }
}

customElements.define("introduccion-index", IntroduccionIndex);