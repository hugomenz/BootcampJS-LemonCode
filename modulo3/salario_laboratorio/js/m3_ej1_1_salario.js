console.log("# 1. Calcular sueldo neto en nomina")

const empleado = {
    bruto: 52500,
    hijos: 1,
    pagas: 14,
};

function getDeduction(empleado){
    let deduction;

    if ( empleado.bruto < 12000 ) deduction = 0.0;
    if ( empleado.bruto >= 12000 && empleado.bruto < 24000 ) deduction = 0.08;
    if ( empleado.bruto >= 24000 && empleado.bruto < 34000 ) deduction = 0.16;
    if ( empleado.bruto >= 34000 ) deduction = 0.30;

    // si el empleado tiene hijos y cobra mas de 12000 se aplica descuento
    if ( empleado.hijos > 0 && deduction != 0 ) deduction = deduction - 0.02;

    return deduction;
}

function getNetAnnualSalary(empleado){
    return ( 1 - getDeduction(empleado)) * empleado.bruto;
}

function getNetMonthlySalary(empleado){
    return getNetAnnualSalary(empleado) / empleado.pagas;
}

function printNetSalary(empleado){
    deduction = getDeduction(empleado);
    netannualSalary = getNetAnnualSalary(empleado);
    netMonthlySalary = getNetMonthlySalary(empleado);

    console.log(`Salario bruto: ${empleado.bruto.toFixed(2)}€`);
    console.log(`Salario neto anual (deducción ${(deduction*100).toFixed(2)}%): ${netannualSalary.toFixed(2)}€`)
    console.log(`Salario neto mensual (${empleado.pagas} pagas): ${netMonthlySalary.toFixed(2)}€`)
}

printNetSalary(empleado);
console.log("-----------------------------------------")