// import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import LayoutUser from './layout/user';
import LayoutAdmin from './layout/Admin';
import CartProvider from './context/cartContext';
import Checkout from './components/Checkout';
import Home from './components/Home';
import ListProduct from './components/ProductList';
import Detail from './components/Detail';
import Cart from './components/cart';

function App() {
  const routes = useRoutes([
    {
      path: '',
      element: (
        <CartProvider>
          <LayoutUser />
        </CartProvider>
      ),
      children: [
        { path: '', Component: Home },
        { path: 'products', Component: ListProduct },
        { path: 'product/:id', Component: Detail },
        { path: 'cart', Component: Cart },
        { path: 'checkout', element:<Checkout /> }
      ],
    },
    {
      path: 'admin',
      Component: LayoutAdmin,
      children: [
        // { path: 'list', element:<Products products={products}/> },
      ],
    },
  ]);

  return routes
}

export default App;
