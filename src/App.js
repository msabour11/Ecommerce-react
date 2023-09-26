

// import './App.css';
// import Card from './Pages/Card';

// // import Button from './Button';
// import Form1 from './Pages/Form1';
// import NotFound from './Pages/NotFound'

// import { BrowserRouter,Router,Switch } from 'react-router-dom'
// import { Route } from 'react-router-dom/cjs/react-router-dom.min';
// import Home from './Pages/Home';
// import Nav from './Components/Nav';
// import Movies from './Pages/Product'
// import ViewMovies from './Pages/ViewMovies';
// import Product from './Pages/Product';
// import { CartProvider } from './Cart/CartContext';
// import Cart from './Cart/Cart';
// import { FavoriteProductsProvider } from './Favourite/FavoriteProductsContext';
// import FavoriteProductsPage from './Favourite/FavoriteProductsPage';

// function App() {
//   return (
//     <>
   
//     <BrowserRouter>
//     <Nav/>
//     <CartProvider>
//       <FavoriteProductsProvider>
//     <Switch>
//     <Route exact path='/' component={Home}/>
    
//     <Route exact path='/card' component={Card}/>
    
//     <Route exact path='/login' component={Form1}/>
//     <Route exact path='/movies' component={Product}/>
//     <Route exact path='/view/:id' component={ViewMovies}/>
    
//     <Route exact path='/cart' component={Cart}/>
//     <Route exact path='/list' component={FavoriteProductsPage}/>

//     <Route exact path="*" component={NotFound}/>
//     </Switch>
//     </FavoriteProductsProvider>
//     </CartProvider>
//     </BrowserRouter>
   
//     </>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Card from './Pages/Card';
import Form1 from './Pages/SignIn';
import NotFound from './Pages/NotFound';
import Nav from './Components/Nav';
import Product from './Pages/Product';
import ViewMovies from './Pages/ViewMovies';
import { CartProvider } from './Cart/CartContext';
import Cart from './Cart/Cart';
import { FavoriteProductsProvider } from './Favourite/FavoriteProductsContext';
import FavoriteProductsPage from './Favourite/FavoriteProductsPage';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <CartProvider>
        <FavoriteProductsProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/card" component={Card} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/view/:id" component={ViewMovies} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/list" component={FavoriteProductsPage} />
            <Route exact path="/signup" component={SignUp} />

            <Route component={NotFound} />
          </Switch>
        </FavoriteProductsProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
