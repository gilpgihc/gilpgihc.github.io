import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a6-div.js";
import "./b6-span.js";
import "./c6-display.js";
import "./d6-inline.js";
import "./display-index.js";
import "./e6-block.js";
import "./f6-inline-block.js";

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
     <d6-inline></d6-inline>
    </section>
    <section>
     <e6-block></e6-block>
    </section>
    <section>
     <f6-inline-block></f6-inline-block>
    </section>`;
 }
}

customElements.define("display-print", DisplayPrint);