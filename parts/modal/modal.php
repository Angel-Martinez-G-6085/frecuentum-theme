<div class="modal-container">
    <div class="content-modal-inicio">
        <span class="w3-closebtn closed-1">&times;</span>    
        <h4 class="modal-pregunta-inicio">¡Bienvenido a FREQUENCYLEX CONSULTORÍA!</h4>
        <h6 class="modal-sub-pregunta">Estamos a unos clicks de ayudarte</h6>
        <h5 class="modal-subtitle-pregunta">¡Vamos!</h5>
        <div class="img-content">
            <img  class="person mod2" src="<?php echo(ICON. 'personaje.svg')?>" alt="opcion-image">
        </div>
    </div>
</div>

<div class="modal-container modal-2">
    <div class="content-modal">
        <span class="btn-regreso left-mod-2">🡰</span>
        <span class="w3-closebtn closed-2">&times;</span>
        <img class="persona" src="<?php echo(ICON . 'personas-blanco.svg')?>" alt="personas-blanco">
        <h4 class="modal-pregunta">¿Eres actualmente concesionario y/o autorizado para la prestación de servicios de telecomunicaciones y/o radiofusión?</h4>
        <div class="modal-links-container">
            <a  href="#" class="modal-link-2 mod3">Si</a>
            <a  href="#" class="modal-link-2 modNo">No</a>
            <a href="#" class="modal-link-2 left2 mod4">Hablar con un consultor ahora</a>
        </div>
    </div>
</div>

<!-- No -->
<div class="modal-container modalNo">
    <div class="content-modal">
        <span class="btn-regreso left-mod-no">🡰</span>
        <span class="w3-closebtn closed-no">&times;</span>
        <img class="persona" src="<?php echo(ICON . 'personas-blanco.svg')?>" alt="personas-blanco">
        <h4 class="modal-pregunta">¿Estás interesado en prestar servicios relacionados con...?</h4>
        <div class="modal-links-container-icons">
            <div class="modal-link-img">
                <a href="#" class="img-modal-tv mod4 leftno"><img class="tele"  src="<?php echo(ICON. 'tele-verde.svg')?>" alt="opcion-image">Televisión</a>
            </div>
            <div class="modal-link-img">
                <a href="#" class="img-modal-radio mod4 leftno"><img class="radio" src="<?php echo(ICON. 'radio-verde.svg')?>" alt="opcion-image">Radio</a>
            </div>
            <div class="modal-link-img">
                <a href="#" class="img-modal-intert mod4 leftno"><img class="inter" src="<?php echo(ICON. 'busqueda-verde.svg')?>" alt="opcion-image">Internet</a>
            </div>
            <div class="modal-link-img">
                <a href="#" class="img-modal-fon mod4 leftno"><img class="fon" src="<?php echo(ICON. 'telefonoVerde.svg')?>" alt="opcion-image">Telefonía</a>
            </div>
            <div class="modal-link-img link-no">
                <a href="#" class="modal-link-no mod4 leftno">No estoy seguro</a>
            </div>
        </div>
    </div>
</div>

<!-- --si -->
<div class="modal-container modal-3">
    <div class="content-modal-3">
        <span class="btn-regreso left-mod-3">🡰</span>
        <span class="w3-closebtn closed-3">&times;</span>
        <img class="persona-mod-3" src="<?php echo(ICON . 'personas-blanco.svg')?>" alt="personas-blanco">
        <h4 class="modal-pregunta-3">¿Te gustaria recibir asesoría relacionada con algún trámite para...?</h4>
        <div  class="modal-links-container-modal3">
            <div class="modal-link-padre">
                <a href="#" class="modal-link-ine mod4 ine left3"><img src="<?php echo(ICON. 'INE-blanco.svg')?>" alt="opcion-image"></a>
            </div>
            <div class="modal-link-padre">
                <a href="#" class="modal-link-segob mod4 segob left3"><img src="<?php echo(ICON. 'segob-blanco.svg')?>" alt="opcion-image"></a>
            </div>
            <div class="modal-link-padre">
                <a href="#" class="modal-link-profeco mod4 profeco left3"><img src="<?php echo(ICON. 'profeco-blanco.svg')?>" alt="opcion-image"></a>
            </div>
            <div class="modal-link-padre">
                <a href="#" class="modal-link-ift mod4 ift left3"><img src="<?php echo(ICON. 'ift-blanco.svg')?>" alt="opcion-image"></a>
            </div>
            <div class="modal-link-padre">
                <a href="#" class="modal-link-3 mod4 left3">OTRO</a>
            </div>
        </div>
    </div>
</div>

<!-- --INE, SEGOG ETC. -->
<div class="modal-container modal-4">
    <div class="content-modal">
        <span class="btn-regreso left-mod-4">🡰</span>
        <span class="w3-closebtn closed-4">&times;</span>
        <img class="persona" src="<?php echo(ICON . 'personas-blanco.svg')?>" alt="personas-blanco">
        <h4 class="modal-pregunta">¡Cuéntanos!¿Con quien haremos equipo hoy?</h4>
    <div class="modal-links-container-inputs">
        <div class="input-link-content">
            <input id="nombre" name="nombre" class="input-link nombre-input" type="text" placeholder="Nombre..." required>
        </div>
        <div class="input-link-content">
            <p class="formulario-input-error">Es importante llenar estos datos para brindarte nuestros servicios</p>
        </div>
    </div>
    </div>
</div>

<!-- --Nombre - empresa -->
<div class="modal-container modal-5">
    <div class="content-modal">
        <span class="btn-regreso left-mod-5">🡰</span>
        <span class="w3-closebtn closed-5">&times;</span>
        <img class="persona" src="<?php echo(ICON . 'personas-blanco.svg')?>" alt="personas-blanco">
        <h4 class="modal-pregunta">¿Cual es el nombre del proyecto/empresa en el que trabajas?</h4>
        <div class="modal-links-container-inputs">
            <div class="input-link-content">
                <input id="empresa" name="empresa" class="input-link empresa-input"  type="text" placeholder="Empresa...">
            </div>
            <div class="input-link-content">
                <p class="formulario-input-error-empresa">Es importante llenar estos datos para brindarte nuestros servicios</p>
            </div>
        </div>
    </div>
</div>

<!-- --Nummero - empresa -->
<div class="modal-container modal-6">
    <div class="content-modal">
        <span class="btn-regreso left-mod-6">🡰</span>
        <span class="w3-closebtn closed-6">&times;</span>
        <img class="persona" src="<?php echo(ICON . 'personas-blanco.svg')?>" alt="personas-blanco">
        <h4 class="modal-pregunta">¿Dónde podemos contáctarte?</h4>
        <div class="modal-links-container-inputs">
            <div class="input-link-content">
                <input id="contacto" name="contacto" class="input-link num-input" type="text" placeholder="+52...">
            </div>
            <div class="input-link-content">
                <p class="formulario-input-error-numero">Introduce tu número a 10 digitos(Nuestros sercicios son solo para México)</p>
            </div>
        </div>
    </div>
</div>

<!-- --Correo -->
<div class="modal-container modal-7">
    <div class="content-modal">
    <span class="btn-regreso left-mod-7">🡰</span>
    <span class="w3-closebtn closed-7">&times;</span>
    <img class="persona" src="<?php echo(ICON . 'personas-blanco.svg')?>" alt="personas-blanco">
    <h4 class="modal-pregunta">¿Cuál es tu correo electrónico?</h4>
        <div class="modal-links-container-inputs">
            <div class="input-link-content">
                <input id="correo" name="correo" class="input-link correo-input" type="email" placeholder="Correo@gmail.com">
            </div>
            <div class="input-link-content">
                <p class="formulario-input-error-correo">Introduce tu correo eléctronico correctamente</p>
            </div>
        </div>
    </div>
</div>

<!-- --Agendar llamada -->
<div class="modal-container modal-8">
    <div class="content-modal">
        <span class="btn-regreso left-mod-8">🡰</span>
        <span class="w3-closebtn closed-8">&times;</span>
        <img class="persona" src="<?php echo(ICON . 'personas-blanco.svg')?>" alt="personas-blanco">
        <h4 class="modal-pregunta">¿Te gustaría hablar con un consultor ahora?</h4>
        <div class="modal-links-agendar">
            <div class="modal-agendar">
                <a target="_blank" href="https://wa.me/5215540370369" class="modal-link">Ir a Whatsapp</a>
            </div>
            <div class="modal-agendar">
                <a href="#"  class="modal-link event-calendar">Agenda una llamada</a>
            </div>
            <div class="modal-agendar">
                <a href="#"  class="enviar">Agenda una llamada</a>
            </div>
        </div>
    </div>
</div>


<!-- --Enviar evento del calendario -->
<div class="modal-container modal-envent-calendar">
    <div class="content-modal">
        <span class="btn-regreso left-mod-calendar">🡰</span>
        <span class="w3-closebtn closed-event">&times;</span>
        <p  class="event-pregunta">Regístrate en el calendario</p>
        <form action="" method="POST">

            <div class="modal-links-event">
                <div class="form-input">
                    <label for="inputName" class="col-form-label">Fecha</label>
                    <input type="date" class="form-control" id="fech1" required />
                </div>
                <div class="form-input">
                    <label for="inputName" class="col-form-label">Hora inicio</label>
                    <input type="time" class="form-control" id="hinicio" required />
                </div>
                <div class="form-input">
                    <label for="inputName" class="col-form-label">Hora fin</label>
                    <input type="time" class="form-control" id="hfin" required />
                </div>
                <br>
                <div class="form-input">
                    <button type="submit"  onclick="enviarDatos()" class="mod-fin  btn-enviar">Enviar</button>
                </div>
            </div>
        </form>
    </div>
</div>
<!-- --Modal final-->
<div class="modal-container modal-final">
    <div class="content-modal-inicio">
        <span class="w3-closebtn closed-fin">&times;</span>    
        <h4 class="modal-pregunta-final">¡Pronto nos pondremos en contacto contigo!</h4>
        <h6 class="modal-sub-pregunta-fin">¿Quieres hablar con un asesor ahora?</h6>
        <div class="img-content-final">
            <img  class="person-fin mod2" src="<?php echo(IMG. 'MascotaCentada.webp')?>" alt="opcion-image">
        </div>
    </div>
</div>
