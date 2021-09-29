import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a6-div.js";
import "./b6-span.js";
import "./c6-display.js";
import "./d6-none.js";
import "./display-index.js";
import "./e6-inline.js";
import "./f6-block.js";
import "./g6-inline-block.js";

export class DisplayPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <display-index></display-index>
    </section>
    <section>
     <a6-div></a6-div>
    </section>
    <section>
     <b6-span></b6-span>
    </section>
    <section>
    <c6-display></c6-display>
    </section>
    <section>
     <d6-none></d6-none>
    </section>
    <section>
     <e6-inline></e6-inline>
    </section>
    <section>
     <f6-block></f6-block>
    </section>
    <section>
     <g6-inline-block></g6-inline-block>
    </section>`;
 }
}

customElements.define("display-print", DisplayPrint);