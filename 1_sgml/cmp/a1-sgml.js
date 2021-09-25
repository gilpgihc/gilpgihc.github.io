import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A1SGML extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. SGML</h1>
   <div class="lectura">
   <ul>
    <li>
     <p>
      El lenguaje
      <dfn>SGML</dfn>
      está hecho en base a texto y marcas, también conocidas com etiquetas.
     </p>
    </li>
    <li>
     <p>
      Las
      <dfn>marcas</dfn>
      Inician con el caracter
      <code class="language-html">&lt;</code>
      y terminan con
      <code class="language-html">&gt;</code>.
      Indican como desplegar el texto; por ejemplo, el texto entre
      <code class="language-html">&lt;h1></code>
      y
      <code class="language-html">&lt;/h1></code>
      resalta más.
     </p>
    </li>
   </ul>
   <h2>Ejemplo</h2>
  </div>
  <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/1_sgml/src/1a_sgml.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/1_sgml/src/1a_sgml.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3EEjemplo%3C%2Ftitle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3EEjemplo%3C%2Fh1%3E%0A%20%3Cp%3EHola%20mundo.%F0%9F%91%B6%3C%2Fp%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
   <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>Ejemplo<span
      style="color: #800000;">&lt;/title&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>Ejemplo<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;p&gt;</span>Hola&nbsp;mundo.👶<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("a1-sgml", A1SGML);