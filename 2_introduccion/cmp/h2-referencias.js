import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class H2Referencias extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>H. Referencias a caracter</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Se usan para representar caracteres que son complicados de incluir en
       el texto, o para evitar que sean interpretados como parte del lenguaje de
       marcas.
      </p>
     </li>
     <li>
      <p>
       Inician con
       <code class="language-html">&amp;</code>
       y terminan con
       <code class="language-html">;</code>
      </p>
     </li>
     <li>
      <p>
       Su especificación está en
       <a href="https://html.spec.whatwg.org/multipage/syntax.html#character-references"
         target="_blank">https://html.spec.whatwg.org/multipage/syntax.html#character-references</a>
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/2_introduccion/src/2h_referencias.html" height=50></iframe>
    <p class="noPrint">
     <a target="_blank" href="/2_introduccion/src/2h_referencias.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3E%0A%20%20Selector%20sel1%20%26gt%3B%20sel2%0A%20%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20%2F*%20Selecciona%20todos%20los%0A%20%20%20*%20%20em%0A%20%20%20*%20que%20sean%20hijos%20directos%20de%0A%20%20%20*%20%20p%20*%2F%0A%20%20p%3Eem%20%7B%0A%20%20%20background-color%3A%20yellow%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3E%0A%20%20Selector%0A%20%20%3Cem%3Esel1%3C%2Fem%3E%0A%20%20%3Cstrong%3E%26gt%3B%3C%2Fstrong%3E%0A%20%20%3Cem%3Esel2%3C%2Fem%3E%0A%20%3C%2Fh1%3E%0A%20%3Cp%3E%0A%20%20%3Cstrong%3E%0A%20%20%20%C3%89nfasis%20fuerte.%0A%20%20%3C%2Fstrong%3E%0A%20%20%3Cem%3E%C3%89nfasis.%3C%2Fem%3E%0A%20%20M%C3%A1s%20texto.%0A%20%20%3Cspan%3E%0A%20%20%20%3Cem%3EOtro%20%C3%A9nfasis.%3C%2Fem%3E%0A%20%20%20%3Cstrong%3E%0A%20%20%20%20Otro%20%C3%A9nfasis%20fuerte.%0A%20%20%20%3C%2Fstrong%3E%0A%20%20%20%3Cspan%3E%0A%20%20%20%20%3Cem%3EHola.%3C%2Fem%3E%0A%20%20%20%20%3Cstrong%3EAdios.%3C%2Fstrong%3E%0A%20%20%20%3C%2Fspan%3E%0A%20%20%3C%2Fspan%3E%0A%20%3C%2Fp%3E%0A%20%3Cfooter%3E%0A%20%20%3Cp%3E%0A%20%20%20%3Cem%3E%C2%A9%202021%3C%2Fem%3E%0A%20%20%20Gilberto%20Pacheco%20Gallegos.%0A%20%20%3C%2Fp%3E%0A%20%3C%2Ffooter%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span style="color: #0000ff;">&amp;copy;</span>&nbsp;<span
      style="color: #0000ff;">&amp;lt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
  </div>
     </muestra-codigo>
  </div>`;
 }
}

customElements.define("h2-referencias", H2Referencias);