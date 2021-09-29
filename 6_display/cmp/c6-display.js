import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";

export class C6display extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. La propiedad <strong>display</strong></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>Indica la forma en que un elemento se depliega.</p>
     </li>
     <li>
      <p>
       La definición oficial de esta propiedad está en proceso de cambio.
      </p>
     </li>
     <li>
      <p>El contenido de texto no tiene la propiedad display.</p>
     </li>
     <li>
      <p>
       Esta propiedad no afecta la semántica de los elementos, pero si
       puede cambiar como se despliegan.
     </p> 
    </li>
    <li>
     <p>
      En las diapositivas siguientes se explican algunos de los valores
      posibles.
     </p>
    </li>
   </ul>
  </div>`;
 }
}

customElements.define("c6-display", C6display);