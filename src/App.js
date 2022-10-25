import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import BeeCarousel from './Home';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';
import StoreItems from './Store';
import CreateProduct from './Create';
import AboutUs from './About';
import Product from './Products';
import Search from './Search';
import './global.css'
import { Redirect } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav style={{display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
            <div>
            <LinkContainer to="/">
              <img src='/assets/BeeLogoWhite.png' className='w-25' />
              </LinkContainer>
            </div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/About" className="nav-link">About Us</Link>
            <Link to="/Store" className="nav-link">Store</Link>
            <Link to="/Create/" className="nav-link">Create</Link>
            <SearchBar/>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route index element={<BeeCarousel />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Store" element={<StoreItems />} />
        <Route index element={<p>Select a product for more details</p>} />
        <Route path="/Create" element={<CreateProduct />} />
        <Route path="/Store/:productId" element={<Product />} />
        <Route path="/Store/:productId/edit" element={<CreateProduct />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Store" onClick={<StoreItems />} />
        <Route path="*" element={<StoreItems/>} />
      </Routes>
    </BrowserRouter>

  );
}


function SearchBar() {


  return <form action="/Search" method='get' ><input type= "text" name="query" placeholder= "Search..." /></form>
}

export default App;





