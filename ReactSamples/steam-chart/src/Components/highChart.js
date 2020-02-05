import React, {useState, useEffect} from 'react'
import Highcharts, { color } from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import {DataFetcher} from '../API/DataFetcher'
import moment from'moment';
import '../App.css'
//import 'https://code.highcharts.com/css/highcharts.css'

const HighCharts = props => {
    const  [chartData, setChartData] = useState([]);
    var data = chartData;
    const DataFetch = () => {
      DataFetcher((err, data) => {
        setChartData(data.payload);
      });
    };
  
    useEffect(() => {
      DataFetch();
    }, []);

    //changeDateFormat
    // const getDate = data.map(d => [moment(d[0]).format("DD.MMM h:mm"), d[1]]);
    // // const date = data.map(d1 => d1[0]);
    // data = getDate;
    console.log('dataChanged => ', data);

    const options = {
        // time: {
        //     // timezoneOffset: -8* 60
        //     timezone: "Asia/Singapore"
        // },
        rangeSelector: {
          enabled: false 
        },
        scrollbar: {
            enabled: false
        },
        chart: {
            style: {
                marginBottom: 10,
                color : '#00BF8E'
            },
            lineColor : '#00BF8E',
            spacingBottom: 15,
            spacingTop: 20,
            spacingLeft: 40,
            spacingRight: 30,
            zoomType: 'x',
            type: 'area'
        },
        tooltip: {
            split: 'true'
        },  
        title: {
            text: "My chart",
            style: {
                color: '#fff',
                font: ' 16px "Trebuchet MS", Verdana, sans-serif',
            }
        },
        yAxis: [ 
            {
                labels:{
                    align:'left',
                    x: -1050,
                    
                },
                title: {
                    text: 'Dollar ($)',
                    style: {
                        color:'#000',
                    },
                    x: -40,
                    rotation: -90
                }
            },
            {
                labels:{
                    align:'right',
                    x:4
                },
                title: {
                    text: 'Temperature (°C)',
                    style: {
                        color: '#000'
                    },
                    x:12,
                    rotation: -90
                }
            } 
        ],
        xAxis: {
            type: 'datetime',
            labels: {
                format: '{value:%m-%d %H:%M}'
                // formatter: function(v) {
                //     console.error('value', this.value);
                //     return Highcharts.dateFormat('%H:%M:%S', this.value);
                // }
            },
            plotBands: [{ // mark the weekend
                color: '#00bf8e32',
                from: 1580863020000,
                to: 1580863920000,
                zIndex: 1,
                borderColor: '#00bf8e',
                borderWidth: 1
            }],
        },
        // global: {
        //     useUTC: false
        //   },
        plotOptions: {
            series: {
                color: '#00BF8E',
                fillColor: {
                    linearGradient: [0, 0, 0, 200],
                    stops: [
                        [0, "#00BF8E77"],
                        [1, "#00BF8E00"]
                    ]
                }
            }
        },
        navigator: {
            series: {
                type: 'column',
                zoneAxis:'x',
                nodes: [{
                    id:'1580863980000',
                    colorIndex:0
                    // color: '#BF0B23'
                },
                // {
                //     value:'',
                //     colorIndex:1
                //     //color:'#B6B6B6'
                // }
            ],
            },
            height: 60
        },
        series: [{
                lineColor: '#00BF8E',
                yAxis:0,
                showInNavigator: true,
                name: 'Temperature',
                data: data,
                tooltip: {
                    valueSuffix : '°C'
                },
                turboThreshold:0,
                
            }]
    };
 
    return(
        <div>
            <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options} />
        </div>
    )
}

export default HighCharts