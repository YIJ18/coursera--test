// Usamos fetch para cargar el archivo menu.html
fetch('ejercicio_barra.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-container').innerHTML = data;
    });