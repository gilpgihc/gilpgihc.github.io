import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D2Codificacion extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Codificación de caracteres</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Los
       <dfn>caracteres</dfn>
       son los diferentes símbolos de comunicación que puede usar una
       computadora, por ejemplo: letras, dígitos, signos de puntuación o emojis.
      </p>
     </li>
     <li>
      <p>
       La
       <dfn>codificación</dfn>
       de un archivo es asignar a cada caracter del archivo una combinación
       de varios 1 y 0.
      </p>
     </li>
     <li>
      <p>
       El elemento
       <dfn><code class="language-html">meta</code></dfn>
       define información sobre el archivo, también conocida como
       <dfn>metadato</dfn>.
       Su especificación está en
       <a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element"
         target="_blank">https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element</a>.
      </p>
     </li>
     <li>
      <p>
       El atributo
       <dfn><code class="language-html">charset</code></dfn>
       define la codifcación del archivo.
      </p>
     </li>
     <li>
      <p>
       El estándar UTF-8 es un sistema de codificación para muchos idiomas
       del mundo entero y está definido en
       <a href="https://home.unicode.org/"
         target="_blank">https://home.unicode.org/</a>.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;meta</span>&nbsp;<span
   style="color: #ff0000;">charset</span>=<span
   style="color: #0000ff;">"UTF-8"</span><span
   style="color: #800000;">&gt;</span></div>
  </div>
    </muestra-codigo>`;
 }
}

customElements.define("d2-codificacion", D2Codificacion);