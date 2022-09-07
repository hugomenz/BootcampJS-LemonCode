# Ejercicio para el listado de cuentas

account-list solo tiene los helpers y el html

> creamos el JS principal >> account-list.js ✔️✔️
> creamos el JS del API >> account-list.api.js ✔️✔️
> creamos el JS del validador >> account-list.validator.js ✔️✔️

- recuperar las cuentas del usuario que acaba de hacer login.
  > Dame informacion del servidor. ✔️✔️
  > Una vez recuperados los datos, se los pasamos a login y este crea la pagina de forma dinamica. ✔️✔️
  > Transformaciones de fechas. ✔️✔️
  > Transformaciones de divisas. ✔️✔️

### para CADA cuenta vamos a poder navegar >> transferencias / movimientos. > Navega ✔️✔️

### opcion: agregar nueva cuenta. ✔️✔️

// history.back()
// O
//document.referrer ? window.location = document.referrer : history.back()
// que se usa n produccion??

# Sesion 3 ✔️✔️

### consultar los movimientos de una cuenta

- Los datos los recuperamos de movements en data.json y tienen un accountId
- recuperar los datos e imprimirlos
- necesitamos los mappers para cambiar formato de los datos!

- En transferencias recoger los parametros para ver id de la cuenta
- recoger valores formularios
- validar todos los campos
- mandar la informacion al sevidor
