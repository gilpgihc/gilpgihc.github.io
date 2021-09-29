import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F6block extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. El valor <strong>block</strong></h1>
   <div class="lectura">
    <ul>
     <li>
     <p>Contiene elementos de cualquir tipo de despliegue.</p>
     </li>
     <li>
     <p>
      De forma predeterminada, los elementos de agrupamiento como
      <code class="language-html">p</code>,
      <code class="language-html">header</code>
      <code class="language-html">footer</code>
      o
      <code class="language-html">div</code>
      tienen este tipo de despliegue, pero se puede cambiar.
     </p>
     </li>
     <li>
     <p>
      Si contiene solo elementos de despliegue
      <code class="language-css">inline</code>,
      <code class="language-css">inline-block</code>
      y texto, estos se despliegan de forma horizontal uno tras otro,
      iniciando en la parte superior del elemento. Si llega al final
      de un renglón, continuá al inicio del siguiente.
     </p>
     </li>
     <li>
     <p>
      Si contiene solo elementos de despliegue
      <code class="language-css">block</code>,
      estos se despliegan de forma vertical uno tras otro,
      utilizando todo el ancho permitido por el elemento que los
      contiene.
     </p>
     </li>
     <li>
     <p>
      Si contiene mezclados elementos
      <code class="language-css">inline</code>,
      <code class="language-css">inline-block</code>,
      texto y
      <code class="language-css">block</code>,
      los
      <code class="language-css">inline</code>,
      <code class="language-css">inline-block</code>
      y textos consecutivos se agrupan en una caja de tipo
      <code class="language-css">block</code>
      imaginaria y se aplica el despliegue cuando todos los elementos
      son de tipo
      <code class="language-css">block</code>.
     </p>
     </li>
    </ul>
   </div>
   <h2>Ejemplo</h2>
  </div>
  <div class="horizontal">
  <div>
   <h3>Salida</h3>
   <iframe src="/6_display/src/6f_block.html" height="410"></iframe>
   <p class="noPrint">
    <a target="_blank" href="/6_display/src/6f_block.html">Ábrelo en otra
     pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3Eblock%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20div%20%7B%0A%20%20%20background-color%3A%20yellow%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3Eblock%3C%2Fh1%3E%0A%20%3Cp%3E%0A%20%20En%20este%20ejemplo%2C%20body%20solo%0A%20%20tiene%20elementos%20de%20bloque.%0A%20%3C%2Fp%3E%0A%20%3Cp%3E%0A%20%20Este%20p%C3%A1rrafo%20solo%20tiene%20contenido%0A%20%20inline%20e%20inline-block.%0A%20%20%3Cem%3EUn%20%C3%A9nfasis%20inline.%3C%2Fem%3E%0A%20%20%3Cbutton%3E%0A%20%20%20Un%20bot%C3%B3n%20inline-block%2C%0A%20%20%20inline-block%2C%20inline-block%0A%20%20%3C%2Fbutton%3E%0A%20%20%3Cspan%3E%0A%20%20%20Un%20span%20inline%2C%20inline%2C%20inline%2C%0A%20%20%20inline.%0A%20%20%3C%2Fspan%3E%0A%20%3C%2Fp%3E%0A%20%3Cdiv%3E%0A%20%20Este%20div%20tiene%20contenido%0A%20%20mezclado.%0A%20%20%3Cem%3E%0A%20%20%20Este%20es%20un%20%C3%A9nfasis%20inline.%0A%20%20%3C%2Fem%3E%0A%20%20%3Cstrong%3E%0A%20%20%20Este%20es%20un%20strong%20inline.%0A%20%20%3C%2Fstrong%3E%0A%20%20%3Cbutton%3E%0A%20%20%20Este%20es%20un%20bot%C3%B3n%20inline-block%0A%20%20%3C%2Fbutton%3E%0A%20%20%3Cp%3E%0A%20%20%20Este%20p%C3%A1rrafo%20solo%20contiene%0A%20%20%20inline%20e%20inline-block.%0A%20%20%20%3Cem%3EUn%20%C3%A9nfasis%20inline.%3C%2Fem%3E%0A%20%20%20%3Cbutton%3E%0A%20%20%20%20Un%20bot%C3%B3n%20inline-block%0A%20%20%20%3C%2Fbutton%3E%0A%20%20%20%3Cspan%3EUn%20span%20inline.%3C%2Fspan%3E%0A%20%20%3C%2Fp%3E%0A%20%3C%2Fdiv%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
   <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>block<span
      style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">div</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">yellow</span>;</div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>block<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp;&nbsp;En&nbsp;este&nbsp;ejemplo,&nbsp;body&nbsp;solo</div>
   <div>&nbsp;&nbsp;tiene&nbsp;elementos&nbsp;de&nbsp;bloque.</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp;&nbsp;Este&nbsp;párrafo&nbsp;solo&nbsp;tiene&nbsp;contenido</div>
   <div>&nbsp;&nbsp;inline&nbsp;e&nbsp;inline-block.</div>
   <div>&nbsp;&nbsp;<span
      style="color: #800000;">&lt;em&gt;</span>Un&nbsp;énfasis&nbsp;inline.<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;button&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;Un&nbsp;botón&nbsp;inline-block,</div>
   <div>&nbsp;&nbsp;&nbsp;inline-block,&nbsp;inline-block</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/button&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;span&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;Un&nbsp;span&nbsp;inline,&nbsp;inline,&nbsp;inline,
   </div>
   <div>&nbsp;&nbsp;&nbsp;inline.</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/span&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;div&gt;</span></div>
   <div>&nbsp;&nbsp;Este&nbsp;div&nbsp;tiene&nbsp;contenido</div>
   <div>&nbsp;&nbsp;mezclado.</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;em&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;Este&nbsp;es&nbsp;un&nbsp;énfasis&nbsp;inline.</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;strong&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;Este&nbsp;es&nbsp;un&nbsp;strong&nbsp;inline.</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/strong&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;button&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;Este&nbsp;es&nbsp;un&nbsp;botón&nbsp;inline-block
   </div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/button&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;Este&nbsp;párrafo&nbsp;solo&nbsp;contiene</div>
   <div>&nbsp;&nbsp;&nbsp;inline&nbsp;e&nbsp;inline-block.</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #800000;">&lt;em&gt;</span>Un&nbsp;énfasis&nbsp;inline.<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;button&gt;</span>
   </div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;Un&nbsp;botón&nbsp;inline-block</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/button&gt;</span>
   </div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #800000;">&lt;span&gt;</span>Un&nbsp;span&nbsp;inline.<span
      style="color: #800000;">&lt;/span&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/div&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
    </muestra-codigo>
 </div>`;
 }
}

customElements.define("f6-block", F6block);