<?php

function create_client_table() {
    global $wpdb;
    $table_name = $wpdb->prefix . "clientes";
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE IF NOT EXISTS $table_name (
        id bigint(20) NOT NULL AUTO_INCREMENT,
        nombre varchar(30) NOT NULL DEFAULT '',
        empresa varchar(30) NOT NULL DEFAULT '',
        telefono varchar(30) NOT NULL DEFAULT '',
        correo varchar(30) NOT NULL DEFAULT '',
        PRIMARY KEY id (id)
      ) $charset_collate;";
      require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
      dbDelta($sql);
}




add_action('init', 'create_client_table');

