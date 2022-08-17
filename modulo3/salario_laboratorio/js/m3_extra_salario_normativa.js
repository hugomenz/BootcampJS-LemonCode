console.log("# 2. Calcular sueldo según normativa actual")

// se toma el valor del fichero m3_ej1_1_salario

// 70000 --> retencion 28.33
const empleado = {
    edad: 32,
    bruto: 26000, 
    baseCotizacion: 1800,  
    minGastosDificilJustificar: 2000,
    hijos: 2,
    numeroHijosMenorTresAnyos: 1, 
    numeroHijosMayor25: 0,
    pagas: 14, 
    discapacidad: 0, // 0% 33% 65%
}; 

// Obtiene minoración por discapacidad
function getDisabilityReduction(empleado){
    let minoracionDiscapacidad;

    if ( empleado.discapacidad === 0 ) minoracionDiscapacidad = 0;
    if ( empleado.discapacidad === 33 ) minoracionDiscapacidad = 3500;
    if ( empleado.discapacidad === 65 ) minoracionDiscapacidad = 7750;

    return minoracionDiscapacidad;
}

// obtiene diferencia entre salario bruto y base de cotización
function getRendNetoAnual(empleado){
    return empleado.bruto - empleado.baseCotizacion
}

// Obtiene base imponible general
function getGeneralTaxableIncome(empleado){
    
    return getRendNetoAnual(empleado)
            - empleado.minGastosDificilJustificar
            - getDisabilityReduction(empleado)
}


// TODO construir esta funcion para reciclararla en la parte de totaldescendiente
function getIRPF(cantidad){
    //const cantidad = getGeneralTaxableIncome(empleado);
    
    let irpf;
    
    if (cantidad <= 12450){
        irpf = cantidad * 0.19;
    }

    if (cantidad > 12450 && cantidad <= 20200){
        irpf =    ( 12450 * 0.19 )
                + ( cantidad - 12450 ) * 0.24;
    }

    if (cantidad > 20200 && cantidad <= 35200){
        irpf =    ( 12450 * 0.19 )
                + ( 20200 - 12450 ) * 0.24
                + ( cantidad - 20200 ) * 0.30;
    }
    
    if (cantidad > 35200 && cantidad <= 60000){
        irpf =    ( 12450 * 0.19 )
                + ( 20200 - 12450 ) * 0.24
                + ( 35200 - 20200 ) * 0.30
                + ( cantidad - 35200) * 0.37;
    }

    if (cantidad > 60000 && cantidad <= 300000){
        irpf =    ( 12450 * 0.19 )
                + ( 20200 - 12450 ) * 0.24
                + ( 35200 - 20200 ) * 0.30
                + ( 60000 - 35200 ) * 0.37
                + ( cantidad - 60000) * 0.45;
    }
    if (cantidad > 30000){
        irpf =    ( 12450 * 0.19 )
                + ( 20200 - 12450 ) * 0.24
                + ( 35200 - 20200 ) * 0.30
                + ( 60000 - 35200 ) * 0.37
                + ( 300000 - 60000) * 0.45
                + ( cantidad - 300000 ) * 0.47;
    }
    
    return irpf;
}

function getMinimoPersonalFamiliar(empleado){
    // caracter general 5500 € tengas o no hijos
    // si > 65 años --> +1150 €

    // si empleado.numeroHijosMayor25
    // numeroHijosDescuento = empleado.hijos - empleado.numeroHijosMayor25

    // Primer hijo: 2.400 euros
    // Segundo hijo: 2.700 euros
    // Tercer hijo: 4.000 euros
    // Cuarto hijo y posteriores: 4.500 euros.
    let minoracionHijos;

    if ( numeroHijosDescuento === 1 ) minoracionHijos = 2400;
    if ( numeroHijosDescuento === 2 ) minoracionHijos = 2400 + 2700;
    if ( numeroHijosDescuento === 3 ) minoracionHijos = 2400 + 2700 + 4000;
    if ( numeroHijosDescuento >= 4 ) minoracionHijos = 2400 + 2700 + 4000 + 4500;

    // por cada hijo menor de 3 años 2800 €

    return totalDescendiente;
}


const cantidad = getGeneralTaxableIncome(empleado);

cuota1 = getIRPF(cantidad);

console.log(cuota1);

cuota2 = getIRPF(getMinimoPersonalFamiliar(empleado));



// cuotaTotal = cuota1 - cuota2
// deberia elegir entre la menor cantidad entre cuota toal o calculo limite
// ademas si el salario bruto es menorque 22000€ habra que tener en cuenta
// las unidades familiares monoparentales, contribuyente con conyuge a cargo y demas
// por lo que se ha ignorado esta parte para simplificar los calculos

//  (cuotaTotal / empleado.bruto) * 100 = tipoRetencion.toFixed(2) (redondear por defecto)

// cuotaTotalRecalculada = empleado.bruto * tipoRetencion/100

// ( salarioBruto - cuotaTotalRecalculada ) / 14 --> Sueldo neto mensual


// Hacer captura de pantalla con 3 ejemplos usando la aplicacion de hacienda


// https://www.youtube.com/watch?v=j2oFYzK354I para comprobar que nos da