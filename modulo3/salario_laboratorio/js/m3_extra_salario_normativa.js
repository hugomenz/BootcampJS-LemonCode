console.log("# 2. Calcular sueldo según normativa actual")

// Al definir los hijos del empleado se podrían crean tantos objetos como hijos tenga
// construyendolo como por ejemplo: 
// {anyoNacimiento: 2018, computadoEntero: true, discapacidad: 0, movilidadReducida:false}
// Complicaria mucho las cosas y la verdad que para casos "ideales" (a la hora de escribir el codigo)
// facilita mucho las cosas.

// Para el calculo, se han ignorado muchos gastos deducibles. Los mas comunes
// se han tenido en cuenta.

// Adjunto, en la carpeta de files se encuentra:
// - el PDF de hacienda de las retenciones2022
//  -- files/retenciones2022.pdf
// - dos ejemplos usando el programa de hacienda para retencion de IRPF 2022
//  -- ver files/ejemplo1.pdf y files/ejemplo2.pdf
const empleado = {
    edad: 66,
    bruto: 75000, 
    baseCotizacion: 1800,  
    minGastosDificilJustificar: 2000,
    hijos: 4,
    numeroHijosMenorTresAnyos: 2, 
    numeroHijosMayor25: 1,
    pagas: 14, 
    discapacidad: 33, // 0% 33% 65%
}; 

// obtiene diferencia entre salario bruto y base de cotización
function getRendNetoAnual(empleado){
    return empleado.bruto - empleado.baseCotizacion
}

// Obtiene minoración por discapacidad
function getDisabilityReduction(empleado){
    let minoracionDiscapacidad;

    if ( empleado.discapacidad === 0 ) minoracionDiscapacidad = 0;
    if ( empleado.discapacidad === 33 ) minoracionDiscapacidad = 3500;
    if ( empleado.discapacidad === 65 ) minoracionDiscapacidad = 7750;

    return minoracionDiscapacidad;
}

// Obtiene base imponible general
function getGeneralTaxableIncome(empleado){

    // Por tener mas de dos descendientes con derecho a minimo --> 600€
    let numeroHijosDescuento;
    numeroHijosDescuento = empleado.hijos - empleado.numeroHijosMayor25

    deduccionHijosDerechoMinimo = numeroHijosDescuento > 2 ? 600 : 0

    return getRendNetoAnual(empleado)
            - empleado.minGastosDificilJustificar
            - getDisabilityReduction(empleado)
            - deduccionHijosDerechoMinimo
}

function getIRPF(cantidad){
    
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
    if (cantidad > 300000){
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
    
    // caracter general 5550 € tengas o no hijos
    let totalDescendiente = 5550;
    
    // si > 65 años --> +1150 €
    if ( empleado.edad > 65 ) totalDescendiente = totalDescendiente + 1150;

    // El mínimo por discapacidad del contribuyente es de 3.000 € anuales y de 
    // 9.000 € anuales cuando se acredite un grado de discapacidad igual o superior al 65 %.
    // Se ignora en este apartado las discapacidades de los hijos ya que el minimo por
    // discapacidad es la suma del mínimo por discapacidad del contribuyente y del mínimo 
    // por discapacidad de ascendientes y descendientes.
    if ( empleado.discapacidad === 0 ) totalDescendiente = totalDescendiente + 0;
    if ( empleado.discapacidad === 33 ) totalDescendiente = totalDescendiente + 3000;
    if ( empleado.discapacidad === 65 ) totalDescendiente = totalDescendiente + 9000;

    // si tiene hijos mayor a 25 años se resta al numero de hijos
    // ya que este deja de contarse como niño
    let numeroHijosDescuento;
    numeroHijosDescuento = empleado.hijos - empleado.numeroHijosMayor25

    // Primer hijo: 2.400 euros
    // Segundo hijo: 2.700 euros
    // Tercer hijo: 4.000 euros
    // Cuarto hijo y posteriores: 4.500 euros.
    let minoracionHijos;

    if ( numeroHijosDescuento === 1 ) minoracionHijos = totalDescendiente + 2400;
    if ( numeroHijosDescuento === 2 ) minoracionHijos = totalDescendiente + 2400 + 2700;
    if ( numeroHijosDescuento === 3 ) minoracionHijos = totalDescendiente + 2400 + 2700 + 4000;
    if ( numeroHijosDescuento >= 4 ) minoracionHijos = totalDescendiente + 2400 + 2700 + 4000 + 4500;

    // por cada hijo menor de 3 años se recibe 2800 €
    totalDescendiente = minoracionHijos + ( 2800 * empleado.numeroHijosMenorTresAnyos )

    // # Se supone que los hijos no se comparte con el cónyugue. Simplemente habria que divir 
    // # por dos el numero de hijos, lo que complicaría mucho más el cálculo.

    return totalDescendiente;
}

function getCuotaRetencion(empleado){
    // Obtiene el IRPF por tramos de la base imponible general 
    const cuota1 = getIRPF(getGeneralTaxableIncome(empleado));

    // Obtiene el IRPF por tramos de la cuota correspondiente al minimo personal y familiar
    const cuota2 = getIRPF(getMinimoPersonalFamiliar(empleado));
    
    const cuotaRetencion = cuota1 - cuota2;

    return cuotaRetencion;
}

// deberia elegir entre la menor cantidad entre cuota toal o calculo limite
// ademas si el salario bruto es menorque 22000€ habra que tener en cuenta
// las unidades familiares monoparentales, contribuyente con conyuge a cargo y demas
// por lo que se ha ignorado esta parte para simplificar los calculos

// Calcula tipo de retencion calculando TRUNCANDO dos decimales
tipoRetencion = Math.floor( ( ( getCuotaRetencion(empleado) / empleado.bruto ) * 100) * 100 ) / 100;

// Recalcula la cuota total de retencion
cuotaTotalRecalculada = ( empleado.bruto * tipoRetencion / 100 ).toFixed(2);

// Calculamos el sueldo neto mensual tal y como lo pide la practica
sueldoNetoMensual = ( empleado.bruto - cuotaTotalRecalculada ) / empleado.pagas;

console.log("BASE PARA CALCULAR EL TIPO DE RETENCION: ", getGeneralTaxableIncome(empleado) + "€" );
console.log("MINIMO PERSONAL Y FAMILIAR PARA TIPO RETENCION: ", getMinimoPersonalFamiliar(empleado) + "€" );
console.log("TIPO DE RETENCION APLICABLE: ", tipoRetencion + "%" );
console.log("IMPORTE ANUAL DE LAS RETENCIONES E INGRESOS A CUENTA: ", cuotaTotalRecalculada + "€" );

console.log("Sueldo Neto Mensual Trabajador: ", sueldoNetoMensual.toFixed(2) + "€" );
