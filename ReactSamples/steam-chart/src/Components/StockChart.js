import React from 'react'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import data from '../data.json'
import data2 from '../data2.json'

const options = {
  chart: {
    // style: {
    //   color:'#e2e8ef'
    // },
    renderTo: 'container',
    backgroundColor: {
        radialGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
        stops: [
            [0, '#868f96'],
            [1, '#120C6E']
        ]
    },
    type: 'line'
  },
    title: {
      text: ""
    },
    series: [
      {
        data: data
      },
      {
        data:data2
      }
    ]
};

const StockChart = () => {
    return(
     <div>  
        <h2>Stock Chart</h2>
        <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
            />
    </div>
   
    )
}

export default StockChart;