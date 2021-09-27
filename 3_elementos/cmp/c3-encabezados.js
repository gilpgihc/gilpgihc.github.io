import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C3Encabezados extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Títulos</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Son los elementos
       <code class="language-html">h1</code>,
       <code class="language-html">h2</code>,
       <code class="language-html">h3</code>,
       <code class="language-html">h4</code>,
       <code class="language-html">h5</code>
       y
       <code class="language-html">h6</code>.
      </p>
     </li>
     <li>
      <p>
       Normalmente se muestraN separadoS del resto del texto, con un tipo de
       letra más grande y en negritas.
      </p>
     </li>
     <li>
      <p>Representan títulos de secciones.</p>
     </li>
     <li>
      <p>Su contenido es de fraseo.</p>
     </li>
     <li>
      <p>
       Los elementos tienen una categoría en base a su número, donde
       <code class="language-html">h1</code>
       es la categoría más alta y 
       <code class="language-html">h6</code>
       es la más baja.
      </p>
     </li>
     <li>
      <p>
       Títulos de una misma categoría o mayor definen nuevas secciones.
      </p>
     </li>
     <li>
       <p>
       Títulos de una categoría más baja definen subsecciones que son
       parte de la anterior.
      </p>
     </li>
     <li>
      <p>
       Se recomienda que haya un solo
       <code class="language-html">h1</code>
       en una página y sea el título del documento.
      </p>
     </li>
     <li>
      <p>
       Su especificación está en
       <a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements"
         target="_blank">https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements</a>
      </p>
     </li>
    </ul>
    <h2>Temas por investigar</h2>
    <ul>
     <li>
      <p>
       Secciones en <a href="https://html.spec.whatwg.org/multipage/sections.html#sections"
         target="_blank">https://html.spec.whatwg.org/multipage/sections.html#sections</a>
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;h1&gt;</span>🏡Estructura<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div><span style="color: #800000;">&lt;nav&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;h2&gt;</span>Enlaces<span
      style="color: #800000;">&lt;/h2&gt;</span></div>
   <div>&nbsp;...</div>
   <div><span style="color: #800000;">&lt;/nav&gt;</span></div>
   <div>...</div>
  </div>
     </muestra-codigo>`;
 }
}

customElements.define("c3-encabezados", C3Encabezados);