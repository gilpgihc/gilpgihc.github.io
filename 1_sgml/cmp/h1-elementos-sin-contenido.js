import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G1elementosSinContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>H. Elementos sin contenido</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Los
       <dfn>elementos sin contenido</dfn>
       llevan:
      </p>
      <ul>
       <li>
        <p>tipo y</p>
       </li>
       <li>
        <p>atributos (opcionalmente) y</p>
       </li>
      </ul>
     </li>
     <li>
      <p>Se escriben usando solo una etiqueta inicial.</p>
     </li>
     <li>
      <p>El doctype determina si un elemento no lleva contenido.</p>
     </li>
   </ul>
   <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;!DOCTYPE</span>&nbsp;<span
      style="color: #ff0000;">html</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #008000;">&lt;!--&nbsp;</span></div>
   <div><span
      style="color: #008000;">&nbsp;meta&nbsp;es&nbsp;un&nbsp;tipo&nbsp;de&nbsp;elemento&nbsp;sin</span>
   </div>
   <div><span style="color: #008000;">&nbsp;contenido.</span></div>
   <div><span style="color: #008000;">--&gt;</span></div>
   <div><span style="color: #800000;">&lt;meta</span>&nbsp;<span
      style="color: #ff0000;">charset</span>=<span
      style="color: #0000ff;">"UTF-8"</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #800000;">&lt;meta</span>&nbsp;<span
      style="color: #ff0000;">name</span>=<span
      style="color: #0000ff;">"viewport"</span></div>
   <div>&nbsp;&nbsp;<span style="color: #ff0000;">content</span>=<span
      style="color: #0000ff;">"width=device-width"</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #008000;">&lt;!--&nbsp;</span></div>
   <div><span
      style="color: #008000;">&nbsp;br&nbsp;es&nbsp;un&nbsp;tipo&nbsp;de&nbsp;elemento&nbsp;sin</span>
   </div>
   <div><span style="color: #008000;">&nbsp;contenido.</span></div>
   <div><span style="color: #008000;">--&gt;</span></div>
   <div><span style="color: #800000;">&lt;br&gt;</span></div>
  </div>
    </muestra-codigo>`;
 }
}

customElements.define("h1-elementos-sin-contenido", G1elementosSinContenido);