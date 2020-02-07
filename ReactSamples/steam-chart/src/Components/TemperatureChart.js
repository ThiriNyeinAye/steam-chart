import React, { useState, useEffect } from 'react'
import Highcharts, { color } from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import {DataFetcher} from '../API/DataFetcher'

const TemperatureChart = (props) => {

    const [chartData, setChartData] = useState([]);
    const data = chartData;
    const DataFetch = () => {
        DataFetcher((err, data) => {
            console.log('Data => ',data);
            setChartData(data.payload);
        });
    };

    useEffect(() => {
        DataFetch();
    }, []);

    const options = {
        chart: {
            type: 'area',
            spacing: [30, 30, 30, 30],
            height: 280,
            zoomType: 'x'
        },

        title: {
            text: 'Temperature',
            align: 'left',
            style: {
                color: '#000',
                fontWeight: 'bold',
                font: ' 16px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        
        navigator: {
            enabled: false 
        },

        rangeSelector: {
            enabled: false
        },

        scrollbar: {
            enabled: false
        },

        xAxis: {
            labels: {
                enabled: false
            },
            tickLength: 0
        },

        series : [
            {
                name: 'Temperature',
                data: data,
                tooltip: {
                    valueSuffix: 'Â°C'
                },
                turboThreshold:0,
            },
        ],

        yAxis: [
            {
                labels: {
                    align: 'right',
                    x: 15,
                    y: -3
                }
            }
        ],
       
        plotOptions: {
            series: {
                color: '#2196f3',
                fillColor: {
                    linearGradient: [0, 0, 0, 200],
                    stops: [
                        [0, "#2196f377"],
                        [1, "#2196f300"]
                    ]
                }
            }
        }

    }
    return(
        <div>
            <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options} />
        </div>
    )
}

export default TemperatureChart