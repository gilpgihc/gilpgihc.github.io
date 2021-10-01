import { Diapositiva } from "../../lib/Diapositiva.js";

export class PosicionamientoContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/8_posicionamiento/a_propiedades.html">Propiedades de
        posicionamiento</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/8_posicionamiento/b_fixed.html">El posicionamiento fixed</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/8_posicionamiento/c_relative.html">El posicionamiento
        relative</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/8_posicionamiento/d_absolute.html">El posicionamiento
        absolute</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/8_posicionamiento/e_sticky.html">El posicionamiento sticky</a>
      </p>
     </li>
    </ol>`;
 }
}

customElements.define("posicionamiento-contenido", PosicionamientoContenido);