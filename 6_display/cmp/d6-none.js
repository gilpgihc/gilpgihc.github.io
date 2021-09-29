import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D6none extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. El valor <strong>none</strong></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       El elemento completo, incluyendo todo su contenido, el contenido
       de su contenido y así sucesivamente no se muestra, incluyendo
       texto y cajas.
      </p>
     </li>
   </ul>
  </div>
  <div class="horizontal">
  <div>
   <h3>Salida</h3>
   <iframe src="/6_display/src/6d_none.html" height="200"></iframe>
   <p class="noPrint">
    <a target="_blank" href="/6_display/src/6d_none.html">Ábrelo en otra
     pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3Einline%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20div%20%7B%0A%20%20%20display%3A%20none%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Cp%3EAhora%20me%20ves.%3C%2Fp%3E%0A%20%3Cdiv%3EAhora%20no%20me%20ves.%3C%2Fdiv%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
   <div class=resaltado>&nbsp;&nbsp;<span style="color: #800000;">div</span>&nbsp;{</div>
   <div class=resaltado>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">display</span>:&nbsp;<span
      style="color: #0451a5;">none</span></div>
   <div class=resaltado>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;p&gt;</span>Ahora&nbsp;me&nbsp;ves.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div class=resaltado>&nbsp;<span
      style="color: #800000;">&lt;div&gt;</span>Ahora&nbsp;no&nbsp;me&nbsp;ves.<span
      style="color: #800000;">&lt;/div&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
    </muestra-codigo>
 </div>`;
 }
}

customElements.define("d6-none", D6none);