import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C1Comentarios extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Comentarios</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Los comentarios inician con
       <code class="language-html">&lt;!--</code>
       y terminan con
       <code class="language-html">--&gt;</code>.
       Pueden ocupar más de un renglón y no pueden
       llevar 2 guiones seguidos
       (<code class="language-html">--</code>).
      </p>
     </li>
     <li>
      <p>No son procesados por el lenguaje.</p>
     </li>
     <li>
      <p>No se despliegan en la página.</p>
     </li>
     <li>
      <p>Permite añadir información para entender mejor el código.</p>
     </li>
     <li>
      <p>
       Normalmente se ponen al final de la línea que explican o una línea antes.
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
      style="color: #008000;">&nbsp;Comentario&nbsp;acerca&nbsp;de&nbsp;html.&nbsp;</span>
   </div>
   <div><span style="color: #008000;">--&gt;</span></div>
   <div><span style="color: #800000;">&lt;html</span>&nbsp;<span
      style="color: #ff0000;">lang</span>=<span
      style="color: #0000ff;">"en"</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #800000;">&lt;head&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;meta</span>&nbsp;<span
      style="color: #ff0000;">charset</span>=<span
      style="color: #0000ff;">"UTF-8"</span><span
      style="color: #800000;">&gt;</span><span
      style="color: #008000;">&lt;!--meta--&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
   </muestra-codigo>`;
 }
}

customElements.define("c1-comentarios", C1Comentarios);