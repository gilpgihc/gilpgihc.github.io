import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E3Cierranp extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Elementos que cierran <strong>p</strong></h1>
   <div class="lectura">
    <ul class="columnas-4">
     <li><code class="language-html">address</code></li>
     <li><code class="language-html">article</code></li>
     <li><code class="language-html">aside</code></li>
     <li><code class="language-html">blockquote</code></li>
     <li><code class="language-html">details</code></li>
     <li><code class="language-html">div</code></li>
     <li><code class="language-html">dl</code></li>
     <li><code class="language-html">fieldset</code></li>
     <li><code class="language-html">figcaption</code></li>
     <li><code class="language-html">figure</code></li>
     <li><code class="language-html">footer</code></li>
     <li><code class="language-html">form</code></li>
     <li><code class="language-html">h1</code></li>
     <li><code class="language-html">h2</code></li>
     <li><code class="language-html">h3</code></li>
     <li><code class="language-html">h4</code></li>
     <li><code class="language-html">h5</code></li>
     <li><code class="language-html">h6</code></li>
     <li><code class="language-html">header</code></li>
     <li><code class="language-html">hgroup</code></li>
     <li><code class="language-html">hr</code></li>
     <li><code class="language-html">main</code></li>
     <li><code class="language-html">menu</code></li>
     <li><code class="language-html">nav</code></li>
     <li><code class="language-html">ol</code></li>
     <li><code class="language-html">p</code></li>
     <li><code class="language-html">pre</code></li>
     <li><code class="language-html">section</code></li>
     <li><code class="language-html">table</code></li>
     <li><code class="language-html">ul</code></li>
    </ul>
    <p>
     El elemento
     <code class="language-html">p</code>
     también cierra si no hay más contenido en el elemento padre, el cual no es:
    </p>
    <ul class="columnas-4">
     <li><code class="language-html">a</code></li>
     <li><code class="language-html">audio</code></li>
     <li><code class="language-html">del</code></li>
     <li><code class="language-html">ins</code></li>
     <li><code class="language-html">map</code></li>
     <li><code class="language-html">noscript</code></li>
     <li><code class="language-html">video</code></li>
     <li>elemento personalizado autónomo</li>
    </ul>
   </div>`;
 }
}

customElements.define("e3-cierran-p", E3Cierranp);