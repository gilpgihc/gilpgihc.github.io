
import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./sgml-contenido.js";

export class SGMLIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <sgml-contenido></sgml-contenido>
    </div>`;
 }
}

customElements.define("sgml-index", SGMLIndex);