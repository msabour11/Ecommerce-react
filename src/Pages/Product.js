



// Product.js
// import React, { useEffect, useState } from 'react';
// import { useCart } from '../Cart/CartContext';

// const Product = () => {
//   const { state, dispatch } = useCart();
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);

//   const handleAddToCart = (product) => {
//     dispatch({ type: 'ADD_TO_CART', payload: product });
//   };

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Favourites

//   return (
//     <div>
//       <h1>Products</h1>
//       <input
//         type="text"
//         placeholder="Search by title..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>
//             <img src={product.image} alt={product.title} />
//             <h3>{product.title}</h3>
//             <p>${product.price}</p>
//             <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Product;

// Last modification  

// import React, { useEffect, useState } from 'react';
// import { useCart } from '../Cart/CartContext';
// import { useFavoriteProducts } from '../Favourite/FavoriteProductsContext';

// const Product = () => {
//   const { state: cartState, dispatch: cartDispatch } = useCart();
//   const { state: favoriteState, dispatch: favoriteDispatch } = useFavoriteProducts();
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);

//   const handleAddToCart = (product) => {
//     cartDispatch({ type: 'ADD_TO_CART', payload: product });
//   };

//   const isFavorite = (product) => {
//     return favoriteState.favorites.some((item) => item.id === product.id);
//   };

//   const toggleFavorite = (product) => {
//     if (isFavorite(product)) {
//       favoriteDispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product });
//     } else {
//       favoriteDispatch({ type: 'ADD_TO_FAVORITES', payload: product });
//     }
//   };

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Products</h1>
//       <input
//         type="text"
//         placeholder="Search by title..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>
//             <img src={product.image} alt={product.title} />
//             <h3>{product.title}</h3>
//             <p>${product.price}</p>
//             <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//             <button onClick={() => toggleFavorite(product)}>
//               {isFavorite(product) ? 'Remove from Favorites' : 'Add to Favorites'}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Product;


import React, { useEffect, useState } from 'react';
import { useCart } from '../Cart/CartContext';
import { useFavoriteProducts } from '../Favourite/FavoriteProductsContext';

const Product = () => {
  const { state: cartState, dispatch: cartDispatch } = useCart();
  const { state: favoriteState, dispatch: favoriteDispatch } = useFavoriteProducts();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const isFavorite = (product) => {
    return favoriteState.favorites.some((item) => item.id === product.id);
  };

  const toggleFavorite = (product) => {
    if (isFavorite(product)) {
      favoriteDispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product });
    } else {
      favoriteDispatch({ type: 'ADD_TO_FAVORITES', payload: product });
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center">Products</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 d-flex flex-column">
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className="card-body d-flex flex-column flex-fill">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <button
                  className="btn btn-primary mb-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className={`btn ${
                    isFavorite(product) ? 'btn-danger' : 'btn-success'
                  }`}
                  onClick={() => toggleFavorite(product)}
                >
                  {isFavorite(product) ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
