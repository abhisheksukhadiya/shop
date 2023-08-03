import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Pages/Index';
import Layout from './Layout/Layout';
import About from './Pages/About';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Index/>} />
                <Route path='/About' element={<About/>}/>
                <Route path='/Product' element={<Product/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/Blog' element={<Blog/>}/>
                <Route path='/Cart' element={<Cart/>}/>
                <Route path='/Checkout' element={<Checkout/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
