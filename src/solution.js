/*
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

let products = [
  {
    name: "Court Sneaker",
    priceInCents: 9800,
    availableSizes: [5.5, 8, 8.5, 9.5, 10, 10.5, 11],
  },
  {
    name: "Relaxed Silk Shirt",
    priceInCents: 9800,
    availableSizes: [0, 10, 12, 2],
  },
  {
    name: "Square-Neck Jumpsuit",
    priceInCents: 8800,
    availableSizes: [6, 10, 14, 2, 12],
  },
];

const cart = {
  "Square-Neck Jumpsuit": {
    priceInCents: 8800,
    quantity: 1,
  },
  "Relaxed Silk Shirt": {
    priceInCents: 9800,
    quantity: 2,
  },
};

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(product, name, size) {
  let result = null;

  for(let item in product){
    const thisProduct = product[item];
    if(thisProduct.name === name && thisProduct.availableSizes.includes(size)) {
      result = product[item];
    }
  }
  return result;
}

const isEmpty = obj => Object.keys(obj).length === 0;

function addProductToCart({name, priceInCents}, cart = {}){
  if(isEmpty(cart)){
    cart[name] = { priceInCents: priceInCents, quantity: 1 }
  } else {
    if ( Object.keys(cart).includes(name) ){
      for(let item in cart){
        if(item === name){
          cart[name] = { priceInCents: priceInCents, quantity: cart[item].quantity+=1 }
        }
      }
    } else {
      cart[name] = { priceInCents: priceInCents, quantity: 1 }
    }
  }
  return cart;
}

function calculateTotal(cart){
  let result = 0;
  for(let item in cart){
    const product = cart[item];
    result += (product.priceInCents * product.quantity);
  }
  return result;
}

function printReceipt(cart){
  if(isEmpty(cart)) return null;
  let result = "";
  let total = printablePrice(calculateTotal(cart));
  for(let item in cart){
    let product = cart[item];
    result += `${product.quantity}x${item} - ${printablePrice(product.priceInCents * product.quantity)}\n`;
  }
  result+= `Total: ${total}`
  return result;
}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};