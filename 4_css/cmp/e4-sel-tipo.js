import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E4SelTipo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Selector de tipo</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Una forma simple de selector es el <dfn>selector de tipo</dfn>, que
       consiste en usar el tipo de un elemento. Hace que una regla se aplique
       a todos los elementos de ese tipo.
      </p>
     </li>
     <li>
      <p>
       La definición de una selector de tipo está en
       <a href="https://www.w3.org/TR/selectors-3/#type-selectors"
         target="_blank">https://www.w3.org/TR/selectors-3/#type-selectors</a>
      </p>
     </li>
    </ul>
   </div>
   <h2>Ejemplo</h2>
  </div>
  <muestra-codigo>
  <div>
   <div><span style="color: #800000;">&lt;head&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #008000;">/*&nbsp;El&nbsp;selector</span></div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;h1</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;hace&nbsp;que&nbsp;las&nbsp;propiedades&nbsp;de</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;esta&nbsp;regla&nbsp;se&nbsp;apliquen&nbsp;a&nbsp;todos</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;los&nbsp;elementos&nbsp;de&nbsp;tipo</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;h1.&nbsp;*/</span>
   </div>
   <div class=resaltado>&nbsp;&nbsp;<span style="color: #800000;">h1</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
      style="color: #0451a5;">yellow</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">blue</span>;</div>
   <div>&nbsp;&nbsp;}</div><br>
   <div>&nbsp;&nbsp;<span
      style="color: #008000;">/*&nbsp;El&nbsp;selector</span></div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;p</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;hace&nbsp;que&nbsp;las&nbsp;propiedades&nbsp;de</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;esta&nbsp;regla&nbsp;se&nbsp;apliquen&nbsp;a&nbsp;todos</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;los&nbsp;elementos&nbsp;de&nbsp;tipo</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;p.&nbsp;*/</span>
   </div>
   <div class=resaltado2>&nbsp;&nbsp;<span style="color: #800000;">p</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
      style="color: #0451a5;">white</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">black</span>;</div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;Las&nbsp;reglas&nbsp;con&nbsp;el&nbsp;selector</span>
   </div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;h1</span></div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;se&nbsp;aplican&nbsp;a&nbsp;este&nbsp;elemento.&nbsp;--&gt;</span>
   </div>
   <div>&nbsp;<span style="color: #800000;">&lt;body&gt;</span></div>
   <div class=resaltado>&nbsp;&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>CSS<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;Las&nbsp;reglas&nbsp;con&nbsp;el&nbsp;selector</span>
   </div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;p</span></div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;se&nbsp;aplican&nbsp;a&nbsp;este&nbsp;elemento.&nbsp;--&gt;</span>
   </div>
   <div class=resaltado2>&nbsp;&nbsp;<span
      style="color: #800000;">&lt;p&gt;</span>Este&nbsp;es&nbsp;un&nbsp;ejemplo.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;Las&nbsp;reglas&nbsp;con&nbsp;el&nbsp;selector</span>
   </div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;p</span></div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;se&nbsp;aplican&nbsp;a&nbsp;este&nbsp;elemento.&nbsp;--&gt;</span>
   </div>
   <div class=resaltado2>&nbsp;&nbsp;<span
      style="color: #800000;">&lt;p&gt;</span>Aprende&nbsp;CSS.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #800000;">&lt;h2&gt;</span>Subsección<span
      style="color: #800000;">&lt;/h2&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;Las&nbsp;reglas&nbsp;con&nbsp;el&nbsp;selector</span>
   </div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;p</span></div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;se&nbsp;aplican&nbsp;a&nbsp;este&nbsp;elemento.&nbsp;--&gt;</span>
   </div>
   <div class=resaltado2>&nbsp;&nbsp;<span
      style="color: #800000;">&lt;p&gt;</span>Juega&nbsp;con&nbsp;colores.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;footer&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;Las&nbsp;reglas&nbsp;con&nbsp;el&nbsp;selector</span>
   </div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;se&nbsp;aplican&nbsp;a&nbsp;este&nbsp;elemento.&nbsp;--&gt;</span>
   </div>
   <div class=resaltado2>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
   <div class=resaltado2>&nbsp;&nbsp;&nbsp;&nbsp;©&nbsp;2021</div>
   <div class=resaltado2>&nbsp;&nbsp;&nbsp;&nbsp;Gilberto&nbsp;Pacheco&nbsp;Gallegos.</div>
   <div class=resaltado2>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/footer&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/body&gt;</span></div>
  </div>
   </muestra-codigo>`;
 }
}

customElements.define("e4-sel-tipo", E4SelTipo);