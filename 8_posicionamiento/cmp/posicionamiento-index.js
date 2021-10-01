
import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./posicionamiento-contenido.js";

export class PosicionamientoIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <posicionamiento-contenido></posicionamiento-contenido>
    </div>`;
 }
}

customElements.define("posicionamiento-index", PosicionamientoIndex);