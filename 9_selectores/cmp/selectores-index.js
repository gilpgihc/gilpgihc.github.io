
import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./selectores-contenido.js";

export class SelectoresIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <selectores-contenido></selectores-contenido>
    </div>`;
 }
}

customElements.define("selectores-index", SelectoresIndex);