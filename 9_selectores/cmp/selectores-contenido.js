import { Diapositiva } from "../../lib/Diapositiva.js";

export class SelectoresContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li>
     <p><a href="/9_selectores/a_todos.html">Selector <strong>*</strong></a></p>
    </li>
    <li>
     <p>
      <a href="/9_selectores/b_id.html">Selector <strong>#</strong>identificador</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/9_selectores/c_class.html">Selector <strong>.</strong>clase</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/9_selectores/d_hijo.html">Selector <em>sel1</em> <strong>&gt;</strong> <em>sel2</em></a>
     </p>
    </li>
    <li>
     <p>
      <a href="/9_selectores/e_descendiente.html">Selector con descendientes <em>sel1</em> <em>sel2</em></a>
     </p>
    </li>
    <li>
     <p>
      <a href="/9_selectores/f_siguiente.html">Selector <em>sel1</em> <strong>+</strong> <em>sel2</em></a>
     </p>
    </li>
    <li>
     <p>
      <a href="/9_selectores/g_posterior.html">Selector <em>sel1</em> <strong>~</strong> <em>sel2</em></a>
     </p>
    </li>
    <li>
     <p>
      <a href="/9_selectores/h_lista.html">Lista de selectores <em>sel1</em> <strong>,</strong> <em>sel2</em></a>
     </p>
    </li>
    <li>
     <p>
      <a href="/9_selectores/i_active.html">Pseudoclase <strong>:active</strong></a>
     </p>
    </li>
    <li>
     <p>
      <a href="/9_selectores/j_focus.html">Pseudoclase <strong>:focus</strong></a>
     </p>
    </li>
   </ol>`;
 }
}

customElements.define("selectores-contenido", SelectoresContenido);