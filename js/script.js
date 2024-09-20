document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    // Valores de los campos
    let montoPrestamo = parseFloat(document.getElementById('monto_prestamo').value);
    const tasaAnual = parseFloat(document.getElementById('porcentaje').value);
    const pagoMensual = parseFloat(document.getElementById('pago_mensual').value);

    // Consola
    console.log("Monto de Préstamo: $" + montoPrestamo);
    console.log("Tasa Anual: " + tasaAnual + "%");
    console.log("Pago Mensual: $" + pagoMensual);

    //Variables que se usan para calcular los datos necesarios de la tabla
    var tabla = document.getElementById('tabla_resultado');
    let interes;
    let capital;
    let saldo = montoPrestamo;
    let numeroPago = 1;
    let alerta;
    let accion;
    let tablaHTML;

    tabla.innerHTML = '';

    //Validacion para que no metan un monto de prestamo mayo al pago que haran mensualmente
    if (montoPrestamo >= pagoMensual) {

        tablaHTML =
            `<h2 class="text-center">Número de pagos aproximados</h2>
    <table class="table table-striped text-center">
        <tr>
            <th># Pago</th>
            <th>Monto de Préstamo</th>
            <th>Interés</th>
            <th>Capital</th>
            <th>Saldo</th>
        </tr>`;

        //Genera una tabla con los valores
        do {
            interes = saldo * ((tasaAnual / 100) / 12);
            capital = pagoMensual - interes;
            saldo = montoPrestamo - capital;


            accion = saldo > 0
                ? 
                tablaHTML+=`<tr>
                <td>${numeroPago}</td>
                <td>$${montoPrestamo.toFixed(2)}</td>
                <td>$${interes.toFixed(2)}</td>
                <td>$${capital.toFixed(2)}</td>
                <td>$${saldo.toFixed(2)}</td>
            </tr>` :
                alerta = `<div class="alert alert-success text-center" role="alert">
                El ultimo pago, tan solo de $${ultimoPago.toFixed(2)}!
            </div>`;

            montoPrestamo = saldo;
            numeroPago++;
            ultimoPago = saldo;
        } while (montoPrestamo > 0);

        tablaHTML += '</table>';

        // Inserta la tabla en el div con id "tabla_resultado"
        document.getElementById('tabla_resultado').innerHTML = tablaHTML;
    }
    else {
        alerta =  
        `<div class="alert alert-danger text-center" role="alert">
           No puedes ingresar un monto mayor  a un pago mensual!
        </div>`;
    }
    document.getElementById('alerta').innerHTML = alerta;
});
