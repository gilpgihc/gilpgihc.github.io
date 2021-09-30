import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a7-longitudes.js";
import "./b7-modelo.js";
import "./c7-margin.js";
import "./cajas-index.js";
import "./d7-padding.js";
import "./e7-border.js";
import "./f7-radio.js";
import "./g7-box-sizing.js";

export class CajasPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <cajas-index></cajas-index>
    </section>
    <section>
     <a7-longitudes></a7-longitudes>
    </section>
    <section>
     <b7-modelo></b7-modelo>
    </section>
    <section>
    <c7-margin></c7-margin>
    </section>
    <section>
     <d7-padding></d7-padding>
    </section>
    <section>
     <e7-border></e7-border>
    </section>
    <section>
     <f7-radio></f7-radio>
    </section>
    <section>
     <g7-box-sizing></g6-inline-block>
    </section>`;
 }
}

customElements.define("cajas-print", CajasPrint);