// // FavoriteProductsContext.js
// import React, { createContext, useContext, useReducer } from 'react';

// // Define the initial state of the favorite products list
// const initialState = {
//   favorites: [],
// };

// // Create a context for the favorite products list
// const FavoriteProductsContext = createContext(initialState);

// // Define the favorite products reducer
// const favoriteProductsReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_FAVORITES':
//       return {
//         ...state,
//         favorites: [...state.favorites, action.payload],
//       };
//     case 'REMOVE_FROM_FAVORITES':
//       return {
//         ...state,
//         favorites: state.favorites.filter(item => item.id !== action.payload.id),
//       };
//     default:
//       return state;
//   }
// };

// // Create a FavoriteProductsProvider component
// export const FavoriteProductsProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(favoriteProductsReducer, initialState);

//   return (
//     <FavoriteProductsContext.Provider value={{ state, dispatch }}>
//       {children}
//     </FavoriteProductsContext.Provider>
//   );
// };

// // Create a custom hook for accessing the favorite products context
// export const useFavoriteProducts = () => {
//   return useContext(FavoriteProductsContext);
// };


// localStorage

import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Define the initial state of the favorite products list
const initialState = {
  favorites: [],
};

// Create a context for the favorite products list
const FavoriteProductsContext = createContext(initialState);

// Define the favorite products reducer
const favoriteProductsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== action.payload.id),
      };
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};

// Create a FavoriteProductsProvider component
export const FavoriteProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteProductsReducer, initialState);

  // Load favorites data from local storage when the component mounts
  useEffect(() => {
    const favoritesData = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch({ type: 'SET_FAVORITES', payload: favoritesData });
  }, []);

  // Save favorites data to local storage whenever the favorites state changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <FavoriteProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoriteProductsContext.Provider>
  );
};

// Create a custom hook for accessing the favorite products context
export const useFavoriteProducts = () => {
  return useContext(FavoriteProductsContext);
};
