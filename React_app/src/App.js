import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React from 'react';

function App() {
  return (
    <>
      
{/* <Navbar /> */}

<Navbar title="TextUtils"   aboutText="About the text"/>
{/* The class container in bootstrap consists styling where its like a container placed.
Here we can see that there is spacing created in our page. */}
<div className="container my-3">    
  <Textform heading="Enter the text to analyze below:"/>
</div>
<About/>

    </>
  );
}


export default App;
