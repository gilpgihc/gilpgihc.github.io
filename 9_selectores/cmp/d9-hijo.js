import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D9Hijo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Selector <em>sel1</em> <strong>&gt;</strong> <em>sel2</em></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Seleciona los elementos que cumplan con el selector de la derecha y que
       sean hijos directos de los elementos que cumplan con el seletor de la
       izquierda.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
  <div class="horizontal">
  <div>
   <h3>Salida</h3>
   <iframe src="/9_selectores/src/9d_hijo.html" height="200"></iframe>
   <p class="noPrint">
    <a target="_blank" href="/9_selectores/src/9d_hijo.html">Ábrelo en otra
     pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3E%0A%20%20Posicionamiento%20absolute%0A%20%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20h1%20%7B%0A%20%20%20position%3A%20absolute%3B%0A%20%20%20bottom%3A%200%3B%0A%20%20%20height%3A%206rem%3B%0A%20%20%20left%3A%202rem%3B%0A%20%20%20right%3A%202rem%3B%0A%20%20%20background-color%3A%20yellow%3B%0A%20%20%7D%0A%0A%20%20p%20%7B%0A%20%20%20position%3A%20relative%3B%0A%20%20%20background-color%3A%20chartreuse%0A%20%20%7D%0A%0A%20%20footer%20%7B%0A%20%20%20position%3A%20fixed%3B%0A%20%20%20top%3A%200%3B%0A%20%20%20right%3A%200%3B%0A%20%20%20width%3A%2010rem%3B%0A%20%20%20background-color%3A%20yellow%3B%0A%20%20%7D%0A%0A%20%20span%20%7B%0A%20%20%20position%3A%20absolute%3B%0A%20%20%20top%3A%200%3B%0A%20%20%20left%3A%200%3B%0A%20%20%20background-color%3A%20cyan%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3E%0A%20%20Posicionamiento%0A%20%20%3Cspan%3Eabsolute%20(h1)%3C%2Fspan%3E%0A%20%3C%2Fh1%3E%0A%20Bla%2C%20bla%2C%20bla%0A%20%3Cp%3E%0A%20%20P%C3%A1rrafo%20relative%20con%0A%20%20%3Cspan%3Eabsolute%20(p)%3C%2Fspan%3E%0A%20%3C%2Fp%3E%0A%20%3Cdiv%3E%0A%20%20Este%20div%20contiene%0A%20%20%3Cspan%3Eabsolute%20(div)%3C%2Fspan%3E%0A%20%3C%2Fdiv%3E%0A%20%3Cfooter%3E%0A%20%20Este%20footer%20lleva%20otro%0A%20%20%3Cspan%3Eabsolute%20(footer)%3C%2Fspan%3E%0A%20%3C%2Ffooter%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
     Revísalo en gilpgedit.
    </a>
   </p>
  </div>
  <muestra-codigo>
  <div>
   <div><span style="color: #800000;">&lt;!DOCTYPE</span>&nbsp;<span
      style="color: #ff0000;">html</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #800000;">&lt;html</span>&nbsp;<span
      style="color: #ff0000;">lang</span>=<span
      style="color: #0000ff;">"es"</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #800000;">&lt;head&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;meta</span>&nbsp;<span
      style="color: #ff0000;">charset</span>=<span
      style="color: #0000ff;">"UTF-8"</span><span
      style="color: #800000;">&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;meta</span>&nbsp;<span
      style="color: #ff0000;">name</span>=<span
      style="color: #0000ff;">"viewport"</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">content</span>=<span
      style="color: #0000ff;">"width=device-width"</span><span
      style="color: #800000;">&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span></div>
   <div>&nbsp;&nbsp;Selector&nbsp;sel1&nbsp;<span
      style="color: #0000ff;">&amp;gt;</span>&nbsp;sel2</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #008000;">/*&nbsp;Selecciona&nbsp;todos&nbsp;los</span>
   </div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;em</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;que&nbsp;sean&nbsp;hijos&nbsp;directos&nbsp;de</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;p&nbsp;*/</span>
   </div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">p</span>&gt;<span
      style="color: #800000;">em</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">yellow</span>;</div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span></div>
   <div>&nbsp;&nbsp;Selector</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;em&gt;</span>sel1<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;strong&gt;</span><span
      style="color: #0000ff;">&amp;gt;</span><span
      style="color: #800000;">&lt;/strong&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;em&gt;</span>sel2<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;strong&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;Énfasis&nbsp;fuerte.</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/strong&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;em&gt;</span>Énfasis.<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;Más&nbsp;texto.</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;span&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #800000;">&lt;em&gt;</span>Otro&nbsp;énfasis.<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;strong&gt;</span>
   </div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;Otro&nbsp;énfasis&nbsp;fuerte.</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/strong&gt;</span>
   </div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;span&gt;</span>
   </div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
      style="color: #800000;">&lt;em&gt;</span>Hola.<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
      style="color: #800000;">&lt;strong&gt;</span>Adios.<span
      style="color: #800000;">&lt;/strong&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/span&gt;</span>
   </div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/span&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;footer&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #800000;">&lt;em&gt;</span>©&nbsp;2021<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;Gilberto&nbsp;Pacheco&nbsp;Gallegos.</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/footer&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
    </muestra-codigo>
 </div>`;
 }
}

customElements.define("d9-hijo", D9Hijo);