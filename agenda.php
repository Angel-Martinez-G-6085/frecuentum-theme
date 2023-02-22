<?php 
/**
     * Template Name: Agenda
     * Type: page
*/
?>


<?php get_header();?>

 <button id="mod1">modal</button>

    <div class="modal" id="modal">
        <div class="contenido-modal">
            <div class="centrar">
            <h1 class="texth1">!Bienvenido a FREQUENTUM CONSULTORÍA!</h1>
            <p class="textp">Estamos a unos click de ayudarte</p>
            <button id="mod2" class="texth6">!Vamos!</button>
            <img width="100px" src="perfil.png" alt="">
            </div>
        </div>
    </div>


    
    <div class="modal" id="modal2">
        <div class="contenido-modal2">
            <div class="centrar">
            <h2 class="texth1">Eres actualmente concesionario y/o autorizado para la presentación de servicios de telecomunicaciones y radiodifusión</h2>
            <div class="modbuttons">
                <button id="mod3">Si</button>
                <button id="mod5">No</button>
                <button>No estoy seguro</button>
            </div>
            </div>
        </div>
    </div>
<!-- si -->
    <div class="modal" id="modal3">
        <div class="contenido-modal3">
            <div class="centrar">
            <h2 class="texth1">Te gustaría recibir asesoria relacionada con algún trámite para...</h2>
            <div class="modbuttons">
                <button id="mod4">Si</button>
                <button>No</button>
                <button>No estoy seguro</button>
            </div>
            </div>
        </div>
    </div>

    <div class="modal" id="modal4">
        <div class="contenido-modal3">
            <div class="centrar">
            <h2 class="texth1">IFT Profeco, SEGOB, INE, Otros </h2>
            <div class="modbuttons">
                <button>Si</button>
                <button>No</button>
                <button>No estoy seguro</button>
            </div>
            </div>
        </div>
    </div>
<!-- ---------------------- -->
<!-- no -->
<div class="modal" id="modal5">
        <div class="contenido-modal3">
            <div class="centrar">
            <h2 class="texth1">Estas interesado en prestar servicios relacionados con..</h2>
            <div class="modbuttons">
                <button id="mod6">Si</button>
                <button>No</button>
                <button>No estoy seguro</button>
            </div>
            </div>
        </div>
    </div>
<!-- si -->
<div class="modal" id="modal6">
        <div class="contenido-modal3">
            <div class="centrar">
            <h2 class="texth1">Televisión, Radio, Internet, Telefonía</h2>
            <div class="modbuttons">
                <button id="mod7">Si</button>
                <button>No</button>
                <button>No estoy seguro</button>
            </div>
            </div>
        </div>
    </div>

<!-- formulario     -->
<div class="modal" id="modalForm">
<div class="contenido-form">
<form action="">
    <h2>!Cuentanos! ¿con quien aremos equipo hoy</h2>
    <label for="">Nombre</label>
    <input type="text">
    <label for="">Empresa</label>
    <input type="text">
    <label for="">Numero</label>
    <input type="text">
    
</form>
</div>
</div>
<?php get_footer();?>
