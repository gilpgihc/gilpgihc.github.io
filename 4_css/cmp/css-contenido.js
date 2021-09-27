import { Diapositiva } from "../../lib/Diapositiva.js";

export class CSSContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/4_css/a_css.html">CSS</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/4_css/b_style.html">El elemento <strong>style</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/4_css/c_comentarios.html">Comentarios</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/4_css/d_reglas.html">Reglas de estilo</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/4_css/e_sel_tipo.html">Selector de estilo</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/4_css/f_propiedades.html">Propiedades</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/4_css/g_custom.html">Propiedades personalizadas</a>
      </p>
     </li>
    </ol>`;
 }
}

customElements.define("css-contenido", CSSContenido);