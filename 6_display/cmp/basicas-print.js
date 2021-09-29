import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a5-fonts.js";
import "./b5-font-family.js";
import "./basicas-index.js";
import "./c5-colores.js";
import "./d5-color.js";
import "./e5-background-color.js";

export class BasicasPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <basicas-index></basicas-index>
    </section>
    <section>
     <a5-fonts></a5-fonts>
    </section>
    <section>
     <b5-font-family></b5-font-family>
    </section>
    <section>
     <c5-colores></c5-colores>
    </section>
    <section>
     <d5-color></d5-color>
    </section>
    <section>
     <e5-background-color></e5-background-color>
    </section>`;
 }
}

customElements.define("basicas-print", BasicasPrint);