import React, { useState, useEffect } from "react";

const Calculations = () => {
  const [cart, setCart] = useState();
  let [Total, setTotal] = useState();

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch {
      console.error("some error occurred");
      localStorage.clear();
    }
  }, []);

  // saving card to local storage
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart)); // Fix here

    // setting total
    let subtotal = 0;
    let key = Object.keys(myCart); // Fix here

    for (let i = 0; i < key.length; i++) { // Fix here
      subtotal = myCart[key[i]].price * myCart[key[i]].qty; // Fix here
    }
    setTotal(subtotal);
  };

  // add to cart
  const addToCart = (itemCode, qty, price, name, size, varient) => {
    let newCart = { ...cart }; // Fix here
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { quantity: 1, price, name, size, varient };
    }

    setCart(newCart);
    saveCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  // remove from cart
  const removeFromCart = (itemCode, quantity, size, price, varient) => {
    let newCart = { ...cart }; // Fix here
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + quantity; // Fix here
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }

    setCart(newCart);
    saveCart(newCart);
  };

  return <div></div>;
};

export default Calculations;
