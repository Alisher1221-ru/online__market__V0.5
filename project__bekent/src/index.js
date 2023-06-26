import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import { ChakraProvider } from '@chakra-ui/react';
import Cart from './Cart/Cart';
import Header from './header/Header';
import Footer from './Footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Header/>
    <Cart/>
    <Footer/>
  </ChakraProvider>
)
