
function printProduct(product){
    for (attr in product) console.log(attr.toUpperCase() + ": " + product[attr])
    return '';
}

function showShoppingCart(cart){
    for (product of cart){
        console.log("-----------");
        console.log(printProduct(product));
    };
}

function deleteProductById(cart, index){
    for ( product of cart ) if (product.id == index) cart.splice(cart.indexOf(product), 1);
    return cart;
}

function getTotalCartValue (cart){
    var totalValueCart = 0; 

    for (product of cart) totalValueCart += (product.price * product.count);
    
    console.log("Total of the Shopping Cart: " + totalValueCart + "€");

    return totalValueCart;
}

function getPremiumProducts(cart){
    var premiumProducts = [];
    for (product of cart){
        if (product.premium == true){
            premiumProducts.push(product)
        }
    }
    return premiumProducts;
}


function checkTotalValueDiscount(cart){
    var discount = 0.05;
    var totalValue = getTotalCartValue(cart);

    newTotalValue = totalValue > 50 ? ( 1 - discount ) * totalValue : totalValue;

    console.log(totalValue > newTotalValue ? "Discount of " + discount * 100+ "%" : "No discount available")
    console.log(totalValue > newTotalValue ? "Total with discount: " + newTotalValue.toFixed(2) + "€" 
    : "Total without discount: " + totalValue + "€")

    return newTotalValue
}

// functions to print the different exercises
var printHash = () => console.log("#".repeat(48));
function printExerciseDescription (text) {
    printHash(); console.log(text); printHash();
}



const shoppingCart = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
];

printExerciseDescription("1. MOSTRAR EL CARRITO DE COMPRA");
console.log(showShoppingCart(shoppingCart));

printExerciseDescription("2. ELIMINAR UN PRODUCTO DEL CARRITO DE COMPRA");
var copyShoppingCart = shoppingCart.slice(0, shoppingCart.length); // creates copy of shoppingCart
var newShoppingCart = deleteProductById(copyShoppingCart, 54657);
showShoppingCart(newShoppingCart);

// returns the shopping cart value
printExerciseDescription("3. CALCULAR EL VALOR TOTAL DEL CARRITO DE COMPRA");
getTotalCartValue(shoppingCart);

// filters premium products
printExerciseDescription("4. FILTRAR LOS PRODUCTOS QUE SEAN PREMIUM");
showShoppingCart(getPremiumProducts(shoppingCart));

console.log("Opcional: " + "-".repeat(38));
printExerciseDescription("5. GASTOS DE ENVIO CERO SI TODOS LOS PRODUCTOS SON PREMIUM ");
premiumProducts = getPremiumProducts(shoppingCart);
var message = shoppingCart.length == premiumProducts.length ? "Gastos de envio cero" : "Con gastos de envio"
console.log(message)

printExerciseDescription("7. APLICAR DESCUENTO SI LA COMPRA ES MAYOR DE 50€ ");
checkTotalValueDiscount(shoppingCart);
