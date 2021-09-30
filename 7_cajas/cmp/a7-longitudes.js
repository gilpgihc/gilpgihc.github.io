import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A7Longitudes extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Longitudes en CSS</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Hay algunas propiedades que expresan tamaños o distancias.
       Por ejemplo:
      </p>
      <dl>
       <dt><dfn><code class="language-css">font-size</code></dfn></dt>
       <dd>
        <p>Indica el tamaño de letra.</p>
        <p>
         Los valores son números decimales, que opcionalmente son
         fraccionales y son seguidos sin espacio por las unidades de
         medición. Ejemplos: 3em, 2.4rem.
        </p>
        <p>El cero se puede expresar sin unidades; por ejemplo: 0.</p>
        <p>Algunas unidades de medición son:</p>
         <dl>
          <dt><dfn><code class="language-css">em</code></dfn></dt>
          <dd>
           <p>
            La altura de un renglón de texto, usando el tamaño de letra del
            elemento.
           </p>
          </dd>
          <dt><dfn><code class="language-css">rem</code></dfn></dt>
          <dd>
           <p>
            La altura de un renglón de texto, usando el tamaño de letra del
            elemento raíz (que en HTML, es el elemento html).
           </p>
          </dd>
          <dt><dfn><code class="language-css">vh</code></dfn></dt>
          <dd>
           <p>1% de la altura del puerto de visión (la ventana).</p>
          </dd>
          <dt><dfn><code class="language-css">vw</code></dfn></dt>
          <dd>
           <p>1% del ancho del puerto de visión (la ventana).</p>
          </dd>
          <dt><dfn><code class="language-css">%</code></dfn></dt>
          <dd>
           <p>
            Porcentaje del espacio que el elemento padre permite que sus
            hijos ocupen.
           </p>
          </dd>
          <dt><dfn><code class="language-css">px</code></dfn></dt>
          <dd>
           <p>Pixeles.</p>
          </dd>
         </dl>
        </p>
       </dd>
      </dl>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("a7-longitudes", A7Longitudes);