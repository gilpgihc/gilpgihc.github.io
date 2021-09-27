import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class J1Hijos extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>J. Elementos hijos</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Un elemento es
       <dfn>hijo</dfn>
       de otro elemento si pertenece al contenido de este último.
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
   <div><span style="color: #008000;">&lt;!--</span></div>
   <div><span
      style="color: #008000;">&nbsp;El&nbsp;elemento&nbsp;html&nbsp;no&nbsp;es&nbsp;hijo&nbsp;de</span>
   </div>
   <div><span style="color: #008000;">&nbsp;nadie.</span></div>
   <div><span style="color: #008000;">--&gt;</span></div>
   <div><span style="color: #800000;">&lt;html</span>&nbsp;<span
      style="color: #ff0000;">lang</span>=<span
      style="color: #0000ff;">"es"</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #008000;">&lt;!--</span></div>
   <div><span
      style="color: #008000;">&nbsp;El&nbsp;elemento&nbsp;head&nbsp;es&nbsp;hijo&nbsp;del</span>
   </div>
   <div><span style="color: #008000;">&nbsp;elemento&nbsp;html.</span></div>
   <div><span style="color: #008000;">--&gt;</span></div>
   <div><span style="color: #800000;">&lt;head&gt;</span></div>
   <div>&nbsp;<span style="color: #008000;">&lt;!--</span></div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;Los&nbsp;2&nbsp;elementos&nbsp;meta&nbsp;y&nbsp;el&nbsp;title</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;son&nbsp;hijos&nbsp;delelemento&nbsp;head.</span>
   </div>
   <div><span style="color: #008000;">&nbsp;--&gt;</span></div>
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
   <div><span style="color: #008000;">&lt;!--</span></div>
   <div><span
      style="color: #008000;">&nbsp;El&nbsp;elemento&nbsp;body&nbsp;es&nbsp;padre&nbsp;de&nbsp;los</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;elementos&nbsp;h1&nbsp;y&nbsp;p.</span>
   </div>
   <div><span style="color: #008000;">--&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span style="color: #008000;">&lt;!--</span></div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;Los&nbsp;elementos&nbsp;h1&nbsp;y&nbsp;p&nbsp;son&nbsp;hijos</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;del&nbsp;elemento&nbsp;body.</span>
   </div>
   <div><span style="color: #008000;">&nbsp;--&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>Ejemplo<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;p&gt;</span>Hola&nbsp;mundo.👶<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
    </muestra-codigo>`;
 }
}

customElements.define("j1-hijos", J1Hijos);