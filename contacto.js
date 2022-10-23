//********************Header y Footer del aplicativo********************************/
var cabecera= `
<nav>
    <a class="nav" href="index.html">Inicio</a>
    <a class="nav" href="administracion.html">Administración de</a>
    <a class="nav" href="novedades.html">Novedades</a>
    <a class="nav" href="contacto.html">Contacto</a>
</nav>
<h2>Escuela Mamerto</h2> <!--Se usa una sola vez porque indica el título principal-->
`
document.getElementById("idHeader").innerHTML = cabecera;

var piePagina= `
<div>
    <a href="https://www.facebook.com" class="fa-brands fa-facebook" id="social" target="_blank"></a>
    <a href="https://www.youtube.com" class="fa-brands fa-youtube" id="social" target="_blank"></a>
    <a href="https://www.likedin.com" class="fa-brands fa-linkedin-in"id="social" target="_blank"></a>
    <a href="https://www.instagram.com" class="fa-brands fa-instagram" id="social" target="_blank"></a>
</div>
<p>Derechos reservados @2020</p>
`
document.getElementById("idFooter").innerHTML = piePagina;
