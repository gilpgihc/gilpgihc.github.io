import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a1-sgml.js";
import "./b1-doctype.js";
import "./c1-comentarios.js";
import "./d1-texto.js";
import "./e1-elementos.js";
import "./f1-atributos.js";
import "./g1-elementos-con-contenido.js";
import "./h1-elementos-sin-contenido.js";
import "./sgml-index.js";

export class SGMLPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <sgml-index></sgml-index>
    </section>
    <section>
     <a1-sgml></a1-sgml>
    </section>
    <section>
     <b1-doctype></b1-doctype>
    </section>
    <section>
     <c1-comentarios></c1-comentarios>
    </section>
    <section>
     <d1-texto></d1-texto>
    </section>
    <section>
     <e1-elementos></e1-elementos>
    </section>
    <section>
     <f1-atributos></f1-atributos>
    </section>
    <section>
     <g1-elementos-con-contenido></g1-elementos-con-contenido>
    </section>
    <section>
     <h1-elementos-sin-contenido></h1-elementos-sin-contenido>
    </section>`;
 }
}

customElements.define("sgml-print", SGMLPrint);