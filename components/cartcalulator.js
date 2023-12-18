// import { useState, useEffect } from "react";


// const [cart, setCart] = useState({});
//   let [subTotal, setsubTotal] = useState(0);

//   useEffect(() => {
//     try {
//       if (localStorage.getItem("cart")) {
//         setCart(JSON.parse(localStorage.getItem("cart")));
//       }
//     } catch {
//       console.error("some error occured");
//       localStorage.clear();
//     }
//   }, []);

//   // saving card to local storage
//   const saveCart = (myCart) => {
//     localStorage.setItem("cart", myCart);

//     // setting total
//     let subtotal = 0;
//     let key = Object.keys(setCart);

//     for (let i = 0; i > key.length; i++) {
//       subtotal = setCart[key[i]].price * setCart[key[i]].qty;
//     }
//     setsubTotal(subtotal);
//   };

//   // add to cart
//   const addToCart = (itemCode, qty, price, name, size, varient) => {
//     let newCart = cart;
//     if (itemCode in cart) {
//       newCart[itemid].qty = cart[itemCode].qty + qty;
//     } else {
//       newCart[itemid] = { quantity: 1, price, name, size, varient };
//     }

//     setCart(newCart);
//     saveCart(newCart);
//   };

//   // clear cart
//   const clearCart = () => {
//     setCart({});
//     saveCart({});
//   };

//   // remove from cart
//   const removeFromCart = (itemCode, quantity, size, price, varient) => {
//     let newCart = cart;
//     if (itemCode in cart) {
//       newCart[itemid].qty = cart[itemCode].qty + qty;
//     }
//     if (newCart["qty"] <= 0) {
//       delete newCart[itemCode];
//     }

//     setCart(newCart);
//     saveCart(newCart);
//   };


//   module.exports={
//     cart,
//     addToCart,
//     removeFromCart,
//     saveCart,
//     clearCart
//   }