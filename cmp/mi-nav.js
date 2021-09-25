/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */
import "../1_sgml/cmp/sgml-contenido.js";

class MiNav extends HTMLElement {
 connectedCallback() {
  this.innerHTML = /* html */
   `<nav>
   <h2>Contenido</h2>
    <ul>
     <li><p><a href="/index.html">Inicio</a></p></li>
     <li>
      <h3>Lecciones</h3>
      <ol>
       <li>
        <details>
         <summary>
          <h4><a href="/1_sgml/index.html">SGML</a></h4>
         </summary>
         <sgml-contenido></sgml-contenido>
        </details>
       </li>
    </ol>
    </li>
   </ul>
   </nav>`;
 }
}

customElements.define("mi-nav", MiNav);