import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E1Elementos extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Elementos</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Un <dfn>elemento</dfn> es un objeto que representa una forma de
       procesar el texto.
      </p>
     </li>
     <li>
      <p>Normalmente se indican usando marcas.</p>
     </li>
     <li>
      <p>
       Cada elemento tiene asociado un
       <dfn>tipo</dfn>,
       que representa su forma de procesamiento.
      </p>
     </li>
     <li>
      <p>
       Cada tipo de elemento tiene un funcionamiento preestablecido por el
       navegador, aunque también es posible crear elementos personalizados.
      </p>
     </li>
     <li>
      <p>El tipo es la primera palabra de la etiqueta.</p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;!DOCTYPE</span>&nbsp;<span
      style="color: #ff0000;">html</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span
      style="color: #008000;">&lt;!--&nbsp;Elemento&nbsp;de&nbsp;tipo&nbsp;html--&gt;</span>
   </div>
   <div><span style="color: #800000;">&lt;html</span>&nbsp;<span
      style="color: #ff0000;">lang</span>=<span
      style="color: #0000ff;">"es"</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span
      style="color: #008000;">&lt;!--&nbsp;Elemento&nbsp;de&nbsp;tipo&nbsp;head--&gt;</span>
   </div>
   <div><span style="color: #800000;">&lt;head&gt;</span></div>
   <div>&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;Elemento&nbsp;de&nbsp;tipo&nbsp;meta--&gt;</span>
   </div>
   <div>&nbsp;<span style="color: #800000;">&lt;meta</span>&nbsp;<span
      style="color: #ff0000;">charset</span>=<span
      style="color: #0000ff;">"UTF-8"</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
     </muestra-codigo>`;
 }
}

customElements.define("e1-elementos", E1Elementos);