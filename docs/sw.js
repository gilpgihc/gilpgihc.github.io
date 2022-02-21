/// <reference lib="webworker" />

/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */

const CACHE = "cache"

const VERSION = "4.2"

const ARCHIVOS = [
  "/favicon.ico",
   "/img/icono/160x30.png",
   "/img/icono/160x30.webp",
   "/img/icono/80x15.png",
   "/img/icono/icono1024.png",
   "/img/icono/icono2048.png",
   "/img/icono/icono256.png",
   "/img/icono/maskable_icon.png",
   "/img/icono/maskable_icon_x128.png",
   "/img/icono/maskable_icon_x192.png",
   "/img/icono/maskable_icon_x384.png",
   "/img/icono/maskable_icon_x48.png",
   "/img/icono/maskable_icon_x512.png",
   "/img/icono/maskable_icon_x72.png",
   "/img/icono/maskable_icon_x96.png",
   "/",
   "/index.html",
   "/js/muestra-codigo.js",
   "/m01sgml/",
   "/m01sgml/index.html",
   "/m01sgml/mAsgml.html",
   "/m01sgml/mBdoctype.html",
   "/m01sgml/mCcomentarios.html",
   "/m01sgml/mDtexto.html",
   "/m01sgml/mEelementos.html",
   "/m01sgml/mFatributos.html",
   "/m01sgml/mGelementosConContenido.html",
   "/m01sgml/mHElementosSinContenido.html",
   "/m01sgml/mIpadres.html",
   "/m01sgml/mJhijos.html",
   "/m01sgml/mKresumen.html",
   "/m01sgml/print.html",
   "/m02html/",
   "/m02html/index.html",
   "/m02html/mAejemplo.html",
   "/m02html/mBhtml.html",
   "/m02html/mChead.html",
   "/m02html/mDcodificacion.html",
   "/m02html/mEviewport.html",
   "/m02html/mFtitle.html",
   "/m02html/mGbody.html",
   "/m02html/mHreferencias.html",
   "/m02html/mIresumen.html",
   "/m02html/print.html",
   "/m03elementos/",
   "/m03elementos/index.html",
   "/m03elementos/mAejemplo.html",
   "/m03elementos/mBfraseo.html",
   "/m03elementos/mCencabezados.html",
   "/m03elementos/mDp.html",
   "/m03elementos/mEcierranP.html",
   "/m03elementos/mFa.html",
   "/m03elementos/mGnav.html",
   "/m03elementos/mHfooter.html",
   "/m03elementos/mIresumen.html",
   "/m03elementos/print.html",
   "/m04css/",
   "/m04css/index.html",
   "/m04css/mAejemplo.html",
   "/m04css/mBstyle.html",
   "/m04css/mCcomentarios.html",
   "/m04css/mDreglas.html",
   "/m04css/mEselTipo.html",
   "/m04css/mFpropiedades.html",
   "/m04css/mGcustom.html",
   "/m04css/mHresumen.html",
   "/m04css/print.html",
   "/m05propiedades/",
   "/m05propiedades/index.html",
   "/m05propiedades/mAfonts.html",
   "/m05propiedades/mBfontFamily.html",
   "/m05propiedades/mCcolores.html",
   "/m05propiedades/mDcolor.html",
   "/m05propiedades/mEbackgroundColor.html",
   "/m05propiedades/mFresumen.html",
   "/m05propiedades/print.html",
   "/m06display/",
   "/m06display/index.html",
   "/m06display/mAdiv.html",
   "/m06display/mBspan.html",
   "/m06display/mCdisplay.html",
   "/m06display/mDnone.html",
   "/m06display/mEinline.html",
   "/m06display/mFblock.html",
   "/m06display/mGinlineBlock.html",
   "/m06display/mHresumen.html",
   "/m06display/print.html",
   "/m07cajas/",
   "/m07cajas/index.html",
   "/m07cajas/mAlongitud.html",
   "/m07cajas/mBmodelo.html",
   "/m07cajas/mCmargin.html",
   "/m07cajas/mDpadding.html",
   "/m07cajas/mEborder.html",
   "/m07cajas/mFradio.html",
   "/m07cajas/mGbox-sizing.html",
   "/m07cajas/mHresumen.html",
   "/m07cajas/print.html",
   "/m08posicionamiento/",
   "/m08posicionamiento/index.html",
   "/m08posicionamiento/mApropiedades.html",
   "/m08posicionamiento/mBfixed.html",
   "/m08posicionamiento/mCrelative.html",
   "/m08posicionamiento/mDabsolute.html",
   "/m08posicionamiento/mEsticky.html",
   "/m08posicionamiento/mFresumen.html",
   "/m08posicionamiento/print.html",
   "/m09selectores/",
   "/m09selectores/index.html",
   "/m09selectores/mAtodos.html",
   "/m09selectores/mBid.html",
   "/m09selectores/mCclass.html",
   "/m09selectores/mDhijo.html",
   "/m09selectores/mEdescendiente.html",
   "/m09selectores/mFsiguiente.html",
   "/m09selectores/mGposterior.html",
   "/m09selectores/mHlista.html",
   "/m09selectores/mIactive.html",
   "/m09selectores/mJfocus.html",
   "/m09selectores/mKresumen.html",
   "/m09selectores/print.html",
   "/m10multimedia/",
   "/m10multimedia/index.html",
   "/m10multimedia/mAimagenes.html",
   "/m10multimedia/mBaudioVideo.html",
   "/m10multimedia/mCaudio.html",
   "/m10multimedia/mDvideo.html",
   "/m10multimedia/mEresumen.html",
   "/m10multimedia/print.html",
   "/m11formularios/",
   "/m11formularios/index.html",
   "/m11formularios/mAsimple.html",
   "/m11formularios/mBForm.html",
   "/m11formularios/mCatributos.html",
   "/m11formularios/mDlabel.html",
   "/m11formularios/mEbutton.html",
   "/m11formularios/mFinput.html",
   "/m11formularios/mGoutput.html",
   "/m11formularios/mHdivision.html",
   "/m11formularios/mI2botones.html",
   "/m11formularios/mJrecomendaciones.html",
   "/m11formularios/mKresumen.html",
   "/m11formularios/print.html",
   "/m12custom/",
   "/m12custom/index.html",
   "/m12custom/mAcustom.html",
   "/m12custom/mBaccion.html",
   "/m12custom/mCresumen.html",
   "/m12custom/print.html",
   "/print.html",
   "/site.webmanifest",
   "/src/m01sgml/Asgml.html",
   "/src/m01sgml/bDoctype.html",
   "/src/m01sgml/Ccomentarios.html",
   "/src/m01sgml/Dtexto.html",
   "/src/m01sgml/Eelementos.html",
   "/src/m01sgml/Fatributos.html",
   "/src/m01sgml/GelementoConContenido.html",
   "/src/m01sgml/HelementoSinContenido.html",
   "/src/m01sgml/Ipadres.html",
   "/src/m01sgml/Jhijos.html",
   "/src/m02html/Aejemplo.html",
   "/src/m02html/Bhtml.html",
   "/src/m02html/Chead.html",
   "/src/m02html/Dcodificacion.html",
   "/src/m02html/Eviewport.html",
   "/src/m02html/Ftitle.html",
   "/src/m02html/Gbody.html",
   "/src/m02html/Hreferencias.html",
   "/src/m03elementos/Aejemplo.html",
   "/src/m03elementos/Bencabezados.html",
   "/src/m03elementos/Cp.html",
   "/src/m03elementos/Da.html",
   "/src/m03elementos/Enav.html",
   "/src/m03elementos/Ffooter.html",
   "/src/m04css/Aejemplo.html",
   "/src/m04css/Bstyle.html",
   "/src/m04css/Ccomentarios.html",
   "/src/m04css/Dreglas.html",
   "/src/m04css/EselTipo.html",
   "/src/m04css/Fpropiedades.html",
   "/src/m04css/Gcustom.html",
   "/src/m05propiedades/Afont-family.html",
   "/src/m05propiedades/Bcolor.html",
   "/src/m05propiedades/Cbackground-color.html",
   "/src/m06display/Adiv.html",
   "/src/m06display/Bspan.html",
   "/src/m06display/Cnone.html",
   "/src/m06display/Dinline.html",
   "/src/m06display/Eblock.html",
   "/src/m06display/Finline-block.html",
   "/src/m07cajas/Amodelo.html",
   "/src/m07cajas/Bmargin.html",
   "/src/m07cajas/Cpadding.html",
   "/src/m07cajas/Dborde.html",
   "/src/m07cajas/Eradio.html",
   "/src/m07cajas/Fbox-sizing.html",
   "/src/m08posicionamiento/Afixed.html",
   "/src/m08posicionamiento/Brelative.html",
   "/src/m08posicionamiento/Cabsolute.html",
   "/src/m08posicionamiento/Dsticky.html",
   "/src/m09selectores/Atodos.html",
   "/src/m09selectores/Bid.html",
   "/src/m09selectores/Cclass.html",
   "/src/m09selectores/Dhijo.html",
   "/src/m09selectores/Edescendiente.html",
   "/src/m09selectores/Fsiguiente.html",
   "/src/m09selectores/Gposterior.html",
   "/src/m09selectores/Hlista.html",
   "/src/m09selectores/Iactive.html",
   "/src/m09selectores/Jfocus.html",
   "/src/m10multimedia/Aimagenes.html",
   "/src/m10multimedia/Baudio.html",
   "/src/m10multimedia/Cvideo.html",
   "/src/m11formularios/Aformulario.html",
   "/src/m11formularios/Bdivision.html",
   "/src/m11formularios/C2botones.html",
   "/src/m11formularios/Drecomendaciones.html",
   "/src/m11formularios/Eadivina.html",
   "/src/m11formularios/Fencuesta.html",
   "/src/m11formularios/Grecomienda.html",
   "/src/m12custom/Asimple.html",
   "/src/m12custom/Baccion.html" ]

if (self instanceof ServiceWorkerGlobalScope) {
 self.addEventListener("install", installListener)
 self.addEventListener("fetch", fetchListener)
 self.addEventListener("activate", () => console.log("Service Worker activo."))
}

/**
 * @param {ExtendableEvent} evt
 */
function installListener(evt) {
 console.log("Service Worker instalando.")
 evt.waitUntil(cargaCache());
}

/**
 * @param {FetchEvent} evt
 */
function fetchListener(evt) {
 if (evt.request.method === "GET") {
  evt.respondWith(usaCache(evt))
 }
}

async function cargaCache() {
 console.log("Intentando cargar cache:", CACHE)
 const keys = await caches.keys()
 for (const key of keys) {
  await caches.delete(key)
 }
 const cache = await caches.open(CACHE)
 await cache.addAll(ARCHIVOS)
 console.log("Cache cargado:", CACHE)
 console.log("Versión:", VERSION)
}

/**
 * @param {FetchEvent} evt
 */
async function usaCache(evt) {
 const cache = await caches.open(CACHE)
 const response = await cache.match(evt.request, { ignoreSearch: true })
 if (response) {
  return response
 } else {
  return fetch(evt.request)
 }
}