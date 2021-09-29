import { Diapositiva } from "../../lib/Diapositiva.js";

export class DisplayContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/6_display/a_div.html">El elemento
        <strong>div</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/6_display/b_span.html">El elemento
        <strong>span</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/6_display/c_display.html">La propiedad
        <strong>display</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/6_display/d_none.html">El valor
        <strong>none</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/6_display/e_inline.html">El valor
        <strong>inline</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/6_display/f_block.html">El valor
        <strong>block</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/6_display/g_inline-block.html">El valor
        <strong>inline-block</strong></a>
      </p>
     </li>
    </ol>`;
 }
}

customElements.define("display-contenido", DisplayContenido);