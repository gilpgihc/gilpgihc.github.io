import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a2-ejemplo.js";
import "./b2-html.js";
import "./c2-head.js";
import "./d2-codificacion.js";
import "./e2-viewport.js";
import "./f2-title.js";
import "./g2-body.js";
import "./introduccion-index.js";

export class IntroduccionPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <introduccion-index></introduccion-index>
    </section>
    <section>
     <a2-ejemplo></a2-ejemplo>
    </section>
    <section>
     <b2-html></b2-html>
    </section>
    <section>
     <c2-head></c2-head>
    </section>
    <section>
     <d2-codificacion></d2-codificacion>
    </section>
    <section>
     <e2-viewport></e2-viewport>
    </section>
    <section>
     <f2-title></f2-title>
    </section>
    <section>
     <g2-body></g2-body>
    </section>`;
 }
}

customElements.define("introduccion-print", IntroduccionPrint);