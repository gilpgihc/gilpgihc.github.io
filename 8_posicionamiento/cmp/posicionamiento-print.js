import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a8-propiedades.js";
import "./b8-fixed.js";
import "./c8-relative.js";
import "./d8-absolute.js";
import "./e8-sticky.js";
import "./posicionamiento-index.js";

export class PosicionamientoPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <posicionamiento-index></posicionamiento-index>
    </section>
    <section>
     <a8-propiedades></a8-propiedades>
    </section>
    <section>
     <b8-fixed></b8-fixed>
    </section>
    <section>
    <c8-relative></c8-relative>
    </section>
    <section>
     <d8-absolute></d8-absolute>
    </section>
    <section>
     <e8-sticky></e8-sticky>
    </section>`;
 }
}

customElements.define("posicionamiento-print", PosicionamientoPrint);