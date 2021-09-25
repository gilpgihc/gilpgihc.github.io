import { Diapositiva } from "../../lib/Diapositiva.js";

export class SGMLContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/1_sgml/a_sgml.html">SGML</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_sgml/b_doctype.html">DOCTYPE</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_sgml/c_comentarios.html">Comentarios</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_sgml/d_texto.html">Texto</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_sgml/e_elementos.html">Elementos</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_sgml/f_atributos.html">Atributos</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_sgml/g_elementos_con_contenido.html">Elementos con contenido</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_sgml/h_elementos_sin_contenido.html">Elementos sin contenido</a>
      </p>
     </li>
    </ol>`;
 }
}

customElements.define("sgml-contenido", SGMLContenido);