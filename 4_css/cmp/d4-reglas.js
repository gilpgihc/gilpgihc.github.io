import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D4Reglas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Reglas de estilo</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       El elemento
       <dfn><code class="language-html">p</code></dfn>
       representa un párrafo de un documento.
      </p>
     </li>
     <li>
      <p>
       Por defecto se muestra separado 1 renglón del contenido previo y otro
       del contenido que le sigue.
      </p>
     </li>
     <li>
      <p>Solo puede llevar contenido de fraseo en su interior.</p>
     </li>
     <li>
      <p>
       Si encuentra en su interior un elemento no permitido,
       automáticamente termina el párrafo y el elemento prohibido queda
       fuera del párrafo.
      </p>
     </li>
     <li>
      <p>
       Su especificación está en
       <a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element"
         target="_blank">https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element</a>
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;p&gt;</span>🌎Hola&nbsp;Mundo.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div><span style="color: #800000;">&lt;p&gt;</span>🧻Más&nbsp;texto.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
  </div>
    </muestra-codigo>`;
 }
}

customElements.define("d4-reglas", D4Reglas);