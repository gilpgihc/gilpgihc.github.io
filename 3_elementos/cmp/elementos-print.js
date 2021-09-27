import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a3-ejemplo.js";
import "./b3-fraseo.js";
import "./c3-encabezados.js";
import "./d3-p.js";
import "./e3-cierran-p.js";
import "./elementos-index.js";
import "./f3-a.js";
import "./g3-nav.js";
import "./h3-footer.js";

export class ElementosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <elementos-index></elementos-index>
    </section>
    <section>
     <a3-ejemplo></a3-ejemplo>
    </section>
    <section>
     <b3-fraseo></b3-fraseo>
    </section>
    <section>
     <c3-encabezados></c3-encabezados>
    </section>
    <section>
     <d3-p></d3-p>
    </section>
    <section>
     <e3-cierran-p></e3-cierran-p>
    </section>
    <section>
     <f3-a></f3-a>
    </section>
    <section>
     <g3-nav></g3-nav>
    </section>
    <section>
     <h3-footer></h3-footer>
    </section>`;
 }
}

customElements.define("elementos-print", ElementosPrint);