import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";


export class B9Id extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Selector <strong>#</strong>identificador</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>Selecciona el valor del atributo id.</p>
    </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/9_selectores/src/9b_id.html" height="300"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/9_selectores/src/9b_id.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3E%0A%20%20Selector%20%23identificador%0A%20%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20%2F*%20Seleciona%20el%20elemento%20con%0A%20%20%20*%20%20id%3D%22neg%22%20*%2F%0A%20%20%23neg%20%7B%0A%20%20%20%2F*%20negritas%20*%2F%0A%20%20%20font-weight%3A%20bold%3B%0A%20%20%7D%0A%0A%20%20%2F*%20Seleciona%20el%20elemento%20de%20tipo%0A%20%20%20*%20%20p%0A%20%20%20*%20con%0A%20%20%20*%20%20id%3D%22otro%22%20*%2F%0A%20%20p%23otro%20%7B%0A%20%20%20%2F*%20may%C3%BAsculas%20*%2F%0A%20%20%20text-transform%3A%20uppercase%3B%0A%20%20%7D%0A%0A%20%20%2F*%20Seleciona%20el%20elemento%20de%20tipo%0A%20%20%20*%20%20h1%0A%20%20%20*%20con%0A%20%20%20*%20%20id%3D%22chas%22.%0A%20%20%20*%20No%20se%20aplica%20porque%20el%20%C3%BAnico%0A%20%20%20*%20elemento%20con%0A%20%20%20*%20%20%20id%3D%22chas%22%0A%20%20%20*%20es%20de%20tipo%0A%20%20%20*%20%20%20%20p%20*%2F%0A%20%20h1%23chas%20%7B%0A%20%20%20color%3A%20green%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3ESelector%20%23identificador%3C%2Fh1%3E%0A%20%3Cp%3EUno.%3C%2Fp%3E%0A%20%3Cp%20id%3D%22chas%22%3EDos.%3C%2Fp%3E%0A%20%3Cp%3ETres.%3C%2Fp%3E%0A%20%3Cp%20id%3D%22otro%22%3ECuatro.%3C%2Fp%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
   <div>&nbsp;&nbsp;Selector&nbsp;#identificador</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #008000;">/*&nbsp;Seleciona&nbsp;el&nbsp;elemento&nbsp;con</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;id="neg"&nbsp;*/</span>
   </div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">#neg</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #008000;">/*&nbsp;negritas&nbsp;*/</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">font-weight</span>:&nbsp;<span
      style="color: #0451a5;">bold</span>;</div>
   <div>&nbsp;&nbsp;}</div><br>
   <div>&nbsp;&nbsp;<span
      style="color: #008000;">/*&nbsp;Seleciona&nbsp;el&nbsp;elemento&nbsp;de&nbsp;tipo</span>
   </div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;p</span>
   </div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;con</span></div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;id="otro"&nbsp;*/</span>
   </div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">p#otro</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #008000;">/*&nbsp;mayúsculas&nbsp;*/</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">text-transform</span>:&nbsp;<span
      style="color: #0451a5;">uppercase</span>;</div>
   <div>&nbsp;&nbsp;}</div><br>
   <div>&nbsp;&nbsp;<span
      style="color: #008000;">/*&nbsp;Seleciona&nbsp;el&nbsp;elemento&nbsp;de&nbsp;tipo</span>
   </div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;h1</span>
   </div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;con</span></div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;id="chas".</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;No&nbsp;se&nbsp;aplica&nbsp;porque&nbsp;el&nbsp;único</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;elemento&nbsp;con</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;id="chas"</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;es&nbsp;de&nbsp;tipo</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;p&nbsp;*/</span>
   </div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">h1#chas</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
      style="color: #0451a5;">green</span>;</div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;h1&gt;</span>Selector&nbsp;#identificador<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>Uno.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;p</span>&nbsp;<span
      style="color: #ff0000;">id</span>=<span
      style="color: #0000ff;">"chas"</span><span
      style="color: #800000;">&gt;</span>Dos.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>Tres.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;p</span>&nbsp;<span
      style="color: #ff0000;">id</span>=<span
      style="color: #0000ff;">"otro"</span><span
      style="color: #800000;">&gt;</span>Cuatro.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
     </muestra-codigo>
  </div>`;
 }
}

customElements.define("b9-id", B9Id);