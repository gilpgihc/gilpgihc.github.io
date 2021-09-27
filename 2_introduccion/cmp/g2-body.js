import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G2body extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. El elemento <strong>body</strong></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       El elemento
       <dfn><code class="language-html">body</code></dfn>
       define el contenido que se muestra.
      </p>
     </li>
     <li>
      <p>
       Su especificación está en
       <a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element"
         target="_blank">https://html.spec.whatwg.org/multipage/sections.html#the-body-element</a>
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;👽&nbsp;¡Hola&nbsp;Mundo!</div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
  </div>
     </muestra-codigo>`;
 }
}

customElements.define("g2-body", G2body);