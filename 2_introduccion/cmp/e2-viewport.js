import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E2Viewport extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. El metadato <strong>viewport</strong></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       El metadato
       <dfn>viewport</dfn>
       indica como manejar la pantalla en navegadores de dispositivos móviles.
      </p>
     </li>
     <li>
      <p>
       Si no se pone esta etiqueta y la página se muestra en un navegador
       móvil, se muestra reducida en tamaño.
      </p>
     </li>
     <li>
      <p>
       También se usa el elemento
       <code class="language-html">meta</code>.
      </p>
     </li>
     <li>
      <p>
       El atributo
       <dfn><code class="language-html">name</code></dfn>
       permite definir un metadato.
      </p>
     </li>
     <li>
      <p>
       El atributo
       <dfn><code class="language-html">content</code></dfn>
       permite definir el valor de un metadato.
      </p>
     </li>
     <li>
      <p>
       El content
       <dfn><code class="language-html">width</code></dfn>
       indica el ancho de la página en dispositivos móviles.
      </p>
     </li>
     <li>
      <p>
       El valor
       <dfn><code class="language-html">device-width</code></dfn>
       indica que el ancho de la página en dispositivos móviles es el el ancho
       del dispositivo.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;meta</span>&nbsp;<span
      style="color: #ff0000;">name</span>=<span
      style="color: #0000ff;">"viewport"</span></div>
   <div>&nbsp;&nbsp;<span style="color: #ff0000;">content</span>=<span
      style="color: #0000ff;">"width=device-width"</span><span
      style="color: #800000;">&gt;</span></div>
  </div>
     </muestra-codigo>`;
 }
}

customElements.define("e2-viewport", E2Viewport);