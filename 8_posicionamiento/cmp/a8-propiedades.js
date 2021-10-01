import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A8Propiedades extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Propiedades de posicionamiento</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Es posible cambiar el modelo de cajas, usando un método que permita
       controlar por coordenadas la posición de algunos elementos dentro de la
       ventana. Para ello se utilizan las siguientes propiedades:
      </p>
      <dl>
      <dt><dfn><code class="language-css">position</code></dfn></dt>
      <dd>
       <p>Controla la forma de colocar un elemento en la ventana. </p>
       <p>
        Los valores que puede tomar se explican a lo largo de esta lección y
        son:</p>
       <dl>
        <dt><dfn><code class="language-css">static</code></dfn></dt>
        <dd>
         <p>
          Es el posicionamiento normal y no usa las propiedades de
          posicionamiento.
         </p>
        </dd>
        <dt><dfn><code class="language-css">fixed</code></dfn></dt>
        <dd>
         <p>Es relativo a la ventana del navegador.</p>
        </dd>
        <dt><dfn><code class="language-css">relative</code></dfn></dt>
        <dd>
         <p>Es relativo a la posición normal del elemento.</p>
        </dd>
        <dt><dfn><code class="language-css">absolute</code></dfn></dt>
        <dd>
         <p>
          Es relativo a la posición de su ancestro más inmediato que no
          tenga posicionamiento
          <code class="language-css">static</code>.
         </p>
        </dd>
        <dt><code class="language-css">sticky</code></dt>
        <dd>
         <p>
          Usa posicionamiento
          <code class="language-css">relative</code>
          mientras el elemento está en el área visible de la ventana y se
          vuelve
          <code class="language-css">fixed</code>
          cuando sale del área visible de la ventana.
         </p>
        </dd>
       </dl>
          </dd>
      <dt><dfn><code class="language-css">top</code></dfn></dt>
      <dd>
       <p>
        Posición de la parte superior del elemento con respecto a la
        posición original (posicionamiento
        <code class="language-css">relative</code>) o al elemento
        contenedor.
       </p>
      </dd>
      <dt><dfn><code class="language-css">bottom</code></dfn></dt>
      <dd>
       <p>
        Posición de la parte inferior del elemento con respecto a la
        posición original (posicionamiento
        <code class="language-css">relative</code>) o al elemento
        contenedor.
       </p>
      </dd>
      <dt><dfn><code class="language-css">left</code></dfn></dt>
      <dd>
       <p>
        Posición de la parte izquierda del elemento con respecto a la
        posición original (posicionamiento
        <code class="language-css">relative</code>)
        o al elemento contenedor.
       </p>
      </dd>
      <dt><dfn><code class="language-css">right</code></dfn></dt>
      <dd>
       <p>
        Posición de la parte izquierda del elemento con respecto a la
        posición original (posicionamiento
        <code class="language-css">relative</code>)
        o al elemento contenedor.
       </p>
      </dd>
      <dt><code class="language-css">width</code></dt>
      <dd>
       <p>
        Ancho de un elemento. Se indica usando un número decimal,
        opcionalmente fraccionario, seguido de la unidad.
       </p>
      </dd>
      <dt><code class="language-css">height</code></dt>
      <dd>
       <p>
        Altura de un elemento. Se indica usando un número decimal,
        opcionalmente fraccionario, seguido de la unidad.
       </p>
      </dd>
      <dt><dfn><code class="language-css">z-index</code></dfn></dt>
      <dd>
       <p>
        Los elementos se pueden colocar en capas y ocultarse unos a otros.
        Un elemento se coloca sobre los elementos hermanos con
        posicionamiento no
        <code class="language-css">static</code>
        que aparecen antes en el texto. La propiedad
        <code class="language-css">z-index</code>
        se usa para cambiar ese orden. El número
        <code class="language-css">z-index</code>
        más grande está arriba y tapa a todos los que tienen un valor
        menor. Empieza desde 1.
       </p>
      </dd>
     </dl>
    </li>
    </ul>
   </div>`;
 }
}

customElements.define("a8-propiedades", A8Propiedades);