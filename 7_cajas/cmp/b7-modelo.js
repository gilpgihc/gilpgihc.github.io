import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";


export class B7Modelo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. El modelo de cajas</h1>
   <div class="lectura">
   <div style="overflow: auto;">
    <div style="margin: 1em; overflow: auto;">
     Margen
     <div
       style="background-color: burlywood; margin: 1em; overflow: auto;">
      Borde
      <div
        style="background-color: greenyellow; margin: 1em; overflow: auto;">
       Relleno
       <div style="margin: 1em;">contenido</div>
      </div>
     </div>
    </div>
   </div>
   <dl>
    <dt><dfn>Margen</dfn></dt>
    <dd>
     <p>Es un espacio transparente que separa un elemento de otro.</p>
    </dd>
    <dt><dfn>Borde</dfn></dt>
    <dd>
     <p>
      Es una línea (que puede ser una figura con adornos) alrededor
      de un elemento.
     </p>
    </dd>
    <dt><dfn>Relleno</dfn></dt>
    <dd>
     <p>
      Es una espacio entre el contenido y el borde. Su color de fondo
      es el mismo que el color de fondo del contenido.
     </p>
    </dd>
   </dl>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/7_cajas/src/7b_modelo.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/7_cajas/src/7b_modelo.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3EModelo%20de%20cajas%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20div%20%7B%0A%20%20%20margin%3A%201.5rem%3B%0A%20%20%20border%3A%20thick%20solid%20burlywood%3B%0A%20%20%20background-color%3A%20greenyellow%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Cdiv%3EContenido%3C%2Fdiv%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
      style="color: #800000;">&lt;title&gt;</span>Modelo&nbsp;de&nbsp;cajas<span
      style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">div</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">margin</span>:&nbsp;<span
      style="color: #098658;">1.5rem</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">border</span>:&nbsp;<span
      style="color: #0451a5;">thick</span>&nbsp;<span
      style="color: #0451a5;">solid</span>&nbsp;<span
      style="color: #0451a5;">burlywood</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">greenyellow</span>;</div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;div&gt;</span>Contenido<span
      style="color: #800000;">&lt;/div&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
     </muestra-codigo>
  </div>`;
 }
}

customElements.define("b7-modelo", B7Modelo);