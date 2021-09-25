import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F1Atributos extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Atributos</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
      Los elementos tienen preestablecidas características llamadas
      <dfn>atributos</dfn>.
    </p>
     </li>
     <li>
      <p>Cada <dfn>atributo</dfn> tiene asociado un nombre y un valor.</p>
     </li>
     <li>
      <p>
       Los atributos tienen valores predeterminados que se pueden modificar en
       el código.
      </p>
     </li>
     <li>
      <p>
       Los atributos se colocan en una etiqueta después del tipo de elemento.
      </p>
     </li>
     <li>
      <p>
       Se coloca el nombre del atributo, seguido por el signo
       <code class="language-html">=</code>,
       seguido por el valor entre comillas
       (<code class="language-html">"</code>).
      </p>
     </li>
     <li>
      <p>
       Hay atributos que solo pueden valer
       <code class="language-javascript">true</code>
       o
       <code class="language-javascript">false</code>,
       también llamados booleanos. En este caso, solo se pone el nombre del
       atributo y se asume que vale
       <code class="language-javascript">true</code>;
       cuando valen
       <code class="language-javascript">false</code>,
       simplemente no se ponen.
      </p>
     </li>
     <li>
      <p>
       Hay un atributo especial, llamado
       <code class="language-html">id</code>,
       que pueden definir todos los elementos y los
       identifica de forma única, para HTML, CSS y JavaScript. Su valor no
       se puede repetir en ningún otro elemento del documento.
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
   <div><span style="color: #008000;">&nbsp;El&nbsp;atributo</span></div>
   <div><span style="color: #008000;">&nbsp;&nbsp;id</span></div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;No&nbsp;se&nbsp;puede&nbsp;repetir&nbsp;en&nbsp;el</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;documento&nbsp;y&nbsp;vale</span>
   </div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;raíz</span></div>
   <br>
   <div><span style="color: #008000;">&nbsp;El&nbsp;atributo</span></div>
   <div><span style="color: #008000;">&nbsp;&nbsp;lang</span></div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;tiene&nbsp;el&nbsp;valor</span>
   </div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;es</span></div>
   <br>
   <div><span
      style="color: #008000;">&nbsp;El&nbsp;atributo&nbsp;booleano</span></div>
   <div><span style="color: #008000;">&nbsp;&nbsp;hidden</span></div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;tiene&nbsp;el&nbsp;valor</span>
   </div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;true</span></div>
   <div><span style="color: #008000;">--&gt;</span></div>
   <div><span style="color: #800000;">&lt;html</span>&nbsp;<span
      style="color: #ff0000;">id</span>=<span
      style="color: #0000ff;">"raíz"</span>&nbsp;<span
      style="color: #ff0000;">lang</span>=<span
      style="color: #0000ff;">"es"</span>&nbsp;<span
      style="color: #ff0000;">hidden</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
   </muestra-codigo>`;
 }
}

customElements.define("f1-atributos", F1Atributos);