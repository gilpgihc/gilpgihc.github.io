import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";


export class B4style extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. El elemento <strong>style</strong></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       El elemento
       <dfn><code class="language-html">style</code></dfn>
       debe colocarse en el elemento de tipo
       <dfn><code class="language-html">head</code></dfn>
       y contiene el código CSS3 que define la apariencia de la página.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
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
   <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>CSS<span
      style="color: #800000;">&lt;/title&gt;</span></div>
   <div class=resaltado>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div class=resaltado>&nbsp;&nbsp;<span style="color: #800000;">h1</span>&nbsp;{</div>
   <div class=resaltado>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
      style="color: #0451a5;">yellow</span>;</div>
   <div class=resaltado>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">blue</span>;</div>
   <div class=resaltado>&nbsp;&nbsp;}</div><br>
   <div class=resaltado>&nbsp;&nbsp;<span style="color: #800000;">p</span>&nbsp;{</div>
   <div class=resaltado>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
      style="color: #0451a5;">white</span>;</div>
   <div class=resaltado>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">black</span>;</div>
   <div class=resaltado>&nbsp;&nbsp;}</div>
   <div class=resaltado>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;...</div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
       </muestra-codigo>`;
 }
}

customElements.define("b4-style", B4style);