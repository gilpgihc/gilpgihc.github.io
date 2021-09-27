import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G4Custom extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. Propiedades personalizadas</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       El elemento
       <dfn><code class="language-html">nav</code></dfn>
       es una sección de la página que contiene enlaces a otras páginas o a
       otras partes de la misma página..
      </p>
     </li>
     <li>
      <p>
       Su especificación está en
       <a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element"
         target="_blank">https://html.spec.whatwg.org/multipage/sections.html#the-body-element</a>
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;nav&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;h2&gt;</span>Enlaces<span
      style="color: #800000;">&lt;/h2&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;a</span>&nbsp;<span
      style="color: #ff0000;">href</span>=<span
      style="color: #0000ff;">"&nbsp;https://google.com&nbsp;"</span></div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">target</span>=<span
      style="color: #0000ff;">"_blank"</span><span
      style="color: #800000;">&gt;</span>Google<span
      style="color: #800000;">&lt;/a&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
   <div><span style="color: #800000;">&lt;/nav&gt;</span></div>
  </div>
     </muestra-codigo>`;
 }
}

customElements.define("g4-custom", G4Custom);