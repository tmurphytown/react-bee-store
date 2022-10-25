import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { ProductProvider } from './ProductContext';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(

  <ProductProvider>
    <App />
  </ProductProvider>

)





