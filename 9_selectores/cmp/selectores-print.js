import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a9-todos.js";
import "./b9-id.js";
import "./c9-class.js";
import "./d9-hijo.js";
import "./e9-descendiente.js";
import "./f9-siguiente.js";
import "./g9-posterior.js";
import "./h9-lista.js";
import "./i9-active.js";
import "./j9-focus.js";
import "./selectores-index.js";

export class SelectoresPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <selectores-index></selectores-index>
    </section>
    <section>
     <a9-todos></a9-todos>
    </section>
    <section>
     <b9-id></b9-id>
    </section>
    <section>
    <c9-class></c9-class>
    </section>
    <section>
     <d9-hijo></d9-hijo>
    </section>
    <section>
     <e9-descendiente></e9-descendiente>
    </section>
    <section>
     <f9-siguiente></f9-siguiente>
    </section>
    <section>
     <g9-posterior></g9-posterior>
    </section>
    <section>
     <h9-lista></h9-lista>
    </section>
    <section>
     <i9-active></i9-active>
    </section>
    <section>
     <j9-focus></j9-focus>
    </section>`;
 }
}

customElements.define("selectores-print", SelectoresPrint);