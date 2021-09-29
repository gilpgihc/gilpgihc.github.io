import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class H3Footer extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. El elemento <strong>footer</strong></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>Representa el pie de la página o de una sección.</p>
     </li>
     <li>
      <p>
       Típicamente contiene información de quien escribió la página o
       sección, enlaces a documentos relacionados, copyright y cosas
       similares.
      </p>
     </li>
     <li>
      <p>
       Cuando contiene secciones, representan apéndices, índices, acuerdos de
       licencia y contenidos similares.
      </p>
     </li>
     <li>
      <p>
       Es normal poner hipervínculos en su interior sin necesidad de usar
       elementos
       <code class="language-html">nav</code>.
      </p>
     </li>
     <li>
      <p>
       Su especificación está en
       <a href="https://html.spec.whatwg.org/multipage/sections.html#the-footer-element"
         target="_blank">https://html.spec.whatwg.org/multipage/sections.html#the-footer-element</a>
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;footer&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp;&nbsp;©&nbsp;2021&nbsp;Gilberto&nbsp;Pacheco&nbsp;Gallegos.</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
   <div><span style="color: #800000;">&lt;/footer&gt;</span></div>
  </div>
     </muestra-codigo>`;
 }
}

customElements.define("h3-footer", H3Footer);