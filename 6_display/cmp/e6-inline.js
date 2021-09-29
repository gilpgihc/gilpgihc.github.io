import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E6inline extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. El valor <strong>inline</strong></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Solo contiene elementos de tipo
       <code class="language-css">inline</code>,
       <code class="language-css">inline-block</code>
       y texto.
      </p>
     </li>
     <li>
      <p>
       De forma predeterminada, los elementos de fraseo como
       <code class="language-html">span</code>,
       <code class="language-html">em</code>,
       <code class="language-html">del</code>,
       o
       <code class="language-html">strong</code>
       tienen este tipo de despliegue, pero se puede cambiar.
      </p>
     </li>
     <li>
      <p>
       El contenido se despliega de forma horizontal, uno tras otro. Si
       llega al final del elemento padre más próximo que sea
       <code class="language-css">block</code> o
       <code class="language-css">inline-block</code>,
       continuá al inicio del siguiente renglón.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
  <div class="horizontal">
  <div>
   <h3>Salida</h3>
   <iframe src="/6_display/src/6e_inline.html" height="200"></iframe>
   <p class="noPrint">
    <a target="_blank" href="/6_display/src/6e_inline.html">Ábrelo en otra
     pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3Einline%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20p%20%7B%0A%20%20%20display%3A%20inline%3B%0A%20%20%20color%3A%20olive%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Cdiv%3E%0A%20%20El%20texto%20es%20inline.%0A%20%20El%20texto%20es%20inline.%0A%20%20El%20texto%20es%20inline.%0A%20%20El%20texto%20es%20inline.%0A%20%20El%20texto%20es%20inline.%0A%20%20%3Cspan%3EEl%20span%20es%20inline.%3C%2Fspan%3E%0A%20%20%3Cp%3E%0A%20%20%20Este%20p%C3%A1rrafo%20es%20forzado%20a%20ser%0A%20%20%20inline.%0A%20%20%3C%2Fp%3E%0A%20%20%3Cem%3E%0A%20%20%20Esto%20es%20texto%20con%20%C3%A9nfasis.%0A%20%20%3C%2Fem%3E%0A%20%20%3Cstrong%3E%0A%20%20%20Esto%20es%20texto%20con%20%C3%A9nfasis%0A%20%20%20fuerte.%0A%20%20%3C%2Fstrong%3E%0A%20%20M%C3%A1s%20texto.%0A%20%20M%C3%A1s%20texto.%0A%20%20M%C3%A1s%20texto.%0A%20%20M%C3%A1s%20texto.%0A%20%3C%2Fdiv%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
   <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>inline<span
      style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">p</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">display</span>:&nbsp;<span
      style="color: #0451a5;">inline</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
      style="color: #0451a5;">olive</span></div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;div&gt;</span></div>
   <div>&nbsp;&nbsp;El&nbsp;texto&nbsp;es&nbsp;inline.</div>
   <div>&nbsp;&nbsp;El&nbsp;texto&nbsp;es&nbsp;inline.</div>
   <div>&nbsp;&nbsp;El&nbsp;texto&nbsp;es&nbsp;inline.</div>
   <div>&nbsp;&nbsp;El&nbsp;texto&nbsp;es&nbsp;inline.</div>
   <div>&nbsp;&nbsp;El&nbsp;texto&nbsp;es&nbsp;inline.</div>
   <div>&nbsp;&nbsp;<span
      style="color: #800000;">&lt;span&gt;</span>El&nbsp;span&nbsp;es&nbsp;inline.<span
      style="color: #800000;">&lt;/span&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;Este&nbsp;párrafo&nbsp;es&nbsp;forzado&nbsp;a&nbsp;ser
   </div>
   <div>&nbsp;&nbsp;&nbsp;inline.</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;em&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;Esto&nbsp;es&nbsp;texto&nbsp;con&nbsp;énfasis.</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;strong&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;Esto&nbsp;es&nbsp;texto&nbsp;con&nbsp;énfasis</div>
   <div>&nbsp;&nbsp;&nbsp;fuerte.</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/strong&gt;</span></div>
   <div>&nbsp;&nbsp;Más&nbsp;texto.</div>
   <div>&nbsp;&nbsp;Más&nbsp;texto.</div>
   <div>&nbsp;&nbsp;Más&nbsp;texto.</div>
   <div>&nbsp;&nbsp;Más&nbsp;texto.</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/div&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
    </muestra-codigo>
 </div>`;
 }
}

customElements.define("e6-inline", E6inline);