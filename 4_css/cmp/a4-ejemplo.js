import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A4Ejemplo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. CSS</h1>
   <div class="lectura">
    <p>
     Este es un ejemplo típico de un archivo HTML.
    </p>
   <h2>Ejemplo</h2>
  </div>
  <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/3_elementos/src/3a_ejemplo.html" height="330"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/3_elementos/src/3a_ejemplo.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3E%F0%9F%8F%A1Estructura%3C%2Ftitle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3C!--%20T%C3%ADtulo%20en%20el%20contenido%20--%3E%0A%20%3Ch1%3E%F0%9F%8F%A1Estructura%3C%2Fh1%3E%0A%20%3C!--%20Navegaci%C3%B3n%20--%3E%0A%20%3Cnav%3E%0A%20%20%3C!--%20T%C3%ADtulo%20de%20secci%C3%B3n%20--%3E%0A%20%20%3Ch2%3EEnlaces%3C%2Fh2%3E%0A%20%20%3C!--%20P%C3%A1rrafo%20--%3E%0A%20%20%3Cp%3E%0A%20%20%20%3C!--%20hiperv%C3%ADnculo%20--%3E%0A%20%20%20%3Ca%20href%3D%22%20https%3A%2F%2Fgoogle.com%20%22%0A%20%20%20%20%20target%3D%22_blank%22%3EGoogle%3C%2Fa%3E%0A%20%20%3C%2Fp%3E%0A%20%3C%2Fnav%3E%0A%20%3C!--%20P%C3%A1rrafos%20--%3E%0A%20%3Cp%3E%F0%9F%8C%8EHola%20Mundo.%3C%2Fp%3E%0A%20%3Cp%3E%F0%9F%A7%BBM%C3%A1s%20texto.%3C%2Fp%3E%0A%20%3C!--%20Pie%20de%20pagina%20--%3E%0A%20%3Cfooter%3E%0A%20%20%C2%A9%202021%20Gilberto%20Pacheco%20Gallegos%0A%20%3C%2Ffooter%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
   <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>🏡Estructura<span
      style="color: #800000;">&lt;/title&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;Título&nbsp;en&nbsp;el&nbsp;contenido&nbsp;--&gt;</span>
   </div>
   <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>🏡Estructura<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;Navegación&nbsp;--&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;nav&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;Título&nbsp;de&nbsp;sección&nbsp;--&gt;</span>
   </div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;h2&gt;</span>Enlaces<span
      style="color: #800000;">&lt;/h2&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;Párrafo&nbsp;--&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;hipervínculo&nbsp;--&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;a</span>&nbsp;<span
      style="color: #ff0000;">href</span>=<span
      style="color: #0000ff;">"&nbsp;https://google.com&nbsp;"</span></div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">target</span>=<span
      style="color: #0000ff;">"_blank"</span><span
      style="color: #800000;">&gt;</span>Google<span
      style="color: #800000;">&lt;/a&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/nav&gt;</span></div>
   <div>&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;Párrafos&nbsp;--&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;p&gt;</span>🌎Hola&nbsp;Mundo.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;p&gt;</span>🧻Más&nbsp;texto.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;Pie&nbsp;de&nbsp;pagina&nbsp;--&gt;</span>
   </div>
   <div>&nbsp;<span style="color: #800000;">&lt;footer&gt;</span></div>
   <div>&nbsp;&nbsp;©&nbsp;2021&nbsp;Gilberto&nbsp;Pacheco&nbsp;Gallegos</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/footer&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
    </muestra-codigo>
  </div>`;
 }
}

customElements.define("a4-ejemplo", A4Ejemplo);