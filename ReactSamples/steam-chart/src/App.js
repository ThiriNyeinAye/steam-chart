import React from "react";
import MapChart from './Components/MapChart'
import StockChart from './Components/StockChart'
import SplineChart from './Components/SplineChart'
import './App.css';

const App = () => (
  <div className="container">
        <StockChart />
        <MapChart />
        <SplineChart />
  </div>
  
);

export default App;