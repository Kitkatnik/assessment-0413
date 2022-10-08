/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
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
      availableSizes: [5.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
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
  
  function chooseItemByNameAndSize(products, name, size) {
  
    let result = null;
  
    for(let i = 0; i < products.length; i++) {
      const product = products[i];
      
      if(product.name === name){
        for(let j = 0; j < product.availableSizes.length; j++) {
          if(product.availableSizes[j] == size) result = product;
        }
      }
    }
  
    return result;
  }
  
  function addProductToCart({name,priceInCents,availableSizes}, cart = {}) {
  
    if (Object.keys(cart).length === 0) {
      cart[name] = { quantity: 1, priceInCents: priceInCents}
      return cart;
    };
  
    let newQuantity = 1;
  
    for(let items in cart){
      const item = cart[items];
      console.log(items);
      console.log(item);
      if(items == name){
        newQuantity += item.quantity;
      }
    }
  
    cart[name] = { quantity: newQuantity, priceInCents: priceInCents };
    return cart;
    
  }
  
  // console.log(addProductToCart(products[0]));
  console.log(addProductToCart(products[2],cart));
  
  function calculateTotal(cart = {}) {
    let result = 0;
  
    if(Object.keys(cart).length == 0){
      return result;
    }
  
    for (let items in cart){
      const item = cart[items];
      result += item.priceInCents * item.quantity;
    }
  
    console.log(cart);
    return result;
  
  
  }
  
  // console.log(calculateTotal({}));
  // console.log(calculateTotal(cart));
  
  function printReceipt(cart = {}) {
  
    let result = [];
    let total = 0;
  
    if(Object.keys(cart).length == 0) return null;
  
    for(let i = 0; i < Object.keys(cart).length; i++){
      const name = Object.keys(cart)[i];
      const item = cart[name];
      const price = printablePrice(item.priceInCents*item.quantity);
      
      total += item.priceInCents*item.quantity;
  
      result.push(`${item.quantity}x${name} - ${price}`)
    }
    return `${result.join("\n")}\nTotal: ${printablePrice(total)}`
  
  }
  
  // console.log(printReceipt({}));
  console.log(printReceipt(cart));