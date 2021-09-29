import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A6div extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. El elemento <strong>div</strong></h1>
   <div class="lectura">
   <ul>
    <li>
     <p>
      Cada símbolo que se puede representar en una familia de fuentes
      se conoce como <dfn>glifo</dfn> o <dfn>pictograma</dfn>.
     </p>
    </li>
   </ul>
   <h2>Algunas Familias Básicas</h2>
   <dl>
    <dt><dfn><code class="language-css">serif</code></dfn></dt>
    <dd>
     <ul>
      <li>
       <p>Es el tipo de letra que lleva adornos.</p>
      </li>
      <li>
       <p>
        Cada glifo puede tener un ancho diferente al de los otros de la
        misma familia.
       </p>
      </li>
      <li>
       <p>Permite leer cómodamente textos largos.</p>
      </li>
      <li>
       <p>
        Viene predefinida, pero la familia exacta depende de cada
        navegador web.
       </p>
      </li>
     </ul>
     <p>
      <span style="font-family: serif; font-size: 4rem;">
       Ejemplo de Serif.
      </span>
     </p>
    </dd>
    <dt><dfn><code class="language-css">sans-serif</code></dfn></dt>
    <dd>
     <ul>
      <li>
       <p>Es el tipo de letra que no lleva adornos.</p>
      </li>
      <li>
       <p>Luce más en títulos, textos cortos e interfaces de usuario.</p>
      </li>
      <li>
       <p>
        Cada glifo puede tener un ancho diferente al de los otros de la
        misma familia.
       </p>
      </li>
      <li>
       <p>
        Viene predefinida, pero la familia exacta depende de cada
        navegador web.
       </p>
      </li>
     </ul>
     <p>
      <span style="font-family: sans-serif; font-size: 4rem;">
       Ejemplo de Sans Serif.
      </span>
     </p>
    </dd>
   </dl>
   <h2>Temas por Investigar</h2>
   <ul>
    <li>
     <p>
      <a href="https://www.w3.org/TR/css-fonts-3/"
        target="_blank">El módulo de fonts de CSS3.</a>
     </p>
    </li>
   </ul>
  </div>`;
 }
}

customElements.define("a6-div", A6div);