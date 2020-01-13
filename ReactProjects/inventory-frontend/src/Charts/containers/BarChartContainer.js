import React, { useState } from 'react'
import BarChart from '../components/BarChart'
import { DataFetcher } from '../../API/dataFetcher';

const BarChartContainer = () => {
  const  [chartData, setChartData] = useState([]);

  const DataFetch = () => {
    DataFetcher((err, data) => {
      
    })
  };

    return(
        <div className="container">
            <div style={{width:950, height:600}}>
                <h3 className="text-center">Inventory Amount</h3>
                <BarChart data={data}/>
            </div>
        </div>
    );
}

export default BarChartContainer;

const data = [
    {
      "product": "12V RK 100Ah S",
      "quantity": "395",
      "unit": "pcs",
      "Amount": 33693880
    },
    {
      "product": "12V RK YT 7Ah",
      "quantity": "713.38",
      "unit": "box",
      "Amount": 68627700
    },
    {
      "product": "12V BK 40Ah",
      "quantity": "20",
      "unit": "pcs",
      "Amount": 840000
    },
    {
      "product": "12V RK 60Ah",
      "quantity": "197",
      "unit": "pcs",
      "Amount": 12022128
    },
    {
      "product": "12V RK 50Ah",
      "quantity": "357",
      "unit": "pcs",
      "Amount": 19452820
    },
    {
      "product": "12V 36Ah",
      "quantity": "6",
      "unit": "box",
      "Amount": 150000
    },
    {
      "product": "12V RK 40Ah",
      "quantity": "103900",
      "unit": "pcs",
      "Amount": 43533820,
      // "productColor": "#335191",
    },
    {
      "product": "12V RK YT 4Ah",
      "quantity": "497060",
      "unit": "box",
      "Amount": 421946574
    },
    {
      "product": "12V BK 50Ah",
      "quantity": "6",
      "unit": "pcs",
      "Amount": 312000
    },
    {
      "product": "12V 7Ah",
      "quantity": "66.8",
      "unit": "box",
      "Amount": 3625500
    },
  ]