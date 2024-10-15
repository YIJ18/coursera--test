document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener valores de los campos
    const id_usuario = document.getElementById('id_usuario').value;
    const usuario = document.getElementById('usuario').value;
    const cve_empleado = document.getElementById('cve_empleado').value;
    const nombre_usuario = document.getElementById('nombre_usuario').value;
    const correo = document.getElementById('correo').value;
    const habilitado = document.getElementById('habilitado').value;
    const dominio = document.getElementById('dominio').value;
    const ldap_server = document.getElementById('ldap_server').value;

    // Validaciones simples
    if (!usuario || !correo) {
        document.getElementById('alerta').innerHTML = 'Usuario y correo son obligatorios';
        return;
    }

    const datos_usuario = {
        id_usuario,
        usuario,
        cve_empleado,
        nombre_usuario,
        correo,
        habilitado,
        dominio,
        ldap_server
    };

    fetch('./php/usuarios.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos_usuario)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
    })
    .then(data => {
        console.log('Éxito:', data);
        document.getElementById('tabla_resultado').innerHTML = 'Datos enviados correctamente';
        document.getElementById('alerta').innerHTML = ''; // Limpiar alertas anteriores
    })
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    
});
