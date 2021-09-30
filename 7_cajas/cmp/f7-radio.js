import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F7Radio extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Esquinas redondas (border-radius)</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Las esquinas de la caja pueden ser redondas aunque no lleven borde.
      </p>
      <dl>
      <dt><dfn><code class="language-css">border-top-right-radius</code></dfn>
      </dt>
      <dd>
       <p>Tamaño del radio de la esquina superior derecha de la caja.</p>
      </dd>
      <dt><dfn><code class="language-css">border-top-left-radius</code></dfn>
      </dt>
      <dd>
       <p>Tamaño del radio de la esquina superior izquierda de la caja.</p>
      </dd>
      <dt><dfn><code
          class="language-css">border-bottom-right-radius</code></dfn></dt>
      <dd>
       <p>Tamaño del radio de la esquina inferior derecha de la caja.</p>
      </dd>
      <dt><dfn><code
          class="language-css">border-bottom-left-radius</code></dfn></dt>
      <dd>
       <p>Tamaño del radio de la esquina inferior izquierda de la caja.</p>
      </dd>
      <dt><dfn><code class="language-css">border-radius: tam</code></dfn></dt>
      <dd>
       <p>
        <dfn>tam</dfn> es el tamaño del radio de las 4 esquinas de la
        caja.
       </p>
      </dd>
      <dt><dfn><code
          class="language-css">border-radius: tam_arrizq_abder tam_arrder_abizq</code></dfn>
      </dt>
      <dd>
       <p>
        <dfn>tam_arrizq_abder</dfn> es el tamaño del radio de las
        esquinas superior izquierda e inferior derecha de la caja.
       </p>
       <p>
        <dfn>tam_arrder_abizq</dfn> es el tamaño del radio de las
        esquinas superior derecha e inferior izquierda de la caja.
       </p>
      </dd>
      <dt><dfn><code
          class="language-css">border-radius: tam_arrizq tam_arrder_abizq tam_abder</code></dfn>
      </dt>
      <dd>
       <p>
        <dfn>tam_arrizq</dfn> es el tamaño del radio de la esquina
        superior izquierda de la caja.
       </p>
       <p>
        <dfn>tam_arrder_abizq</dfn> es el tamaño del radio de las
        esquinas superior derecha e inferior izquierda de la caja.
       </p>
       <p>
        <dfn>tam_abder</dfn> es el tamaño del radio de las
        esquinas inferior derecha de la caja.
       </p>
      </dd>
      <dt><dfn><code
          class="language-css">border-radius: tam_arrizq tam_arrder tam_abder tam_abizq</code></dfn>
      </dt>
      <dd>
       <p>
        <dfn>tam_arrizq</dfn> es el tamaño del radio de la esquina
        superior izquierda de la caja.
       </p>
       <p>
        <dfn>tam_arr</dfn> es el tamaño del radio de las
        esquinas superior derecha de la caja.
       </p>
       <p>
        <dfn>tam_abder</dfn> es el tamaño del radio de las
        esquinas inferior derecha de la caja.
       </p>
       <p>
        <dfn>tam_abizq</dfn> es el tamaño del radio de la esquina
        inferior izquierda de la caja.
       </p>
      </dd>
     </dl>
       </li>
    </ul>
   </div>
   <h2>Ejemplo</h2>
  </div>
  <div class="horizontal">
  <div>
   <h3>Salida</h3>
   <iframe src="/7_cajas/src/7f_radio.html" height="200"></iframe>
   <p class="noPrint">
    <a target="_blank" href="/7_cajas/src/7f_radio.html">Ábrelo en otra
     pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%2C%0A%20%20%20%20%20%20%20initial-scale%3D1.0%22%3E%0A%20%3Ctitle%3Eborder-radius%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20body%20%7B%0A%20%20%20color%3Ayellow%0A%20%20%7D%0A%0A%20%20h1%20%7B%0A%20%20%20background-color%3A%20blue%3B%0A%20%20%20border-top-right-radius%3A%2010px%3B%0A%20%20%20border-top-left-radius%3A%205px%3B%0A%20%20%20border-bottom-right-radius%3A%0A%20%20%20%2020px%3B%0A%20%20%20border-bottom-left-radius%3A%0A%20%20%20%202rem%0A%20%20%7D%0A%0A%20%20div%20%7B%0A%20%20%20background-color%3A%20royalblue%3B%0A%20%20%20padding%3A%200.5rem%201rem%3B%0A%20%20%20border-radius%3A%2030px%0A%20%20%7D%0A%0A%20%20p%20%7B%0A%20%20%20background-color%3A%20blueviolet%3B%0A%20%20%20padding%3A%200.5rem%201.5rem%3B%0A%20%20%20border-radius%3A%0A%20%20%20%2010px%2020px%2030px%2040px%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3Eborder-radius%3C%2Fh1%3E%0A%20%3Cdiv%3EEsquinas%3C%2Fdiv%3E%0A%20%3Cp%3ERedondas%3C%2Fp%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
      style="color: #0000ff;">"width=device-width,</span></div>
   <div><span
      style="color: #0000ff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initial-scale=1.0"</span><span
      style="color: #800000;">&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;title&gt;</span>border-radius<span
      style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">body</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:<span
      style="color: #0451a5;">yellow</span></div>
   <div>&nbsp;&nbsp;}</div><br>
   <div>&nbsp;&nbsp;<span style="color: #800000;">h1</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">blue</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">border-top-right-radius</span>:&nbsp;<span
      style="color: #098658;">10px</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">border-top-left-radius</span>:&nbsp;<span
      style="color: #098658;">5px</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">border-bottom-right-radius</span>:</div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #098658;">20px</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">border-bottom-left-radius</span>:</div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #098658;">2rem</span></div>
   <div>&nbsp;&nbsp;}</div><br>
   <div>&nbsp;&nbsp;<span style="color: #800000;">div</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">royalblue</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">padding</span>:&nbsp;<span
      style="color: #098658;">0.5rem</span>&nbsp;<span
      style="color: #098658;">1rem</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">border-radius</span>:&nbsp;<span
      style="color: #098658;">30px</span></div>
   <div>&nbsp;&nbsp;}</div><br>
   <div>&nbsp;&nbsp;<span style="color: #800000;">p</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">blueviolet</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">padding</span>:&nbsp;<span
      style="color: #098658;">0.5rem</span>&nbsp;<span
      style="color: #098658;">1.5rem</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">border-radius</span>:
   </div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
      style="color: #098658;">10px</span>&nbsp;<span
      style="color: #098658;">20px</span>&nbsp;<span
      style="color: #098658;">30px</span>&nbsp;<span
      style="color: #098658;">40px</span>;</div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>border-radius<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;div&gt;</span>Esquinas<span
      style="color: #800000;">&lt;/div&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>Redondas<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
    </muestra-codigo>
 </div>`;
 }
}

customElements.define("f7-radio", F7Radio);