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

    //Variables que se usan para calcular los datos necesarios de la tabla
    let interes;
    let capital;
    let saldo;
    let numeroPago = 1;

    //genera la base de la tabla
    let tablaHTML = `
    <h2>Amortización</h2>
    <table class="table table-striped">
        <tr>
            <th># Pago</th>
            <th>Monto de Préstamo</th>
            <th>Interés</th>
            <th>Capital</th>
            <th>Saldo</th>
        </tr>
`;

    //Genera una tabla con los valores

    do{

        interes = montoPrestamo*((tasaAnual/100)/12);
        capital = pagoMensual - interes;
        saldo = montoPrestamo - capital;

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
    montoPrestamo = saldo;
    numeroPago++;
    } while(Math.round(saldo) >= 0);
    
    

    // Inserta la tabla en el div con id "tabla_resultado"
    document.getElementById('tabla_resultado').innerHTML = tablaHTML;
});
