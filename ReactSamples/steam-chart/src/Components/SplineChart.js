import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const SplineChart = () => {

    const options = {
        chart: {
            styleMode:true,
            renderTo: 'container',
            backgroundColor: {
                radialGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                stops: [
                    [0, '#868f96'],
                    [1, '#120C6E']
                ]
            },
            type: 'spline'
          },
        title:{
            text:''
        },
        xAxis: {
            //gridLineWidth:1,
            lineColor: '#000',
            tickColor: '#000',
            labels: {
                style: {
                    color:'#fff'
                }
            }
        },
        yAxis: {
            //gridLineWidth:1,
            lineColor: '#000',
            tickColor: '#000',
            labels: {
                style: {
                    color:'#fff'
                }
            },
            title: {
                style: {
                    color:'#fff'
                }
            }
        },
        defs: {
            glow: {
                tagName: 'filter',
                id: 'glow',
                opacity: 0.5,
                children: [{
                    tagName: 'feGaussianBlur',
                    result: 'coloredBlur',
                    stdDeviation: 2.5
                }, {
                    tagName: 'feMerge',
                    children: [{
                        tagName: 'feMergeNode',
                        in: 'coloredBlur'
                    }, {
                        tagName: 'feMergeNode',
                        in: 'SourceGraphic'
                    }]
                }]
            }
        },
        series:[
            {
                data:[1,2,1,4,3,6]
            }
        ],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    chart: {
                        className: 'small-chart'
                    }
                }
            }]
        }
    };
    return(
        <div className="container justify-content-center">
            <h2>Spline Chart</h2>
            <HighchartsReact 
                highcharts={Highcharts} 
                options={options} />
        </div>
    )
}

export default SplineChart;