
import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./cajas-contenido.js";

export class CajasIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <cajas-contenido></cajas-contenido>
    </div>`;
 }
}

customElements.define("cajas-index", CajasIndex);