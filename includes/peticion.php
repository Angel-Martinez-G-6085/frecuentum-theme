<?php
$nombre_usuario = isset($_POST['nombre']) ? $_POST['nombre']: '';
$empresa_usuario = isset($_POST['empresa']) ? $_POST['empresa']: '';
$numero_usuario = isset($_POST['contacto']) ? $_POST['contacto']: '';
$correo_usuario = isset($_POST['correo']) ? $_POST['correo']: '';

$wpdb->insert('wp_clientes',array(
  'nombre' => $nombre_usuario,
  'empresa' => $empresa_usuario,
  'telefono' => $numero_usuario,
  'correo' => $correo_usuario
)); 
