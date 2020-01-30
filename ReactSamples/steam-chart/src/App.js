import React from "react";
import MapChart from './Components/MapChart'
import StockChart from './Components/StockChart'
import SplineChart from './Components/SplineChart'
import CandleStickChart from './Components/CandleStickChart'
import HighChart from './Components/highChart'
import CandleChart from './Components/candleChart'
import SpiderChart from './Components/SpiderChart'
import './App.css';

const App = () => (
  <div className="container">

        <HighChart />
        <br />
        <CandleChart />
        <br />
        <SpiderChart />
        {/* <StockChart />
        <MapChart />
        <SplineChart /> */}
  </div>
  
);

export default App;