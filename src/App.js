import React, { Fragment, useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home/Home';
import Beers from './components/pages/AllBeers/Beers';
import RandomBeer from './components/pages/RandomBeer/RandomBeer';
import NewBeer from "./components/pages/NewBeer/NewBeer";
import SingleBeer from './components/pages/SingleBeer/SingleBeer'
import Navbar from './components/Navbar/Navbar';
import Layout from './UI/Layout';


function App() {
  return (
    <div className="App items-center justify-center">
      <Navbar/>
      <Layout>
        <Routes>

            <Route index element={<Home />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:beerId" element={<SingleBeer />} />
            
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} />
          
        </Routes>
      </Layout>
      
    </div>
  );
}

export default App;
