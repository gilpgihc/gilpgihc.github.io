import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G1elementosConContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. Elementos con contenido</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Los
       <dfn>elementos con contenido</dfn>
       llevan:
      </p>
      <ul>
       <li>
        <p>tipo,</p>
       </li>
       <li>
        <p>atributos (opcionalmente) y</p>
       </li>
       <li>
       <p>contenido (opcionalmente), que incluye texto y más etiquetas.</p>
       </li>
      </ul>
     </li>
     <li>
      <p>Se escriben usando 2 tipos de etiquetas:</p>
      <dl>
        <dt><dfn>Etiqueta Inicial</dfn></dt>
        <dd>
          <p>Inicia la definición del elemento.</p>
          <p>Lleva el tipo y opcionalmente los atributos.</p>
        </dd>
        <dt><dfn>Etiqueta Final o de Cierre</dfn></dt>
        <dd>
          <p>Termina la definición del elemento.</p>
          <p>Inicia con / y luego el tipo del elemento que cierra.</p>
        </dd>
      </dl>
     </li>
     <li>
      <p>El contenido se coloca entre la etiquetas inicial y final.</p>
     </li>
     <li>
      <p>El doctype determina si un elemento lleva contenido.</p>
     </li>
   </ul>
   <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;!DOCTYPE</span>&nbsp;<span
      style="color: #ff0000;">html</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #008000;">&lt;!--</span></div>
   <div><span
      style="color: #008000;">&nbsp;html&nbsp;es&nbsp;un&nbsp;elemento&nbsp;con&nbsp;contenido.</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;Puede&nbsp;contener&nbsp;comentarios,&nbsp;otros</span>
   </div>
   <div><span style="color: #008000;">&nbsp;elementos&nbsp;y&nbsp;texto.</span>
   </div>
   <div><span style="color: #008000;">--&gt;</span></div>
   <div><span style="color: #800000;">&lt;html</span>&nbsp;<span
      style="color: #ff0000;">lang</span>=<span
      style="color: #0000ff;">"en"</span><span
      style="color: #800000;">&gt;</span><span
      style="color: #008000;">&lt;!--Inicia&nbsp;html--&gt;</span></div>
   <div><span style="color: #008000;">&lt;!--</span></div>
   <div><span
      style="color: #008000;">&nbsp;head&nbsp;es&nbsp;contenido&nbsp;de&nbsp;html.</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;También&nbsp;es&nbsp;elemento&nbsp;con&nbsp;contenido.</span>
   </div>
   <div><span style="color: #008000;">--&gt;</span></div>
   <div><span style="color: #800000;">&lt;head&gt;</span>&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;Inicia&nbsp;head&nbsp;--&gt;</span>
   </div>
   <div>&nbsp;<span style="color: #008000;">&lt;!--</span></div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;meta&nbsp;es&nbsp;contenido&nbsp;de&nbsp;head.</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;No&nbsp;es&nbsp;un&nbsp;elemento&nbsp;con&nbsp;contenido.</span>
   </div>
   <div><span style="color: #008000;">&nbsp;--&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;meta</span>&nbsp;<span
      style="color: #ff0000;">charset</span>=<span
      style="color: #0000ff;">"UTF-8"</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span>&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;Termina&nbsp;head&nbsp;--&gt;</span>
   </div>
   <div>💪Este&nbsp;texto&nbsp;es&nbsp;contenido&nbsp;de&nbsp;html.</div>
   <div><span style="color: #800000;">&lt;/html&gt;</span><span
      style="color: #008000;">&lt;!--&nbsp;Termina&nbsp;html&nbsp;--&gt;</span>
   </div>
  </div>
    </muestra-codigo>`;
 }
}

customElements.define("g1-elementos-con-contenido", G1elementosConContenido);