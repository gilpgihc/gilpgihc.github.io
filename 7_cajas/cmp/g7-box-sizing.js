import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G7BoxSizing extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. Propiedades para tamaños</h1>
   <div class="lectura">
   <dl>
    <dt><dfn><code class="language-css">width</code></dfn></dt>
    <dd>
     <p>
      Ancho de un elemento. Se indica usando un número decimal,
      opcionalmente fraccionario, seguido de la unidad.
     </p>
     <p>
      Solo aplica para para los elementos con
      <code class="language-css">display</code>
      <code class="language-css">block</code> o
      <code class="language-css">inline-block</code>.
     </p>
     <p>Ejemplo:</p>
     <p><code class="language-css">width: 100%</code></p>
    </dd>
    <dt><dfn><code class="language-css">height</code></dfn></dt>
    <dd>
     <p>
      Altura de un elemento. Se indica usando un número decimal,
      opcionalmente fraccionario, seguido de la unidad.
     </p>
     <p>
      Solo aplica para para los elementos con
      <code class="language-css">display</code>
      <code class="language-css">block</code> o
      <code class="language-css">inline-block</code>.
     </p>
     <p>Ejemplo:</p>
     <p><code class="language-css">height: 3em</code></p>
    </dd>
    <dt><dfn><code class="language-css">box-sizing</code></dfn></dt>
    <dd>
     <p>
      Indica como calcular el tamaño de un componente. Aplica para las
      propiedades
      <dfn><code class="language-css">width</code>
       y
       <code class="language-css">height</code>.
     </p>
     <p>Los valores que puede tomar esta propiedad son:</p>
     <dl>
      <dt><dfn><code class="language-css">content-box</code></dfn></dt>
      <dd>
       <p>
        El tamaño es solo el tamaño del contenido. Cuando en se
        especifica esta propiedad para un elemento, este es el valor
        que se utiliza (valor por omisión).
       </p>
      </dd>
      <dt><dfn><code class="language-css">border-box</code></dfn></dt>
      <dd>
       <p>
        El tamaño incluye el tamaño del contenido, más el espacio
        ocupado por los bordes y el relleno.
       </p>
      </dd>
     </dl>
    </dd>
   </dl>
   <h2>Ejemplo</h2>
  </div>
  <div class="horizontal">
  <div>
   <h3>Salida</h3>
   <iframe src="/7_cajas/src/7g_box-sizing.html" height="350"></iframe>
   <p class="noPrint">
    <a target="_blank" href="/7_cajas/src/7g_box-sizing.html">Ábrelo en otra
     pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%2C%0A%20%20%20%20%20%20%20initial-scale%3D1.0%22%3E%0A%20%3Ctitle%3Ebox-sizing%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20main%20%7B%0A%20%20%20width%3A%2050%25%3B%0A%20%20%20height%3A%2015rem%3B%0A%20%20%20background-color%3A%20orange%3B%0A%20%20%20padding-top%3A%201rem%3B%0A%20%20%20padding-bottom%3A%201rem%3B%0A%20%20%7D%0A%0A%20%20h1%20%7B%0A%20%20%20width%3A%20100%25%3B%0A%20%20%20background-color%3A%20lightgreen%3B%0A%20%20%20margin%3A%200%3B%0A%20%20%20font-size%3A%201rem%3B%0A%20%20%20padding%3A%201em%3B%0A%20%20%20border%3A%20thick%20solid%20green%3B%0A%20%20%7D%0A%0A%20%20nav%20%7B%0A%20%20%20box-sizing%3A%20content-box%3B%0A%20%20%20width%3A%20100%25%3B%0A%20%20%20background-color%3A%20pink%3B%0A%20%20%20padding%3A%201em%3B%0A%20%20%20border%3A%20thick%20solid%20red%3B%0A%20%20%7D%0A%0A%20%20p%20%7B%0A%20%20%20box-sizing%3A%20content-box%3B%0A%20%20%20width%3A%20100%25%3B%0A%20%20%20background-color%3A%20violet%3B%0A%20%20%20margin%3A%200%3B%0A%20%20%7D%0A%0A%20%20div%20%7B%0A%20%20%20box-sizing%3A%20border-box%3B%0A%20%20%20width%3A%20100%25%3B%0A%20%20%20background-color%3A%20lightblue%3B%0A%20%20%20padding%3A%201em%3B%0A%20%20%20border%3A%20thick%20solid%20blue%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Cmain%3E%0A%20%20%3Ch1%3Epor%20omisi%C3%B3n%3C%2Fh1%3E%0A%20%20%3Cnav%3Econtent-box%3C%2Fnav%3E%0A%20%20%3Cp%3Econtent-box%202%3C%2Fdiv%3E%0A%20%20%3Cdiv%3Eborder-box%3C%2Fdiv%3E%0A%20%3C%2Fmain%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
   <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>box-sizing<span
      style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">main</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">width</span>:&nbsp;<span
      style="color: #098658;">50%</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">height</span>:&nbsp;<span
      style="color: #098658;">15rem</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">orange</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">padding-top</span>:&nbsp;<span
      style="color: #098658;">1rem</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">padding-bottom</span>:&nbsp;<span
      style="color: #098658;">1rem</span>;</div>
   <div>&nbsp;&nbsp;}</div><br>
   <div>&nbsp;&nbsp;<span style="color: #800000;">h1</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">width</span>:&nbsp;<span
      style="color: #098658;">100%</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">lightgreen</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">margin</span>:&nbsp;<span
      style="color: #098658;">0</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">font-size</span>:&nbsp;<span
      style="color: #098658;">1rem</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">padding</span>:&nbsp;<span
      style="color: #098658;">1em</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">border</span>:&nbsp;<span
      style="color: #0451a5;">thick</span>&nbsp;<span
      style="color: #0451a5;">solid</span>&nbsp;<span
      style="color: #0451a5;">green</span>;</div>
   <div>&nbsp;&nbsp;}</div><br>
   <div>&nbsp;&nbsp;<span style="color: #800000;">nav</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">box-sizing</span>:&nbsp;<span
      style="color: #0451a5;">content-box</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">width</span>:&nbsp;<span
      style="color: #098658;">100%</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">pink</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">padding</span>:&nbsp;<span
      style="color: #098658;">1em</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">border</span>:&nbsp;<span
      style="color: #0451a5;">thick</span>&nbsp;<span
      style="color: #0451a5;">solid</span>&nbsp;<span
      style="color: #0451a5;">red</span>;</div>
   <div>&nbsp;&nbsp;}</div><br>
   <div>&nbsp;&nbsp;<span style="color: #800000;">p</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">box-sizing</span>:&nbsp;<span
      style="color: #0451a5;">content-box</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">width</span>:&nbsp;<span
      style="color: #098658;">100%</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">violet</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">margin</span>:&nbsp;<span
      style="color: #098658;">0</span>;</div>
   <div>&nbsp;&nbsp;}</div><br>
   <div>&nbsp;&nbsp;<span style="color: #800000;">div</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">box-sizing</span>:&nbsp;<span
      style="color: #0451a5;">border-box</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">width</span>:&nbsp;<span
      style="color: #098658;">100%</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">lightblue</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">padding</span>:&nbsp;<span
      style="color: #098658;">1em</span>;</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">border</span>:&nbsp;<span
      style="color: #0451a5;">thick</span>&nbsp;<span
      style="color: #0451a5;">solid</span>&nbsp;<span
      style="color: #0451a5;">blue</span>;</div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;main&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #800000;">&lt;h1&gt;</span>por&nbsp;omisión<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #800000;">&lt;nav&gt;</span>content-box<span
      style="color: #800000;">&lt;/nav&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #800000;">&lt;p&gt;</span>content-box&nbsp;2<span
      style="color: #800000;">&lt;/div&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #800000;">&lt;div&gt;</span>border-box<span
      style="color: #800000;">&lt;/div&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/main&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
    </muestra-codigo>
 </div>`;
 }
}

customElements.define("g7-box-sizing", G7BoxSizing);