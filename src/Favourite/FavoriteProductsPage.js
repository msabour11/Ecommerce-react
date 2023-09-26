// // FavoriteProductsPage.js
// import React from 'react';
// import { useFavoriteProducts } from '../Favourite/FavoriteProductsContext';

// const FavoriteProductsPage = () => {
//   const { state } = useFavoriteProducts();

//   return (
//     <div>
//       <h1>Favorite Products</h1>
//       <ul>
//         {state.favorites.map((favorite) => (
//           <li key={favorite.id}>
//             <img src={favorite.image} alt={favorite.title} />
//             <h3>{favorite.title}</h3>
//             <p>${favorite.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default FavoriteProductsPage;


// Last modification
// import React from 'react';
// import { useFavoriteProducts } from '../Favourite/FavoriteProductsContext';

// const FavoriteProductsPage = () => {
//   const { state, dispatch } = useFavoriteProducts();

//   const removeFromFavorites = (product) => {
//     // Dispatch an action to remove the product from favorites
//     dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product });
//   };

//   return (
//     <div>
//       <h1>Favorite Products</h1>
//       <ul>
//         {state.favorites.map((favorite) => (
//           <li key={favorite.id}>
//             <img src={favorite.image} alt={favorite.title} />
//             <h3>{favorite.title}</h3>
//             <p>${favorite.price}</p>
//             <button onClick={() => removeFromFavorites(favorite)}>
//               Remove from Favorites
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FavoriteProductsPage;

// import React from 'react';
// import { useFavoriteProducts } from '../Favourite/FavoriteProductsContext';

// const FavoriteProductsPage = () => {
//   const { state, dispatch } = useFavoriteProducts();

//   const removeFromFavorites = (product) => {
//     // Dispatch an action to remove the product from favorites
//     dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product });
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center">Favorite Products</h1>
//       <div className="row">
//         {state.favorites.map((favorite) => (
//           <div key={favorite.id} className="col-md-4 mb-4">
//             <div className="card h-100">
//               <img
//                 src={favorite.image}
//                 alt={favorite.title}
//                 className="card-img-top"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{favorite.title}</h5>
//                 <p className="card-text">${favorite.price}</p>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => removeFromFavorites(favorite)}
//                 >
//                   Remove from Favorites
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FavoriteProductsPage;


// local storage
import React, { useEffect } from 'react';
import { useFavoriteProducts } from '../Favourite/FavoriteProductsContext';

const FavoriteProductsPage = () => {
  const { state, dispatch } = useFavoriteProducts();

  // Load favorite products data from local storage when the component mounts
  useEffect(() => {
    const favoritesData = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch({ type: 'SET_FAVORITES', payload: favoritesData });
  }, [dispatch]);

  // Save favorite products data to local storage whenever the favorites state changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }, [state.favorites]);

  const removeFromFavorites = (product) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Favorite Products</h1>
      <div className="row">
        {state.favorites.map((favorite) => (
          <div key={favorite.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={favorite.image}
                alt={favorite.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{favorite.title}</h5>
                <p className="card-text">${favorite.price}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromFavorites(favorite)}
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteProductsPage;
