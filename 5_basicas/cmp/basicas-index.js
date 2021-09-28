
import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./basicas-contenido.js";

export class BasicasIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <basicas-contenido></basicas-contenido>
    </div>`;
 }
}

customElements.define("basicas-index", BasicasIndex);