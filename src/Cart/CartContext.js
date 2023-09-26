// // CartContext.js
// import React, { createContext, useContext, useReducer } from 'react';

// const CartContext = createContext();

// const initialState = {
//   cart: [],
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return {
//         ...state,
//         cart: [...state.cart, action.payload],
//       };
//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         cart: state.cart.filter((item) => item.id !== action.payload.id),
//       };
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };

//  last modification
// CartContext.js
// import React, { createContext, useContext, useReducer } from 'react';

// const initialState = {
//   cart: [],
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const { id, title, price, image } = action.payload;
//       const existingItemIndex = state.cart.findIndex((item) => item.id === id);

//       if (existingItemIndex !== -1) {
//         // If the product already exists in the cart, update its quantity
//         const updatedCart = [...state.cart];
//         updatedCart[existingItemIndex].quantity += 1;
//         return { ...state, cart: updatedCart };
//       } else {
//         // If the product is not in the cart, add it with a quantity of 1
//         const newItem = { id, title, price, image, quantity: 1 };
//         return { ...state, cart: [...state.cart, newItem] };
//       }

//     case 'REMOVE_FROM_CART':
//       const updatedCart = state.cart.filter((item) => item.id !== action.payload.id);
//       return { ...state, cart: updatedCart };

//     case 'INCREASE_QUANTITY':
//       const increasedCart = state.cart.map((item) => {
//         if (item.id === action.payload.id) {
//           return { ...item, quantity: item.quantity + 1 };
//         }
//         return item;
//       });
//       return { ...state, cart: increasedCart };

//     case 'DECREASE_QUANTITY':
//       const decreasedCart = state.cart.map((item) => {
//         if (item.id === action.payload.id && item.quantity > 1) {
//           return { ...item, quantity: item.quantity - 1 };
//         }
//         return item;
//       });
//       return { ...state, cart: decreasedCart };

//     default:
//       return state;
//   }
// };

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };

// local storage

import React, { createContext, useContext, useReducer, useEffect } from 'react';

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return { cart: action.payload };
    case 'ADD_TO_CART':
      const { id, title, price, image } = action.payload;
      const existingItemIndex = state.cart.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        // If the product already exists in the cart, update its quantity
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        const newItem = { id, title, price, image, quantity: 1 };
        return { ...state, cart: [...state.cart, newItem] };
      }
    case 'REMOVE_FROM_CART':
      const updatedCart = state.cart.filter((item) => item.id !== action.payload.id);
      return { ...state, cart: updatedCart };
    case 'INCREASE_QUANTITY':
      const increasedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return { ...state, cart: increasedCart };
    case 'DECREASE_QUANTITY':
      const decreasedCart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return { ...state, cart: decreasedCart };
    default:
      return state;
  }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart data from local storage when the component mounts
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch({ type: 'SET_CART', payload: cartData });
  }, []);

  // Save cart data to local storage whenever the cart state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
