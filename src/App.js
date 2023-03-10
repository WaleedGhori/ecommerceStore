
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import { Provider } from 'react-redux';
import store from './store/store'
function App() {
  return (
    <div className="">
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Product/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/products/:id' element={<ProductDetails/>}></Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
