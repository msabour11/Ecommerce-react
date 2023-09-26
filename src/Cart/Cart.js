// Cart.js
// import React from 'react';
// import { useCart } from './CartContext';

// const Cart = () => {
//   const { state, dispatch } = useCart();

//   const removeFromCart = (item) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: item });
//   };

//   return (
//     <div>
//       <h2>Cart</h2>
//       <ul>
//         {state.cart.map((item) => (
//           <li key={item.id}>
//             <img src={item.image} alt={item.title} />
//             {item.title} - ${item.price}
//             <button onClick={() => removeFromCart(item)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;

// last modification
// Cart.js
// import React from 'react';
// import { useCart } from './CartContext';

// const Cart = () => {
//   const { state, dispatch } = useCart();

//   const removeFromCart = (item) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: item });
//   };

//   const increaseQuantity = (item) => {
//     dispatch({ type: 'INCREASE_QUANTITY', payload: item });
//   };

//   const decreaseQuantity = (item) => {
//     dispatch({ type: 'DECREASE_QUANTITY', payload: item });
//   };

//   // Calculate the total cart price
//   const totalCartPrice = state.cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div>
//       <h2>Cart</h2>
//       <ul>
//         {state.cart.map((item) => (
//           <li key={item.id}>
//             <img src={item.image} alt={item.title} />
//             {item.title} - ${item.price} x
//             <button onClick={() => decreaseQuantity(item)}>-</button>
//             {item.quantity}
//             <button onClick={() => increaseQuantity(item)}>+</button>
//             <button onClick={() => removeFromCart(item)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <p>Total Price: ${totalCartPrice}</p>
//     </div>
//   );
// };

// export default Cart;

// import React from 'react';
// import { useCart } from './CartContext';

// const Cart = () => {
//   const { state, dispatch } = useCart();

//   const removeFromCart = (item) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: item });
//   };

//   const increaseQuantity = (item) => {
//     dispatch({ type: 'INCREASE_QUANTITY', payload: item });
//   };

//   const decreaseQuantity = (item) => {
//     dispatch({ type: 'DECREASE_QUANTITY', payload: item });
//   };

//   // Calculate the total cart price
//   const totalCartPrice = state.cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center">Cart</h2>
//       <div className="row">
//         <div className="col-md-8">
//           <ul className="list-group">
//             {state.cart.map((item) => (
//               <li key={item.id} className="list-group-item">
//                 <div className="d-flex align-items-center">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="mr-3"
//                     style={{ width: '80px', height: '80px', objectFit: 'cover' }}
//                   />
//                   <div>
//                     <h5>{item.title}</h5>
//                     <p>${item.price} x {item.quantity}</p>
//                     <div className="btn-group">
//                       <button
//                         className="btn btn-secondary"
//                         onClick={() => decreaseQuantity(item)}
//                       >
//                         -
//                       </button>
//                       <button className="btn btn-light">{item.quantity}</button>
//                       <button
//                         className="btn btn-secondary"
//                         onClick={() => increaseQuantity(item)}
//                       >
//                         +
//                       </button>
//                     </div>
//                     <button
//                       className="btn btn-danger mt-2"
//                       onClick={() => removeFromCart(item)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="col-md-4">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">Total Price</h5>
//               <p className="card-text">${totalCartPrice.toFixed(2)}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



// locall storage


import React, { useEffect } from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  // Load cart data from local storage when the component mounts
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch({ type: 'SET_CART', payload: cartData });
  }, [dispatch]);

  // Save cart data to local storage whenever the cart state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const increaseQuantity = (item) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: item });
  };

  const decreaseQuantity = (item) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: item });
  };

  // Calculate the total cart price
  const totalCartPrice = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center">Cart</h2>
      <ul className="list-group">
        {state.cart.map((item) => (
          <li key={item.id} className="list-group-item">
            <div className="d-flex align-items-center">
              <img
                src={item.image}
                alt={item.title}
                className="mr-3"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <div>
                <h5>{item.title}</h5>
                <p>${item.price} x {item.quantity}</p>
                <div className="btn-group">
                  <button
                    className="btn btn-secondary"
                    onClick={() => decreaseQuantity(item)}
                  >
                    -
                  </button>
                  <button className="btn btn-light">{item.quantity}</button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => increaseQuantity(item)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalCartPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
