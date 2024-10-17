<?php
include('usuarios.php');

$data = json_decode(file_get_contents("php://input"), true);
if (isset($data)) {
    // Procesa los datos recibidos
    // Aquí puedes realizar operaciones en la base de datos, como insertar un nuevo usuario
    try {
        $stmt = $pdo->prepare("INSERT INTO usuarios (id_usuario, usuario, cve_empleado, nombre_usuario, correo, habilitado, dominio, ldap_server) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            $data['id_usuario'],
            $data['usuario'],
            $data['cve_empleado'],
            $data['nombre_usuario'],
            $data['correo'],
            $data['habilitado'],
            $data['dominio'],
            $data['ldap_server']
        ]);
        echo json_encode(["success" => true]);
    } catch (Exception $e) {
        echo json_encode(["error" => "Error al insertar datos: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["error" => "No se recibieron datos"]);
}
?>
