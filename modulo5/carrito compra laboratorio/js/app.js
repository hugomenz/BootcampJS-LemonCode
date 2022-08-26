// functions to print in console the different titles of the exercises
var printHash = () => console.log("#".repeat(48));
function printExerciseDescription (text) {
    printHash(); console.log(text); printHash();
}

//Prints the different products inside the given shopping cart
function showShoppingCart(cart){
    for (product of cart){
        for (attr in product) console.log(attr.toUpperCase() + ": " + product[attr]);
        console.log("-----------"); 
    };
}

// Given a product id and the shopping cart it deletes that product and returns a new cart
function deleteProductById(cart, index){
    for ( product of cart ) if (product.id == index) cart.splice(cart.indexOf(product), 1);
    console.log("Product id to delete: ", index);
    return cart;
}

// Geturns the total value of the shopping cart
// It multiplies the product price and the product count (ammount of the same product)
function getTotalCartValue (cart){
    var totalValueCart = 0; 
    
    for (product of cart) totalValueCart += (product.price * product.count);
    
    console.log("Total of the Shopping Cart: " + totalValueCart + "€");
    
    return totalValueCart;
}

// Returns a new shopping cart with premium products only
function getPremiumProducts(cart){
    var premiumProducts = [];
    
    for (product of cart) if (product.premium == true) premiumProducts.push(product);
    
    return premiumProducts;
}

// Compares the shopping cart with the cart created with the getPremiumProducts function
function checkDeliveryFees(cart){
    // gets new shopping cart with all premium products
    // if they have the same number of elements, all products are premium
    premiumProducts = getPremiumProducts(cart);
    var message = cart.length == premiumProducts.length 
        ? "All products are premium!  Free delivery! ✔️" 
        : "With delivery fees (All products are not Premium) ❌";
    document.getElementById("delivery-fees").innerHTML = message;
    console.log(message)
}

// Checks if the total value of the cart is greater than the price limit
function checkTotalValueDiscount(cart){
    const PRICE_LIMIT = 150; 
    const DISCOUNT = 0.05;
    var totalValue = getTotalCartValue(cart);
    
    newTotalValue = totalValue > PRICE_LIMIT ? ( 1 - DISCOUNT ) * totalValue : totalValue;
    
    console.log(totalValue > newTotalValue 
        ? "Discount of " + DISCOUNT * 100 + "%  ✔️" 
        : "No discount available (subtotal < " + PRICE_LIMIT + "€) ❌");
    
    console.log(totalValue > newTotalValue 
        ? "Total with discount: " + newTotalValue.toFixed(2) + "€" 
        : "Total without discount: " + totalValue + "€");
    
    // Anadido para la parte opcional de mostrar el carrito de la compra en formato HTML
    document.getElementById("order-discount").innerHTML = (totalValue > newTotalValue 
        ? "Discount of " + DISCOUNT * 100 + "%  ✔️" 
        : "No discount available (subtotal < " + PRICE_LIMIT + "€) ❌");
    
    return newTotalValue;
}

// Check if a product is premium and returns "premium product"
function showPremium(condition){
    if(condition == true){
        return "Premium Product";
    }else{
        return "";
    }
}

// Gets all product details in shopping cart to print them in the HTML page of the cart
function getShoppingCartDetails(cart){
    i = 1;
    for (product of cart){
        document.getElementById("item-" + i).innerHTML = product.name;
        document.getElementById("amount-" + i).innerHTML = product.count;
        document.getElementById("premium-" + i).innerHTML = showPremium(product.premium);
        document.getElementById("price-unit-" + i).innerHTML = product.price + " €";
        document.getElementById("price-item-" + i).innerHTML = (product.price * product.count).toFixed(2) + " €";
        i++;
    }
    document.getElementById("subtotal").innerHTML = getTotalCartValue(cart).toFixed(2)+ " €";
    document.getElementById("total").innerHTML = checkTotalValueDiscount(cart).toFixed(2)+ " €";
    checkDeliveryFees(shoppingCart);
}

// Adds or subtracts products from the HTML cart and update the cart
function handlingCounterButton(event){
    console.log( "-".repeat(15) + "button clicked" + "-".repeat(18));
    countButtonClicked = event.path[1].childNodes[3]; // Identifies clicked button using the amount id
    buttonType = event.target.id; // identifies clicked button name --> button-add or button-minus
    
    oldValue = +document.getElementById( countButtonClicked.id ).textContent;
    
    if ( buttonType === "button-add" ){
        document.getElementById( countButtonClicked.id ).innerHTML = oldValue + 1;
    }else if( oldValue != 1 ){ // min number of articles in the shopping cart
        document.getElementById( countButtonClicked.id ).innerHTML = oldValue - 1;
        oldValue = oldValue;
    }
        
    var idIndexProduct = countButtonClicked.id.split("-")[countButtonClicked.id.split("-").length - 1];
    shoppingCart[idIndexProduct - 1].count = +document.getElementById( countButtonClicked.id ).textContent;
    
    console.log("Shopping cart updated!", shoppingCart)
    console.log("-".repeat(48));
    // updates shopping cart object with the new values
    getShoppingCartDetails(shoppingCart);
}

// Shopping cart arrray of objects
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
var idToDelete = 54657;
var copyShoppingCart = shoppingCart.slice(0, shoppingCart.length); // creates copy of shoppingCart

var newShoppingCart = deleteProductById(copyShoppingCart, idToDelete);
showShoppingCart(newShoppingCart);

// returns the shopping cart value
printExerciseDescription("3. CALCULAR EL VALOR TOTAL DEL CARRITO DE COMPRA");
getTotalCartValue(shoppingCart);

// filters premium products
printExerciseDescription("4. FILTRAR LOS PRODUCTOS QUE SEAN PREMIUM");
showShoppingCart(getPremiumProducts(shoppingCart));

console.log("Opcional: " + "-".repeat(38));
printExerciseDescription("5. GASTOS DE ENVIO CERO SI TODOS LOS PRODUCTOS SON PREMIUM ");
checkDeliveryFees(shoppingCart);

printExerciseDescription("7. APLICAR DESCUENTO SI LA COMPRA ES MAYOR DE 150€ ");
checkTotalValueDiscount(shoppingCart); 

// modifies the html with the shopping cart values, description, count and price
getShoppingCartDetails(shoppingCart);