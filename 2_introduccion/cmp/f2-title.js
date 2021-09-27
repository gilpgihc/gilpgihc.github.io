import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F2Titlw extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. El elemento <strong>title</strong></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       El elemento con contenido
       <dfn><code class="language-html">title</code></dfn>
       define el título de la página. No se muestra en el contenido de la
       página, sino en las pestañas o en las barras de título de las ventanas
       que muestran la página.
      </p>
     </li>
     <li>
      <p>
       Su especificación está en
       <a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element"
         target="_blank">https://html.spec.whatwg.org/multipage/semantics.html#the-title-element</a>
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;title&gt;</span>Hola&nbsp;Mundo<span
   style="color: #800000;">&lt;/title&gt;</span></div>
 </div>
   </muestra-codigo>`;
 }
}

customElements.define("f2-title", F2Titlw);