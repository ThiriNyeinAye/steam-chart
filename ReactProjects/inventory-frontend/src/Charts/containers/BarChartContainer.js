import React, { useState, useEffect } from 'react'
import BarChart from '../components/BarChart'
import { DataFetcher } from '../../API/dataFetcher';

const BarChartContainer = () => {
  // const { data, key } = props;
  const  [chartData, setChartData] = useState([]);
  const data = chartData;
  const DataFetch = () => {
    DataFetcher((err, data) => {
      console.log('Data => ',data.payload);
      setChartData(data.payload);
    });
  };

  useEffect(() => {
    DataFetch();
  }, []);
  console.log('chartData => ',chartData)

    return(
        <div className="container">
            <div style={{width:950, height:800}}>
                <h3 className="text-center">Inventory Amount</h3>
                  <BarChart data={data}/>
            </div>
        </div>
    );
}

export default BarChartContainer;

// const data = [
//     {
//       "product": "12V RK 100Ah S",
//       "Amount": 33693880
//     },
//     {
//       "product": "12V RK YT 7Ah",
//       "Amount": 68627700
//     },
//     {
//       "product": "12V BK 40Ah",
//       "Amount": 840000
//     },
//     {
//       "product": "12V RK 60Ah",
//       "Amount": 12022128
//     },
//     {
//       "product": "12V RK 50Ah",
//       "Amount": 19452820
//     },
//     {
//       "product": "12V 36Ah",
//       "Amount": 150000
//     },
//     {
//       "product": "12V RK 40Ah",
//       "Amount": 43533820,
//       // "productColor": "#335191",
//     },
//     {
//       "product": "12V RK YT 4Ah",
//       "Amount": 421946574
//     },
//     {
//       "product": "12V BK 50Ah",
//       "Amount": 312000
//     },
//     {
//       "product": "12V 7Ah",
//       "Amount": 3625500
//     },
//   ]