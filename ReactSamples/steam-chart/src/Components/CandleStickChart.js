import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import data from '../data3.json'

const CandleStickChart = () => {
    var ohlc = [],
    volume = [],
    dataLength = data.length,
    // set the allowed units for data grouping
    groupingUnits = [[
        'week',                         // unit name
        [1]                             // allowed multiples
    ], [
        'month',
        [1, 2, 3, 4, 6]
    ]],

    i = 0;

    for (i; i < dataLength; i += 1) {
        ohlc.push([
            data[i][0], // the date
            data[i][1], // open
            data[i][2], // high
            data[i][3], // low
            data[i][4] // close
        ]);

        volume.push([
            data[i][0], // the date
            data[i][5] // the volume
        ]);
    }
    
    const options = {
        chart:{
            styleMode:'true',
            resetZoomButton:{
                theme:{
                    zIndex:9
                }
            }
        },
        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AAPL Historical'
        },

        yAxis: [{
            labels: {
                align: 'left',
                x: -3
            },
            title: {
                text: 'OHLC'
            },
            height: '60%',
            lineWidth: 2,
            resize: {
                enabled: true
            }
        }, {
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: 'Volume'
            },
            top: '65%',
            height: '35%',
            offset: 0,
            lineWidth: 2
        }],

        tooltip: {
            split: true
        },

        series: [{
            type: 'candlestick',
            name: 'AAPL',
            data: ohlc,
            dataGrouping: {
                units: groupingUnits
            }
        }, {
            type: 'column',
            name: 'Volume',
            data: volume,
            yAxis: 1,
            dataGrouping: {
                units: groupingUnits
            }
        }]
        // rangeSelector: {
        //     buttons: [{
        //         type: 'hour',
        //         count: 1,
        //         text: '1h'
        //     }, {
        //         type: 'day',
        //         count: 1,
        //         text: '1D'
        //     }, {
        //         type: 'all',
        //         count: 1,
        //         text: 'All'
        //     }],
        //     selected: 1,
        //     inputEnabled: false
        // },

        // series: [{
        //     name: 'Values',
        //     type: 'candlestick',
        //     data: data3,
        //     tooltip: {
        //         valueDecimals: 2
        //     }
        // }]
    };

    return(
        <div>
            <h2>CandleStick Chart</h2>
            <HighchartsReact
            highcharts={Highcharts}
            constructorType={"stockChart"}
            options={options}
             />
        </div>
    )
}

export default CandleStickChart;