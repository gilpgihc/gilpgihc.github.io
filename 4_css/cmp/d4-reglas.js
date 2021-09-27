import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D4Reglas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Reglas de estilo</h1>
   <div class="lectura">
    <dl>
     <dt><dfn>selector</dfn></dt>
     <dd>
      <p>
       Una expresión que permite identificar a uno o varios elementos de
       HTML.
      </p>
     </dd>
     <dt><dfn>lista de selectores</dfn></dt>
     <dd>
      <p>
       Una secuencia de selectores separadas por coma
       (<code class="language-css">,</code>).
      </p>
     </dd>
     <dt><dfn>declaración de propiedad</dfn></dt>
     <dd>
      <p>
       Una expresión del tipo
       <code
         class="language-css"><var>nombre</var>: <em>valor</em></code>
       </p>
     </dd>
     <dt><dfn>lista de declaraciones de propiedades</dfn></dt>
     <dd>
      <p>
       Una secuencia de declaraciones de propiedades separadas por punto
       y coma
       (<code class="language-css">;</code>)
       y encerradas entre llaves
       (<code class="language-css">{</code>
       <code class="language-css">}</code>).
      </p>
     </dd>
     <dt><dfn>regla de estilo</dfn></dt>
     <dd>
      <p>
       Une lista de selectores con una lista de declaraciones de
       propiedades.
      </p>
     </dd>
    </dl>
<ul>
     <li>
      <p>
       La definición de una regla de estilo está en
       <a href="https://www.w3.org/TR/css-syntax-3/#style-rule"
         target="_blank">https://www.w3.org/TR/css-syntax-3/#style-rule</a>
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;<span
      style="color: #008000;">/*&nbsp;Esta&nbsp;es&nbsp;una&nbsp;regla.</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;*&nbsp;El&nbsp;selector&nbsp;es&nbsp;h1.</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;*&nbsp;Sus&nbsp;propiedades&nbsp;están&nbsp;dentro&nbsp;de</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;*&nbsp;las&nbsp;llaves.&nbsp;*/</span>
   </div>
   <div>&nbsp;<span style="color: #800000;">h1</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
      style="color: #0451a5;">yellow</span>;</div>
   <div>&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">blue</span>;</div>
   <div>&nbsp;}&nbsp;<span
      style="color: #008000;">/*&nbsp;Fin&nbsp;de&nbsp;la&nbsp;primera&nbsp;regla.&nbsp;*/</span>
   </div><br>
   <div>&nbsp;<span
      style="color: #008000;">/*&nbsp;Esta&nbsp;es&nbsp;otra&nbsp;regla.</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;*&nbsp;El&nbsp;selector&nbsp;es&nbsp;p.</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;*&nbsp;Sus&nbsp;propiedades&nbsp;están&nbsp;dentro&nbsp;de</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;*&nbsp;las&nbsp;llaves.&nbsp;*/</span>
   </div>
   <div>&nbsp;<span style="color: #800000;">p</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
      style="color: #0451a5;">white</span>;</div>
   <div>&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">black</span>;</div>
   <div>&nbsp;}&nbsp;<span
      style="color: #008000;">/*&nbsp;Fin&nbsp;de&nbsp;la&nbsp;segunda&nbsp;regla.&nbsp;*/</span>
   </div>
   <div><span style="color: #800000;">&lt;/style&gt;</span></div>
  </div>
    </muestra-codigo>`;
 }
}

customElements.define("d4-reglas", D4Reglas);