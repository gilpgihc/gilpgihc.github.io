import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";


export class B6span extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. El elemento <strong>span</strong></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>Es un elemento de <strong>fraseo</strong> sin significado.</p>
     </li>
     <li>
      <p>
       Puede usarse con los atributos globales, por ejemplo
       <code class="language-html">class</code>,
       <code class="language-html">lang</code>
       o
       <code class="language-html">dir</code>.
      </p>
     </li>
     <li>
      <p>
       Se recomienda que el elemento
       <code class="language-html">span</code>
       se utilice como último recurso cuando no se pueda usar ningún otro
       elemento.
      </p>
     </li>
     <li>
      <p>
       El uso de elementos más apropiados propicia una mejor accesibilidad
       para lectores y un mantenimiento más fácil para los autores.
      </p>
     </li>
     <li>
      <p>
       Su especificación está en
       <a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element"
         target="_blank">https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element</a>
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/6_display/src/6b_span.html" height="200"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/6_display/src/6b_span.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3Espan%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20span%20%7B%0A%20%20%20color%3A%20magenta%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Cp%3E%0A%20%20Hola%2C%0A%20%20%3Cspan%3Eeste%20es%20un%20span.%3C%2Fspan%3E%0A%20%20M%C3%A1s%20texto%0A%20%20%3Cspan%3Eotro%20span.%3C%2Fspan%3E%0A%20%3C%2Fp%3E%0A%20%3Cp%3EOtro%20p%C3%A1rrafo%20simple.%3C%2Fp%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;!DOCTYPE</span>&nbsp;<span
      style="color: #ff0000;">html</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #800000;">&lt;html</span>&nbsp;<span
      style="color: #ff0000;">lang</span>=<span
      style="color: #0000ff;">"es"</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #800000;">&lt;head&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;meta</span>&nbsp;<span
      style="color: #ff0000;">charset</span>=<span
      style="color: #0000ff;">"UTF-8"</span><span
      style="color: #800000;">&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;meta</span>&nbsp;<span
      style="color: #ff0000;">name</span>=<span
      style="color: #0000ff;">"viewport"</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">content</span>=<span
      style="color: #0000ff;">"width=device-width"</span><span
      style="color: #800000;">&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>span<span
      style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">span</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
      style="color: #0451a5;">magenta</span>;</div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp;&nbsp;Hola,</div>
   <div>&nbsp;&nbsp;<span
      style="color: #800000;">&lt;span&gt;</span>este&nbsp;es&nbsp;un&nbsp;span.<span
      style="color: #800000;">&lt;/span&gt;</span></div>
   <div>&nbsp;&nbsp;Más&nbsp;texto</div>
   <div>&nbsp;&nbsp;<span
      style="color: #800000;">&lt;span&gt;</span>otro&nbsp;span.<span
      style="color: #800000;">&lt;/span&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;p&gt;</span>Otro&nbsp;párrafo&nbsp;simple.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
     </muestra-codigo>
  </div>`;
 }
}

customElements.define("b6-span", B6span);