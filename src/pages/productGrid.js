import React from 'react'
import Layout from '../components/layout/Layout'
import Newcard from './Newcard';
import Popularproject from './Popularproject';
import Testmonial from './testmonial';
import Gallery from './Gallery';
import Products from './Products';
import Footer from '../components/layout/Footer';
import Menu from '../components/layout/Menu';
import Header from '../components/layout/Header';



 const productGrid = () => {
 
  return (
    <>
    <Header />
  
        <h1 style={{textTransform: "uppercase",fontWeight:"400",fontSize:"30px",alignContent:"center",letterSpacing:"3px", paddingBottom: "25px",paddingTop:"60px"}}>BEST OF ARTVISTA</h1>

      <Products />
    <Footer />
    
    
    </>
  
      
     
  )
}

export default productGrid;