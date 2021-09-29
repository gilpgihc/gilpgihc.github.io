import { Diapositiva } from "../../lib/Diapositiva.js";

export class BasicasContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/5_basicas/a_fonts.html">Fonts</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/5_basicas/b_font-family.html">La propiedad
        <strong>font-family</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/5_basicas/c_colores.html">Colores en CSS</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/5_basicas/d_color.html">La propiedad
        <strong>color</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/5_basicas/e_background-color.html">La propiedad
        <strong>background-color</strong></a>
      </p>
     </li>
    </ol>`;
 }
}

customElements.define("basicas-contenido", BasicasContenido);