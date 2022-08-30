// create the input fields
var createQuantity = (product) => {
  quantity = document.createElement("input");
  quantity.setAttribute("type", "number");
  quantity.setAttribute("name", "quantity-" + product.description);
  quantity.setAttribute("id", "item-" + product.description);
  quantity.setAttribute("min", "0");
  quantity.setAttribute("max", product.stock); 
  quantity.setAttribute("class", "quantity-amount");
  product.units = 0;
  quantity.value = product.units;

  return quantity;
}

// create HTML shopping cart page
var showProducts = productList => {
  /*  <div class="shopping-item"> */
  const shoppingCartContainer = document.getElementById("shopping-cart")

  for (var product of productList){
    // create the container of the shopping cart
    var shoppingItem = document.createElement("div");
    shoppingItem.setAttribute("class", "shopping-item");

    // create the container for the product characteristics
    var itemEntry = document.createElement("div");
    itemEntry.setAttribute("class", "item-entry");

    // create product description
    var itemName = document.createElement("span");
    itemName.setAttribute("class", "item-name");
    itemName.innerText = product.description;
    
    // create product unit price as the product description
    var itemDescription = document.createElement("span");
    var itemDescription = document.createElement("span");
    itemDescription.setAttribute("class", "item-description");
    itemDescription.innerText = product.price + " € each";
    
    // create the stock status below the unit price of the product
    var itemStockState = document.createElement("span");
    itemStockState.setAttribute("class", "item-description");
    itemStockState.innerText = product.stock + " units in stock.";

    // create the container of the input to select number of products
    var quantityAmountContainer = document.createElement("div");
    // input elements will be created by passing the createQuantity function    

    // create the container for the product total price (units x price)
    var productValueContainer = document.createElement("div");
    productValueContainer.setAttribute("class", "value");

    // value field for the product total price (units x price)
    var productValue = document.createElement("span");
    productValue.setAttribute("id", "total-price-" + product.description);

    // create the button to create the invoice with the totals
    var button = document.createElement("button");
    var buttonText = document.createElement("span");
    button.setAttribute("class", "button");
    button.setAttribute("id", "button-result");
    button.setAttribute("onclick", "handlingPayNowButton()")
    buttonText.innerHTML = "Pay now";

    // structure creation
    shoppingCartContainer.appendChild(shoppingItem);

    shoppingItem.appendChild(itemEntry)
    itemEntry.appendChild(itemName);
    itemEntry.appendChild(itemDescription);

    itemEntry.appendChild(itemStockState);

    shoppingItem.appendChild(quantityAmountContainer);
    quantityAmountContainer.appendChild(createQuantity(product));

    shoppingItem.appendChild(productValueContainer);
    productValueContainer.appendChild(productValue);

    }
    shoppingCartContainer.appendChild(button);
    button.appendChild(buttonText);
}

// called from HTML onclick of button Pay now
// create footer HTML
var createInvoiceHTML = () =>{
  var container = document.getElementById("container");

  var shoppingFooter = document.createElement("div");
  shoppingFooter.setAttribute("class", "shopping-footer");
  shoppingFooter.setAttribute("id", "shopping-footer");
  
  var totalsBox = document.createElement("div");
  totalsBox.setAttribute("class", "totals-box");

  var subtotal =  document.createElement("div");
  subtotal.setAttribute("class", "subtotal");
  var subtotalDescriptionText = document.createElement("span");
  subtotalDescriptionText.innerText = "Subtotal "
  var subtotalValue = document.createElement("span");
  subtotalValue.setAttribute("id", "subtotal");

  var taxes =  document.createElement("div");
  taxes.setAttribute("class", "iva");
  var taxesDescriptionText = document.createElement("span");
  taxesDescriptionText.innerText = "IVA "
  var taxesValue = document.createElement("span");
  taxesValue.setAttribute("id", "iva");

  var total =  document.createElement("div");
  total.setAttribute("class", "total");
  var totalDescriptionText = document.createElement("span");
  totalDescriptionText.innerText = "Total "
  var totalValue = document.createElement("span");
  totalValue.setAttribute("id", "total");

  container.appendChild(shoppingFooter);
  shoppingFooter.appendChild(totalsBox);

  totalsBox.appendChild(subtotal);
  subtotal.appendChild(subtotalDescriptionText);
  subtotal.appendChild(subtotalValue);

  totalsBox.appendChild(taxes);
  taxes.appendChild(taxesDescriptionText);
  taxes.appendChild(taxesValue);

  totalsBox.appendChild(total);
  total.appendChild(totalDescriptionText);
  total.appendChild(totalValue);
}

// return a value deppending on the tax element
var getVAT = productVAT => {
  switch(productVAT) {
    case "REGULAR_TYPE":
      productVAT = 21;
      break;
    case "LOWER_TYPE":
      productVAT = 4;
      break;
    case "EXEMPT_TYPE":
      productVAT = 0;
      break;
  }
  return productVAT;
}

// get subtotal of the shopping cart
function getSubtotalCartValue (productList){
  var subtotalCartValue = 0; 
  for (var product of productList) subtotalCartValue += (product.price * product.units);
  return subtotalCartValue;
}

// handling shopping cart changes:
// enable "Pay Now" button
// create and change the product unit number
// get total product price
var handlingCartChanges = product =>{
  inputField.addEventListener("change", (event) => {
    product.units = event.target.valueAsNumber;
    document.getElementById("total-price-" + product.description).innerHTML = (product.units * product.price).toFixed(2) + "€";
  
    // condition to enabled/disabled "Pay Now" button 
    if (document.getElementById("item-" + product.description).valueAsNumber != 0){
      document.getElementById("button-result").disabled = false; // enabled
      
      // if the subtotal is 0,  
    } else if( (getSubtotalCartValue(products) == 0 ) ){
      document.getElementById("total-price-" + product.description).innerHTML = "";
      document.getElementById("button-result").disabled = true; // disabled
      
      // remove footer when no products are selected or when product unit is back to zero
      if (document.getElementById("shopping-footer"))document.getElementById("shopping-footer").remove(); 
      
    }else{
      // remove 0.00E if the product unit is back to zero
      document.getElementById("total-price-" + product.description).innerHTML = "";
    }
  });
}

var printFooterData = () => {
  var subtotal = 0;
  var iva = 0;
  var total = 0;

  for (var product of products){
    iva += ( product.price * product.units )  * getVAT(product.tax) / 100;
  }

  subtotal = getSubtotalCartValue(products);
  total = subtotal + iva;

  document.getElementById("subtotal").innerHTML = subtotal.toFixed(2) + "€";
  document.getElementById("iva").innerHTML = iva.toFixed(2) + "€";
  document.getElementById("total").innerHTML = total.toFixed(2) + "€";
}

// create the shooping cart footer if it doesn't exist
// calculate and show in the HTML the subtotal, iva and total
var handlingPayNowButton = productList => {
    // without it, it creates multiple footers
    if(!document.getElementById("shopping-footer")) {
      createInvoiceHTML();
      printFooterData();
    } else{ // if the footer is created only print the calculations
      printFooterData();
    }
}

// Constants
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Input
var products = [
    {
      description: "Goma de borrar",
      price: 0.25,
      tax: LOWER_TYPE,
      stock: 2,
      units: 0,
    },
    {
      description: "Lápiz H2",
      price: 0.4,
      tax: LOWER_TYPE,
      stock: 5,
      units: 0,
    },
    {
      description: "Cinta rotular",
      price: 9.3,
      tax: REGULAR_TYPE,
      stock: 2,
      units: 0,
    },
    {
      description: "Papelera plástico",
      price: 2.75,
      tax: REGULAR_TYPE,
      stock: 5,
      units: 0,
    },
    {
      description: "Escuadra",
      price: 8.4,
      tax: REGULAR_TYPE,
      stock: 3,
      units: 0,
    },
    {
      description: "Pizarra blanca",
      price: 5.95,
      tax: REGULAR_TYPE,
      stock: 2,
      units: 0,
    },
    {
      description: "Afilador",
      price: 1.2,
      tax: LOWER_TYPE,
      stock: 10,
      units: 0,
    },
    {
      description: "Libro ABC",
      price: 19,
      tax: EXEMPT_TYPE,
      stock: 2,
      units: 0,
    },
  ];

// start the website creating the shopping cart from an array of products
showProducts(products);

document.getElementById("button-result").disabled = true; // Disabled
console.log("button DISABLED")

// input listener
for (var product of products){
  var unitTotals;
  var idName = "item-" + product.description;
  var inputField = document.getElementById(idName);
  handlingCartChanges(product);
}