import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C4Comentarios extends Diapositiva {
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
       <code class="language-css" style="color: #098658;">/*</code>
       y terminan con
       <code class="language-css" style="color: #098658;">*/</code>.
       Pueden ocupar más de un renglón.
      </p>
     </li>
     <li>
      <p>
       Se colocan dentro de un elemento
       <code class="language-css">style</code>.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;<span
      style="color: #008000;">/*&nbsp;Comentario&nbsp;sobre&nbsp;h1.&nbsp;&nbsp;*/</span>
   </div>
   <div>&nbsp;<span style="color: #800000;">h1</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
      style="color: #0451a5;">yellow</span>;&nbsp;<span
      style="color: #008000;">/*Sobre&nbsp;color.*/</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">blue</span>;</div>
   <div>&nbsp;}</div>
   <div><span style="color: #800000;">&lt;/style&gt;</span></div>
  </div>
      </muestra-codigo>`;
 }
}

customElements.define("c4-comentarios", C4Comentarios);