import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D7Padding extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Relleno (padding)</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>Se puede especificar con las siguientes propiedades:</p>
      <dl>
      <dt><dfn><code class="language-css">padding-top</code></dfn></dt>
      <dd>
       <p>
        Solo especifica el tamaño del relleno en la parte superior de la
        caja.
       </p>
       <p>Ejemplo:</p>
       <p><code class="language-css">padding-top: 3vh</code></p>
      </dd>
      <dt><dfn><code class="language-css">padding-bottom</code></dfn></dt>
      <dd>
       <p>
        Solo especifica el tamaño del relleno en la parte inferior de la
        caja.
       </p>
       <p>Ejemplo:</p>
       <p><code class="language-css">padding-bottom: 50%</code></p>
      </dd>
      <dt><dfn><code class="language-css">padding-left</code></dfn></dt>
      <dd>
       <p>
        Solo especifica el tamaño del relleno en el lado izquierdo de la
        caja.
       </p>
       <p>Ejemplo:</p>
       <p><code class="language-css">padding-left: 8px</code></p>
      </dd>
      <dt><dfn><code class="language-css">padding-right</code></dfn></dt>
      <dd>
       <p>
        Solo especifica el tamaño del relleno en el lado derecho de la
        caja.
       </p>
       <p>Ejemplo:</p>
       <p><code class="language-css">padding-right: 3vw</code></p>
      </dd>
      <dt><dfn><code class="language-css">padding: tamaño</code></dfn></dt>
      <dd>
       <p>
        Especifica el mismo tamaño de relleno arriba, abajo, a la
        izquierda y a la derecha.
       </p>
       <p>Ejemplo:</p>
       <p><code class="language-css">padding: 1em</code><br>
        El relleno mide 1 renglón en todas las direcciones alrededor
        del elemento.
       </p>
      </dd>
      <dt><dfn><code
          class="language-css">padding: tam_vertical tam_horizontal</code></dfn>
      </dt>
      <dd>
       <p>
        <dfn>tam_vertical</dfn> es el tamaño de los rellenos
        superior e inferior.
       </p>
       <p>
        <dfn>tam_horizontal</dfn> es el tamaño de los rellenos
        izquierdo y derecho.
       </p>
       <p>Ejemplo:</p>
       <p><code class="language-css">padding: 1em 2em</code><br>
        El relleno mide 1 renglón arriba y abajo, 2 renglones a la
        izquierda y derecha.
       </p>
      </dd>
      <dt><dfn><code
          class="language-css">padding: tam_arr tam_der tam_ab tam_izq</code></dfn>
      </dt>
      <dd>
       <p><dfn>tam_arr</dfn> es el tamaño del relleno superior.</p>
       <p><dfn>tam_der</dfn> es el tamaño del relleno derecho.</p>
       <p><dfn>tam_ab</dfn> es el tamaño del relleno inferior.</p>
       <p><dfn>tam_izq</dfn> es el tamaño del relleno izquierdo.</p>
       <p>Ejemplo:</p>
       <p><code class="language-css">padding: 3em 2em 4em 1em</code><br>
        El relleno mide 3 renglones arriba, 2 a la derecha, 4 abajo
        y 1 a la izquierda.
       </p>
      </dd>
     </dl>
       </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
  <div class="horizontal">
  <div>
   <h3>Salida</h3>
   <iframe src="/7_cajas/src/7d_padding.html" height="330"></iframe>
   <p class="noPrint">
    <a target="_blank" href="/7_cajas/src/7d_padding.html">Ábrelo en otra
     pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3ERelleno%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20h1%20%7B%0A%20%20%20padding-top%3A%200.5rem%3B%0A%20%20%20padding-left%3A%201rem%3B%0A%20%20%20padding-bottom%3A%201.5rem%3B%0A%20%20%20padding-right%3A%202rem%3B%0A%20%20%20background-color%3A%20cyan%3B%0A%20%20%7D%0A%0A%20%20p%20%7B%0A%20%20%20padding%3A%200.5rem%202rem%3B%0A%20%20%20background-color%3A%20yellow%3B%0A%20%20%7D%0A%0A%20%20div%20%7B%0A%20%20%20padding%3A%201rem%3B%0A%20%20%20background-color%3A%20red%3B%0A%20%20%7D%0A%0A%20%20footer%20%7B%0A%20%20%20padding%3A%0A%20%20%20%200.5rem%201rem%203rem%202rem%3B%0A%20%20%20background-color%3A%0A%20%20%20%20yellowgreen%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3ERelleno%3C%2Fh1%3E%0A%20%3Cp%3EP%C3%A1rrafo%3C%2Fp%3E%0A%20%3Cdiv%3EDiv%3C%2Fdiv%3E%0A%20%3Cfooter%3EFooter%3C%2Ffooter%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
   <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>Relleno<span
      style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">h1</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">padding-top</span>:&nbsp;<span
      style="color: #098658;">0.5rem</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">padding-left</span>:&nbsp;<span
      style="color: #098658;">1rem</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">padding-bottom</span>:&nbsp;<span
      style="color: #098658;">1.5rem</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">padding-right</span>:&nbsp;<span
      style="color: #098658;">2rem</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">cyan</span>;</div>
   <div>&nbsp;&nbsp;}</div><br>
   <div>&nbsp;&nbsp;<span style="color: #800000;">p</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">padding</span>:&nbsp;<span
      style="color: #098658;">0.5rem</span>&nbsp;<span
      style="color: #098658;">2rem</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">yellow</span>;</div>
   <div>&nbsp;&nbsp;}</div><br>
   <div>&nbsp;&nbsp;<span style="color: #800000;">div</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">padding</span>:&nbsp;<span
      style="color: #098658;">1rem</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">red</span>;</div>
   <div>&nbsp;&nbsp;}</div><br>
   <div>&nbsp;&nbsp;<span style="color: #800000;">footer</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">padding</span>:</div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
      style="color: #098658;">0.5rem</span>&nbsp;<span
      style="color: #098658;">1rem</span>&nbsp;<span
      style="color: #098658;">3rem</span>&nbsp;<span
      style="color: #098658;">2rem</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
   </div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
      style="color: #0451a5;">yellowgreen</span>;</div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>Relleno<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>Párrafo<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;div&gt;</span>Div<span
      style="color: #800000;">&lt;/div&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;footer&gt;</span>Footer<span
      style="color: #800000;">&lt;/footer&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
    </muestra-codigo>
 </div>`;
 }
}

customElements.define("d7-padding", D7Padding);