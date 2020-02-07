import React, {useState, useEffect} from 'react'
import HC from 'highcharts'
import Highcharts, { color } from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import {DataFetcher} from '../API/DataFetcher'
import moment from'moment';
import '../App.css'

var SVGRender = HC.SVGRenderer.prototype.symbols.cross = () => {
    return ['M0,0 V4 L2,2 Z'];
}

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

    const navigatorZoneColor = data.map(
        (v,i)=> (i===10 || i===30 || i===36 || i===65 || i===77 || i===80)? {value: v[0], color:"#BF0B2399"} : {value:v[0], color:"#B6B6B6"}
    );
    const options = {
        rangeSelector: {
          enabled: false 
        },
        scrollbar: {
            enabled: false
        },
        chart: {
            backgroundColor:'#000',
            style: {
                marginBottom: 10,
                color : '#2196f3'
            },
            lineColor : '#2196f3',
            // spacingBottom: 15,
            // spacingTop: 20,
            // spacingLeft: 40,
            // spacingRight: 30,
            zoomType: 'x',
            type: 'area',
            //styledMode: true
            events: {
                selection: function (e) {
                   e.preventDefault();
                   var axis = this.xAxis[0];
                   
                   axis.removePlotBand('selection-plot-band');
                   
                   axis.addPlotBand({
                   	color: Highcharts.color('#335cad').setOpacity(0.25).get(),
                    from: e.xAxis[0].min,
                    to: e.xAxis[0].max,
                    id: 'selection-plot-band',
                    zIndex: 6
                   });
                }
            },
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
                    align:'right',
                    x:15
                },
                title: {
                    text: 'Temperature (°C)',
                    style: {
                        color: '#000'
                    },
                    x:25,
                    rotation: -90
                }
            } 
        ],
        xAxis: {
            type: 'datetime',
            labels: {
                format: '{value:%m-%d %H:%M}'
            },
            plotBands: [{
                color: '#2196f3',
                from: 1580948940000,
                to: 1580949600000,
                zIndex: 1,
                borderColor: '#2196f3',
                borderWidth: 1,
                marker: {
                    enabled:true,
                    symbol: 'triangle'
                }
            }],
        },
        plotOptions: {
            series: {
                color: '#2196f3',
                fillColor: {
                    linearGradient: [0, 0, 0, 170],
                    stops: [
                        [0, "#2196f377"],
                        [1, "#2196f300"]
                    ]
                }
            }
        },
        navigator: {
            height: 60,
            series: {
                type: 'column',
                zoneAxis:'x',
                zones: [...navigatorZoneColor, { color: "#B6B6B6"}]
            },
            xAxis: {
                labels:{
                    enabled: true,
                    y:12
                }
            }
        },
        series: [
            {
                lineColor: '#2196f3',
                yAxis:0,
                showInNavigator: true,
                name: 'Temperature',
                data: data,
                tooltip: {
                    valueSuffix : '°C'
                },
                turboThreshold:0,
                
        }],
        responsive: {
            rules: [{
                condition: {
                    width:'100%'
                }
            }]
        }
    };
 
    return(
        <div className='bg-dark'>
            <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options} />
        </div>
    )
}

export default HighCharts