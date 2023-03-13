<?php
 
// $nombre_usuario = 'nombre';
// $empresa_usuario = 'empresa';
// $telefono_usuario = 'telefono';
// $correo_usuario = 'correo';

// $wpdb->query("INSERT INTO wp_clientes(nombre,empresa,telefono,correo) VALUES($nombre_usuario,$empresa_usuario,$telefono_usuario,$correo_usuario)");


  global $wpdb;

  $nombre_usuario = isset($_POST['nombre']) ? $_POST['nombre']: '';
  $empresa_usuario = isset($_POST['empresa']) ? $_POST['empresa']: '';
  $telefono_usuario = isset($_POST['telefono']) ? $_POST['telefono']: '';
  $correo_usuario = isset($_POST['correo']) ? $_POST['correo']: '';
 
  echo $nombre_usuario;
  echo $empresa_usuario;
  echo $telefono_usuario;
  echo $correo_usuario;


  $wpdb->insert('wp_clientes',array(
   'nombre' => $nombre_usuario,
   'empresa' => $empresa_usuario,
   'telefono' => $telefono_usuario,
   'correo' => $correo_usuario
  )); 


// add_action('init','insertar');





 



