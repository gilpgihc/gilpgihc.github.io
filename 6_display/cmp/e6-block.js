import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E6block extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. El valor <strong>block</strong></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       La propiedad
       <dfn><code class="language-css">background-color</code></dfn>
       permite especificar el color del fondo del elemento.
      </p>
     </li>
     <li>
      <p>
       La definición de la propiedad
       <code class="language-css">background-color</code>
       está en
       <a href="https://www.w3.org/TR/css-backgrounds-3/#the-background-color"
        target="_blank">https://www.w3.org/TR/css-backgrounds-3/#the-background-color</a>
      </p>
     </li>
    </ul>
   </div>
   <h2>Ejemplo</h2>
  </div>
  <div class="horizontal">
  <div>
   <h3>Salida</h3>
   <iframe src="/5_basicas/src/5d_background-color.html" height="200"></iframe>
   <p class="noPrint">
    <a target="_blank" href="/5_basicas/src/5d_background-color.html">Ábrelo en otra
     pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3Ebackground-color%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20h1%20%7B%0A%20%20%20background-color%3A%20yellow%0A%20%20%7D%0A%0A%20%20p%20%7B%0A%20%20%20background-color%3A%20%23aaffaa%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3Ebackground-color%20yellow%3C%2Fh1%3E%0A%20%3Cp%3Ebackground-color%20%23aaffaa.%3C%2Fp%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
   <div>&nbsp;<span
      style="color: #800000;">&lt;title&gt;</span>background-color<span
      style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">h1</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">yellow</span></div>
   <div>&nbsp;&nbsp;}</div><br>
   <div>&nbsp;&nbsp;<span style="color: #800000;">p</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">#aaffaa</span></div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;h1&gt;</span>background-color&nbsp;yellow<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;p&gt;</span>background-color&nbsp;#aaffaa.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
    </muestra-codigo>
 </div>`;
 }
}

customElements.define("e6-block", E6block);