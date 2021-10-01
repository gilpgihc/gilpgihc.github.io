import { Diapositiva } from "../../lib/Diapositiva.js";

export class IntroduccionContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/2_introduccion/a_ejemplo.html">Ejemplo básico</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/2_introduccion/b_html.html">El elemento
        <strong>html</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/2_introduccion/c_head.html">El elemento
        <strong>head</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/2_introduccion/d_codificacion.html">Codificación de
        caracteres</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/2_introduccion/e_viewport.html">El metadato
        <strong>viewport</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/2_introduccion/f_title.html">El elemento
        <strong>title</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/2_introduccion/g_body.html">El elemento
        <strong>body</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/2_introduccion/h_referencias.html">Referencias a caracter</a>
      </p>
     </li>
    </ol>`;
 }
}

customElements.define("introduccion-contenido", IntroduccionContenido);