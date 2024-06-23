import{ Routes,Route} from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Contact from './pages/Contact';
import Register from './pages/Auth/register';
import Login from './pages/Auth/Login';
import Dashborad from './pages/Auth/dashborad';
import Reset from './pages/Auth/reset';
import ResetNewPassword from '../src/components/layout/ResetNewPassword';
import Category from './pages/Category';

import Products from './pages/Products';

function App() {
  return (

   <Routes>
    <Route path='/' element = {<HomePage />} />
    <Route path='/about' element = {<About />} />
    <Route path='/register' element = {<Register />} />
    <Route path='/products' element = {<Products />} />
    <Route path='/login' element = {<Login />} />
    <Route path='/login/reset' element = {<Reset />} />
    <Route path='/login/reset-password' element = {<ResetNewPassword />} />
    <Route path='/contact' element = {<Contact />} />
    <Route path='/dashborad' element = {<Dashborad />} />
    <Route path='/category' element = {<Category />} />
    <Route path='/policy' element = {<Policy />} />
    <Route path='*' element = {<Pagenotfound />} />
   </Routes>
  );
}

export default App;
