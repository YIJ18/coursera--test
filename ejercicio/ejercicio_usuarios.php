<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Usuarios</title>
</head>

<body>
    <div id="menu-container"></div>

    <div class="rounded shadow-lg p-3 mb-5 bg-body-tertiary m-3">
        <h1 class="text-center">Registro de Usuarios</h1>

        <form id="formulario" method="POST">

            <div class="row mb-3">
                <label for="id_usuario" class="col-sm-2">Id de Usuario</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="id_usuario">
                </div>
            </div>

            <div class="row mb-3">
                <label for="usuario" class="col-sm-2">Usuario</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="usuario">
                </div>
            </div>

            <div class="row mb-3">
                <label for="cve_empleado" class="col-sm-2">CVE Empleado</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="cve_empleado">
                </div>
            </div>

            <div class="row mb-3">
                <label for="nombre_usuario" class="col-sm-2">Nombre del Usuario</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="nombre_usuario">
                </div>
            </div>

            <div class="row mb-3">
                <label for="correo" class="col-sm-2">Correo</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="correo">
                </div>
            </div>

            <div class="row mb-3">
                <label for="habilitado" class="col-sm-2">Habilitado</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="habilitado">
                </div>
            </div>

            <div class="row mb-3">
                <label for="dominio" class="col-sm-2">Dominio</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="dominio">
                </div>
            </div>

            <div class="row mb-3">
                <label for="ldap_server" class="col-sm-2">LDAP Server</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="ldap_server">
                </div>
            </div>

            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="submit">Enviar</button>
            </div>

        </form>

        <div class="p-3 mb-5 m-3">
            <div id="tabla_resultado"></div>
            <div id="alerta"></div>
        </div>
    </div>

    <script src="usuarios.js"></script>
</body>

</html>
