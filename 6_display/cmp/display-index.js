
import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./display-contenido.js";

export class DisplayIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <display-contenido></display-contenido>
    </div>`;
 }
}

customElements.define("display-index", DisplayIndex);