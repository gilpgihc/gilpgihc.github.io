import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";


export class B5FontFamily extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. La propiedad <strong>font-family</strong></h1>
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
   <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/5_basicas/src/5b_font-family.html" height="200"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/5_basicas/src/5b_font-family.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3Efont-family%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20h1%20%7B%0A%20%20%20font-family%3A%20sans-serif%0A%20%20%7D%0A%0A%20%20p%20%7B%0A%20%20%20font-family%3A%20serif%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3Efont-family%3C%2Fh1%3E%0A%20%3Cp%3EEjemplo%20de%20font-family.%3C%2Fp%3E%0A%20%3Cfooter%3E%0A%20%20%3Cp%3E%0A%20%20%20%C2%A9%202021%0A%20%20%20Gilberto%20Pacheco%20Gallegos.%0A%20%20%3C%2Fp%3E%0A%20%3C%2Ffooter%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
   <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>font-family<span
      style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div class=resaltado>&nbsp;&nbsp;<span style="color: #800000;">h1</span>&nbsp;{</div>
   <div class=resaltado>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">font-family</span>:&nbsp;<span
      style="color: #0451a5;">sans-serif</span></div>
   <div class=resaltado>&nbsp;&nbsp;}</div><br>
   <div class=resaltado2>&nbsp;&nbsp;<span style="color: #800000;">p</span>&nbsp;{</div>
   <div class=resaltado2>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">font-family</span>:&nbsp;<span
      style="color: #0451a5;">serif</span></div>
   <div class=resaltado2>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div class=resaltado>&nbsp;<span
      style="color: #800000;">&lt;h1&gt;</span>font-family&nbsp;sans-serif<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div class=resaltado2>&nbsp;<span
      style="color: #800000;">&lt;p&gt;</span>font-family&nbsp;serif.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
     </muestra-codigo>
  </div>`;
 }
}

customElements.define("b5-font-family", B5FontFamily);