import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";


export class B2html extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. El elemento <strong>html</strong></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       El elemento
       <dfn><code class="language-html">html</code></dfn>
       representa una página. Es el elemento
       principal. Solo puede haber uno de estos elementos en un archivo.
      </p>
     </li>
     <li>
      <p>
       Su especificación está en
       <a href="https://html.spec.whatwg.org/multipage/semantics.html#the-html-element"
        target="_blank">https://html.spec.whatwg.org/multipage/semantics.html#the-html-element</a>
      </p>
     </li>
     <li>
      <p>
       El elemento
       <code class="language-html">body</code>
       tiene 2 elementos hijos:
       <code class="language-html">head</code>
       y
       <code class="language-html">body</code>.
      </p>
     </li>
     <li>
      <p>
       El atributo
       <code class="language-html">lang</code>
       indica el código del idioma del documento y se aconseja anotarlo en todos
       los documentos.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;html</span>&nbsp;<span
      style="color: #ff0000;">lang</span>=<span
      style="color: #0000ff;">"es"</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #800000;">&lt;head&gt;</span></div>
   <div>&nbsp;...</div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;👽&nbsp;¡Hola&nbsp;Mundo!</div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
 </muestra-codigo>`;
 }
}

customElements.define("b2-html", B2html);