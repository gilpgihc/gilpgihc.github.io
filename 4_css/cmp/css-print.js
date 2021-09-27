import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a4-ejemplo.js";
import "./b4-style.js";
import "./c4-comentarios.js";
import "./css-index.js";
import "./d4-reglas.js";
import "./e4-sel-tipo.js";
import "./f4-propiedades.js";
import "./g4-custom.js";

export class CSSPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <css-index></css-index>
    </section>
    <section>
     <a4-ejemplo></a4-ejemplo>
    </section>
    <section>
     <b4-style></b4-style>
    </section>
    <section>
     <c4-comentarios></c4-comentarios>
    </section>
    <section>
     <d4-reglas></d4-reglas>
    </section>
    <section>
     <e4-sel-tipo></e4-sel-tipo>
    </section>
    <section>
     <f4-propiedades></f4-propiedades>
    </section>
    <section>
     <g4-custom></g4-custom>
    </section>`;
 }
}

customElements.define("css-print", CSSPrint);