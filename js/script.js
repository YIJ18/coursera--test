var company = new Object();
company.name = "Facebook";
company.ceo = "Mark";
console.log(company);

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Valores de los campos
    const montoPrestamo = document.getElementById('monto_prestamo').value;
    const tasaAnual = document.getElementById('porcentaje').value;
    const pagoMensual = document.getElementById('pago_mensual').value;

    // Consola
    console.log("Monto de Préstamo: $" + montoPrestamo);
    console.log("Tasa Anual: " + tasaAnual + "%");
    console.log("Pago Mensual: $" + pagoMensual);

});