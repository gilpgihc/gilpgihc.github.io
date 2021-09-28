import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D5Color extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. La propiedad <strong>color</strong></h1>
   <div class="lectura">
   <ul>
    <li>
     <p>
      La propiedad
      <dfn><code class="language-css">color</code></dfn>
      permite especificar el color del trazo, por ejemplo, del texto.
     </p>
     <p>
      La definición de la propiedad
      <code class="language-css">color</code>
      está en
      <a href="https://www.w3.org/TR/css-color-3/#color0"
        target="_blank">https://www.w3.org/TR/css-color-3/#color0</a>
     </p>
    </li>
   </ul>
   <h2>Ejemplo</h2>
  </div>
  <div class="horizontal">
  <div>
   <h3>Salida</h3>
   <iframe src="/5_basicas/src/5d_color.html" height="200"></iframe>
   <p class="noPrint">
    <a target="_blank" href="/5_basicas/src/5d_color.html">Ábrelo en otra
     pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3EColor%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20h1%20%7B%0A%20%20%20color%3A%20blue%0A%20%20%7D%0A%0A%20%20p%20%7B%0A%20%20%20color%3A%20%23005500%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3EColor%20blue%3C%2Fh1%3E%0A%20%3Cp%3EColor%20%23005500.%3C%2Fp%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
   <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>Color<span
      style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div class=resaltado>&nbsp;&nbsp;<span style="color: #800000;">h1</span>&nbsp;{</div>
   <div class=resaltado>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
      style="color: #0451a5;">blue</span></div>
   <div class=resaltado>&nbsp;&nbsp;}</div><br>
   <div class=resaltado2>&nbsp;&nbsp;<span style="color: #800000;">p</span>&nbsp;{</div>
   <div class=resaltado2>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
      style="color: #0451a5;">#005500</span></div>
   <div class=resaltado2>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div class=resaltado>&nbsp;<span
      style="color: #800000;">&lt;h1&gt;</span>Color&nbsp;blue<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div class=resaltado2>&nbsp;<span
      style="color: #800000;">&lt;p&gt;</span>Color&nbsp;#005500.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
    </muestra-codigo>
 </div>`;
 }
}

customElements.define("d5-color", D5Color);