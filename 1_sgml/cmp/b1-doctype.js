import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";


export class B1DOCTYPE extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. DOCTYPE</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       El <dfn>DOCTYPE</dfn> define las etiquetas permitidas y sus
       características.
      </p>
     </li>
     <li>
      <p>
       Es la marca inicial de un archivo SGML y para algunos navegadores debe
       ser la primera línea del archivo.
      </p>
     </li>
     <li>
      <p>
       El DOCTYPE de HTML5 está definido en
       <a target="_blank" href="https://html.spec.whatwg.org/multipage/">
        https://html.spec.whatwg.org/multipage/</a>.
      </p>
     </li>
     <li>
      <p>Aparte de HTML5 hay otros tipos de documento.</p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;!DOCTYPE</span>&nbsp;<span
   style="color: #ff0000;">html</span><span
   style="color: #800000;">&gt;</span></div>
   </div>
 </muestra-codigo>`;
 }
}

customElements.define("b1-doctype", B1DOCTYPE);