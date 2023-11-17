// src/App.js

import React from 'react';
import ButtonDesign from './ReactDay-4/ButtonDesign';
function App() {
  return (
    <div><center>
      <h1>React Mateirial-UI Login Example</h1>
      <ButtonDesign /></center>
    </div>
  );
}
export default App;
/*/import React from 'react';
import FruitSurvey from "./ReactDay-4/FruitSurvey";
function App() {
  return (
    <div>
      <h1>Student Greeting Form</h1>
      <FruitSurvey />
    </div>
  );
}
export default App;/*/
 /*/ import React from 'react';
import Goku from "./ReactDayThree/Goku";
function App() {
  return (
    <div>
      <Goku />
    </div>
  );
}

export default App;/*/
/*/import React from 'react';
import SignIn from './Project/SignIn';

function App() {
  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;/*/

/*/import React from 'react'
import Login from './Project/Login'
const App = () => {
  return (
    <div>
      <Login/>
    </div>
  )
}
/
export default App;/*/

/*/import React from 'react'
import Toggle from './ReactDayThree/Toggle'

const App = () => {
  return (
    <div><Toggle/></div>
  )
}

export default App

/*/
/*/------------------------------------------------------------------------------------------------
import React from 'react'
import InlineStyles from './components/InlineStyles'

const App = () => {
  return (
    <div>
      <InlineStyles/>
  </div>
  )
}
export default App
-----------------------------------------------------------------------------
/*/
/*/import React from 'react'
import Hello from'./components/Hello'
const App = () => {
  return (
    <div>
      <Hello/>
    </div>
  )
}

export default App;
-----------------------------------------------------------------------------------------------
/*/
/*/import "./App.css";

import { useState } from "react";
import Cart from "./CoffeeShop/Cart";
import Menu from "./CoffeeShop/Menu";
import Navbar from "./CoffeeShop/Navbar";
import categories from "./CoffeeShop/products";

function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [products, setProducts] = useState([]);

  const handleClick = (index) => {
    setActiveCategory(categories[index]);
  };

  const handleAddToCart = (item) => {
    setProducts([...products, item]);
  };

  return (
    <div className="space-y-4 my-4">
      <Navbar category={categories} handleClick={handleClick} />
      <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
      <Cart products={products} />
    </div>
  );
}

export default App;
-------------------------------------------------------------------------------------------
/*/

/*/import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
     <Navbar/>
     <Main/>
     <Footer/>

    </div>
  );
};
export default App;
-----------------------------------------------------------------------------------------------------------------
/*/
/*/import Count from "./ReactDayThree/Count";
function App() {
  return (
    <div>
      <Count/>
     

    </div>
  );
};

export default App;

/*/