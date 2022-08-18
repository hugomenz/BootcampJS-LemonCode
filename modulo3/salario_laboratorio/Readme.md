# LABORATORIO MODULO 3: Calcular sueldo neto en nómina
## 1. Calcular sueldo neto en nomina
En este apartado se calcula el sueldo neto según el guión de la práctica. 
* Hay que descomentar la **linea 14** del fichero *index.html* ya que se encuentra comentada. Por defecto se ejecutará la segunda parte para el cálculo del IRPF
> 14 `<!-- <script src="js/m3_ej1_1_salario.js"></script> -->`

> 15  `<script src="js/m3_extra_salario_normativa.js"></script>`


## 2. Calcular sueldo según normativa actual
En este apartado se calcula el tipo de retención aplicable usando la normativa actual. Con el fin de reducir la complejidad del fichero js, se han ignorado algunas deducciones y cálculos para algunos casos.

En el directorio de *salario_laboratorio/files* se encuentran varios ficheros:
* *ejemplo1.pdf* : Caso donde el empleado es menor de 65 años, tiene 2 hijos y solo uno es menor de 3 años y ninguno mayor de 25. No es discapacitado. Su salario bruto es de 26.000,00€.
* *ejemplo2.pdf*: Caso donde el empleado es mayor de 65 años, tiene 4 hijos y dos son menores de 3 años y uno mayor de 25. Tiene una discapacidad del 33%. Su salario bruto es de 75.000,00€.
* *retenciones.pdf* : Documentación oficial [Las Retenciones e Ingresos a Cuenta del IRPF sobre los Rendimientos del Trabajo en el ejercicio 2022](https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/modelos/rw/retenciones2022.pdf)

Para comprobar que los datos se han realizado correctamente, se ha empleado la calculadora de hacienda [Retenciones IRPF 2022](https://www2.agenciatributaria.gob.es/wlpl/PRET-R200/R220/index.zul). En los dos ejemplos aparece una captura de pantalla de la sección *Resultados*
