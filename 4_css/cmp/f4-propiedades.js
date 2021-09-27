import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F4Propiedades extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Propiedades</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>Se declaran con una expresión del tipo</p>
      <p>
       <code
         class="language-css"><var>nombre</var>: <em>valor</em></code>
       </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
    <muestra-codigo>
    <div>
    <div><span style="color: #800000;">&lt;head&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
    <div class=resaltado>&nbsp;&nbsp;<span style="color: #800000;">h1</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #008000;">/*&nbsp;Esta&nbsp;es&nbsp;la&nbsp;propiedad</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;color.</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;En&nbsp;este&nbsp;caso&nbsp;se&nbsp;aplica</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;a&nbsp;los&nbsp;elementos&nbsp;tipo</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;h1.</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;Su&nbsp;valor&nbsp;es&nbsp;yellow.&nbsp;*/</span>
    </div>
    <div class=resaltado>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
       style="color: #0451a5;">yellow</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #008000;">/*&nbsp;Esta&nbsp;es&nbsp;la&nbsp;propiedad</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;background-color.</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;En&nbsp;este&nbsp;caso&nbsp;se&nbsp;aplica</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;a&nbsp;los&nbsp;elementos&nbsp;tipo</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;h1.</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;Su&nbsp;valor&nbsp;es&nbsp;blue.&nbsp;*/</span>
    </div>
    <div class=resaltado>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">background-color</span>:&nbsp;<span
       style="color: #0451a5;">blue</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div class=resaltado2>&nbsp;&nbsp;<span style="color: #800000;">p</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #008000;">/*&nbsp;Esta&nbsp;es&nbsp;la&nbsp;propiedad</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;color.</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;En&nbsp;este&nbsp;caso&nbsp;se&nbsp;aplica</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;a&nbsp;los&nbsp;elementos&nbsp;tipo</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;p.</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;Su&nbsp;valor&nbsp;es&nbsp;white.&nbsp;*/</span>
    </div>
    <div class=resaltado2>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
       style="color: #0451a5;">white</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #008000;">/*&nbsp;Esta&nbsp;es&nbsp;la&nbsp;propiedad</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;background-color.</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;En&nbsp;este&nbsp;caso&nbsp;se&nbsp;aplica</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;a&nbsp;los&nbsp;elementos&nbsp;tipo</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;p.</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;Su&nbsp;valor&nbsp;es&nbsp;black.&nbsp;*/</span>
    </div>
    <div class=resaltado2>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">background-color</span>:&nbsp;<span
       style="color: #0451a5;">black</span>;</div>
    <div>&nbsp;&nbsp;}</div>
    <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
    <div><span style="color: #800000;">&lt;/head&gt;</span></div>
    <div><span style="color: #800000;">&lt;body&gt;</span></div>
    <div class=resaltado>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>CSS<span
       style="color: #800000;">&lt;/h1&gt;</span></div>
    <div class=resaltado2>&nbsp;<span
       style="color: #800000;">&lt;p&gt;</span>Este&nbsp;es&nbsp;un&nbsp;ejemplo.<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div class=resaltado2>&nbsp;<span
       style="color: #800000;">&lt;p&gt;</span>Aprende&nbsp;CSS.<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;h2&gt;</span>Subsección<span
       style="color: #800000;">&lt;/h2&gt;</span></div>
    <div class=resaltado2>&nbsp;<span
       style="color: #800000;">&lt;p&gt;</span>Juega&nbsp;con&nbsp;colores.<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;footer&gt;</span></div>
    <div class=resaltado2>&nbsp;&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
    <div class=resaltado2>&nbsp;&nbsp;&nbsp;©&nbsp;2021</div>
    <div class=resaltado2>&nbsp;&nbsp;&nbsp;Gilberto&nbsp;Pacheco&nbsp;Gallegos.</div>
    <div class=resaltado2>&nbsp;&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;/footer&gt;</span></div>
    <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   </div>
     </muestra-codigo>`;
 }
}

customElements.define("f4-propiedades", F4Propiedades);