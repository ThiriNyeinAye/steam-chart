import React from "react";
// import MapChart from './Components/MapChart'
// import StockChart from './Components/StockChart'
// import SplineChart from './Components/SplineChart'
// import CandleStickChart from './Components/CandleStickChart'
import HighChart from './Components/highChart'
import MultiLineChart from './Components/MultiLineChart'
// import CandleChart from './Components/candleChart'
// import SpiderChart from './Components/SpiderChart'
// import BellCurve from './Components/BellCurve'
import './App.css';

const App = () => (
  <div className="container">

        <HighChart />
        <br /><br />
        <MultiLineChart />
        {/* <CandleChart />
        <br />  */}
        {/* <SpiderChart />
        <br /><br />
        <BellCurve /> */}
        {/* <StockChart />
        <MapChart />
        <SplineChart /> */}
  </div>
  
);

export default App;