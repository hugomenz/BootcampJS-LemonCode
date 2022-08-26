# Módulo 5 - Arrays y Bucles - Laboratorio

## Laboratorio - Carrito de Compra

#### NOTAS: 
* Listar todos los productos.
** Al mostrar la estructura del carrito de compra usando múltiples console.log desde dentro de una funcion
*printProduct*, como esta no devuelve nada usando el return, el for loop devuelve undefined al final de cada iteración, se puede quitar empleando un `return '';`

* Eliminar el producto con id 54657 del carrito de la compra.
* Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).
* Filtrar por los productos que sean premium.


>OPCIONAL
* Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido tiene gastos de envío".
    * Ya que todo el contenido de la página está en ingles, he cambiado el mensaje 
* Mostrar el carrito en un listado de html básico.
* Aplicar un descuento del 5% si la compra es mayor de 100 €.
    * Se ha usado como precio límite 150€ ya que seleccionando unicamente 1 producto de cada, la suma es de 101,60€.

#### Funciones adicionales.
* Se ha añadido la posibilidad de hacer click sobre **"+"** o **"-"** pudiendo cambiar el número total de articulos. La cuenta llega hasta 1, ya que si hay productos en el carro de la compra, no podría ser cero. En este caso, se deberían eliminar del carro mediante un boton de eliminar o similar.
* Al añadir o quitar numero de productos, el precio total del producto se actualiza automáticamente.
* Se muestra el precio unitario del producto bajo la descripcion del mismo.
* Muestra debajo del precio unitario, si el producto es premium o no.
* El subtotal se modifica automáticamente.
* Muestra si se deben pagar tasas adicionales por envío al no ser todos los productos premium.
> All products are premium!  Free delivery! ✔️
> With delivery fees (All products are not Premium) ❌
* Muestra si se ha aplicado un descuento por ser el subtotal superior a 150€.
> No discount available (subtotal < 150€) ❌
> Discount of 5% ✔️
