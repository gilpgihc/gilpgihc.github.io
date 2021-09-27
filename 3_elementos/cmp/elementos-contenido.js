import { Diapositiva } from "../../lib/Diapositiva.js";

export class ElementosContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/3_elementos/a_ejemplo.html">Ejemplo típico</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/3_elementos/b_fraseo.html">Elementos de fraseo</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/3_elementos/c_encabezados.html">Títulos</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/3_elementos/d_p.html">El elemento
        <strong>p</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/3_elementos/e_cierran_p.html">Elementos que cierran
        <strong>p</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/3_elementos/f_a.html">El elemento
        <strong>a</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/3_elementos/g_nav.html">El elemento
        <strong>nav</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/3_elementos/h_footer.html">El elemento
        <strong>footer</strong></a>
      </p>
     </li>
    </ol>`;
 }
}

customElements.define("elementos-contenido", ElementosContenido);