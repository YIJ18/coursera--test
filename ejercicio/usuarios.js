document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const id_usuario = document.getElementById('id_usuario').value;
    const usuario = document.getElementById('usuario').value;
    const cve_empleado = document.getElementById('cve_empleado').value;
    const nombre_usuario = document.getElementById('nombre_usuario').value;
    const correo = document.getElementById('correo').value;
    const habilitado = document.getElementById('habilitado').value;
    const dominio = document.getElementById('dominio').value;
    const ldap_server = document.getElementById('ldap_server').value;

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

    fetch('controlador.php', {
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
        document.getElementById('alerta').innerHTML = '';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('alerta').innerHTML = 'Error al enviar los datos';
    });
});
