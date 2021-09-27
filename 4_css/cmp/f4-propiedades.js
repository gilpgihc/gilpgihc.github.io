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
      <p>Es un elemento de fraseo.</p>
     </li>
     <li>
      <p>Se le conoce como ancla.</p>
     </li>
     <li>
      <p>
       Cuando tiene el atributo
       <code class="language-html">href</code>,
       representa un hipervínculo. El texto que muestra es su contenido,
       que debe ser de fraseo.
      </p>
     </li>
     <li>
      <p>
       Su especificación está en
       <a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element"
         target="_blank">https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element</a>
      </p>
     </li>
    </ul>
    <h2>Atributos</h2>
    <dl>
     <dt><dfn><code class="language-html">href</code></dfn></dt>
     <dd>
      <p>
       URL válida del recurso que muestra. Puede estar rodeada por espacios.
      </p>
     </dd>
     <dt><dfn><code class="language-html">target</code></dfn></dt>
     <dd>
      <p>
       El valor
       <code class="language-html">_blank</code>
       Hace que el enlace se abra en otra pestaña.
      </p>
     </dd>
    </dl>
    <h2>Ejemplo</h2>
   </div>
    <muestra-codigo>
    <div>
    <div><span style="color: #800000;">&lt;a</span>&nbsp;<span
       style="color: #ff0000;">href</span>=<span
       style="color: #0000ff;">"&nbsp;https://google.com&nbsp;"</span></div>
    <div>&nbsp;&nbsp;<span style="color: #ff0000;">target</span>=<span
       style="color: #0000ff;">"_blank"</span><span
       style="color: #800000;">&gt;</span>Google<span
       style="color: #800000;">&lt;/a&gt;</span></div>
   </div>
    </muestra-codigo>`;
 }
}

customElements.define("f4-propiedades", F4Propiedades);