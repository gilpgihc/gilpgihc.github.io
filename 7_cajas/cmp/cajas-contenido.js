import { Diapositiva } from "../../lib/Diapositiva.js";

export class CajasContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/7_cajas/a_longitudes.html">Longitudes en CSS</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/7_cajas/b_modelo.html">El modelo de cajas</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/7_cajas/c_margin.html">Margen (margin)</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/7_cajas/d_padding.html">Relleno (padding)</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/7_cajas/e_border.html">Borde (border)</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/7_cajas/f_radio.html">Esquinas redondas (border-radio)</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/7_cajas/g_box-sizing.html">La propiedad
        <strong>box-sizing</strong></a>
      </p>
     </li>
    </ol>`;
 }
}

customElements.define("cajas-contenido", CajasContenido);