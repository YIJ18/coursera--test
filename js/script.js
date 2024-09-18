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

    const totalPagos = montoPrestamo * (1 + (tasaAnual / 100));
    const interes = montoPrestamo*((tasaAnual/100)/12);
    const capital = pagoMensual - interes;
    const saldo = montoPrestamo - interes;
    const numeroPago = 1;

    //Genera una tabla con los valores
    const tablaHTML = `
        <h2>Evento</h2>
        <table  class="table table-striped">
            <tr>
                <th> - </th>
                <th>Monto de Préstamo</th>
                <th>Interés</th>
                <th>Capital</th>
                <th>Saldo</th>
            </tr>
            <tr>
                <td>${numeroPago}</td>
                <td>$${montoPrestamo}</td>
                <td>$${interes}</td>
                <td>$${capital}</td>
                <td>$${saldo}</td>
            </tr>
        </table>
    `;

    // Inserta la tabla en el div con id "tabla_resultado"
    document.getElementById('tabla_resultado').innerHTML = tablaHTML;
});
