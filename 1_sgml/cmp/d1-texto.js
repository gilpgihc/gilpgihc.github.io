import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D1Texto extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Texto</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       El contenido y otras partes de la página se representan con texto.
      </p>
     </li>
     <li>
      <p>La forma de mostrar el texto se puede cambiar usando marcas.</p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/1_sgml/src/1d_texto.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/1_sgml/src/1d_texto.html">Ábrelo en otra pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%E2%9D%A4Este%20texto%20es%20el%20contenido%20%F0%9F%93%96%20de%0Ala%20p%C3%A1gina!!!!">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;!DOCTYPE</span>&nbsp;<span
      style="color: #ff0000;">html</span><span
      style="color: #800000;">&gt;</span></div>
   <div>❤Este&nbsp;texto&nbsp;es&nbsp;el&nbsp;contenido&nbsp;📖&nbsp;de</div>
   <div>la&nbsp;página!!!!</div>
  </div>
    </muestra-codigo>
  </div>`;
 }
}

customElements.define("d1-texto", D1Texto);