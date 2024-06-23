import React from 'react'
import '../pages/product.css';

const Products = () => {
  return (
    <>
        <div>
       <title>Product List and Grid View</title>
<meta name ="viewport" content="width=device-width, user-scalable=no, initial=scale=1.0, maximun-scale=1.0, minimun-scale=1.0" >
</meta>
<h1>Product List and Grid View</h1>

 <div className="buttons">
<i className="fa fa-th-large"  id="showdiv1" aria-hidden="true"></i> &nbsp;  <i className="fa fa-th-list" id="showdiv2" aria-hidden="true"></i> 
</div>

<div className="container">
 
  <div id="div1">
    <section className="section-grid">
    <div className="grid-prod">
     <div className="prod-grid">
        <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
       <h3>Ph'nglui mglw'nafh. </h3>    
            <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. </p>
 <button className="btn"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
     </div>
     <div className="prod-grid">
        <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
       <h3>Ph'nglui mglw'nafh. </h3>    
            <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
 <button className="btn"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
     </div>
      <div className="prod-grid">
        <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
       <h3>Ph'nglui mglw'nafh. </h3>    
            <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
 <button className="btn"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
     </div>
      <div className="prod-grid">
        <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
       <h3>Ph'nglui mglw'nafh. </h3>    
            <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
 <button className="btn"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
     </div>
      <div className="prod-grid">
        <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
       <h3>Ph'nglui mglw'nafh. </h3>    
            <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
 <button className="btn"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
     </div>
      <div className="prod-grid">
        <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
       <h3>Ph'nglui mglw'nafh. </h3>    
            <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
 <button className="btn"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
     </div>
    </div>
     </section> 
  </div>
      
  <div id="div2" style="">
    <section className="section-list">
      <table>
        <tr>
          <td>
            <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita">
            </img>
          </td>
          <td>  <h3>Ph'nglui mglw'nafh. </h3>    
            <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
           <button className="btn-list"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button></td>
        </tr>
        <tr>
          <td width="30%">
            <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
           </td>
          <td>  <h3>Ph'nglui mglw'nafh. </h3>    
            <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
           <button className="btn-list"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button></td>
        </tr>
        <tr>
          <td width="30%">
            <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
          </td>
          <td>
            <h3>Ph'nglui mglw'nafh. </h3>    
            <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
           <button className="btn-list"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
           </td>
        </tr>
        <tr>
          <td width="30%">
            <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
          </td>
          <td>  <h3>Ph'nglui mglw'nafh. </h3>    
            <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
           <button className="btn-list"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button></td>
        </tr>
        <tr>
          <td width="30%">
            <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita">
            </img>
          </td>
          <td>  <h3>Ph'nglui mglw'nafh. </h3>    
            <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
           <button className="btn-list"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button></td>
        </tr>
        <tr>
          <td width="30%"><img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"><td>
          <td>  <h3>Ph'nglui mglw'nafh. </h3>    
            <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
           <button className="btn-list"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button></td>
        </td></img></td></tr>
      </table>
     </section> 
  </div>
</div>  
    

    </div>
    
    </>
    
  )
}

export default Products
