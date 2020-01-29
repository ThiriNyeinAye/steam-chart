import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import mapDataAsia from './mapDataAsia';

require('highcharts/modules/map')(Highcharts);

var data = [
  ['ae', 37],
  ['af', 44],
  ['am', 20],
  ['az', 19],
  ['bd', 9],
  ['bh', 12],
  ['bn', 43],
  ['bt', 26],
  ['cn', 70],
  ['cnm', 33],
  ['cy', 48],
  ['ge', 27],
  ['id', 65],
  ['il', 29],
  ['in', 65],
  ['iq', 36],
  ['ir', 70],
  ['jk', 40],
  ['jo', 31],
  ['jp', 100],
  ['kg', 52],
  ['kh', 25],
  ['kp', 45],
  ['kr', 70],
  ['kw', 35],
  ['kz', 28],
  ['la', 38],
  ['lb', 46],
  ['lk', 51],
  ['mm', 13],
  ['mn', 34],
  ['my', 18],
  ['nc', 47],
  ['np', 50],
  ['om', 5],
  ['ph', 1],
  ['pk', 39],
  ['qa', 41],
  ['ru', 70],
  ['sa', 2],
  ['sg', 65],
  ['sh', 17],
  ['sp', 10],
  ['sy', 30],
  ['th', 4],
  ['tj', 22],
  ['tl', 24],
  ['tm', 32],
  ['tr', 65],
  ['tw', 49],
  ['uz', 23],
  ['vn', 21],
  ['ye', 6]
];

const mapOptions = {
  chart: {
    renderTo: 'container',
    backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
        stops: [
            [0, '#051937'],
            [1, '#A8EB12']
        ]
    },
    
  },
  title: {
    text: ''
  },
  colorAxis: {
    min: 0,
    stops: [[0.4, '#194d33'], [0.65, '#ffe400'], [1, '#00fc88']]
  },
  xAxis: {
    title: {
      style: {
        backgroundColor:'#fff'
      }
  }
  },
  series: [
    {
      mapData: mapDataAsia,
      name: 'Asia',
      data: data
    }
  ]
};

const MapChart = () => {
    return (
      <div>
        <h2>Map Chart</h2>
        <HighchartsReact
          options={mapOptions}
          constructorType={'mapChart'}
          highcharts={Highcharts}
        />
      </div>
    );
}

export default MapChart;