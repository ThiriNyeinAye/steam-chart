import React, {useState, useEffect} from 'react'
import Highcharts, { color } from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import {DataFetcher} from '../API/DataFetcher'
import moment from'moment';
import '../App.css'

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
                color : '#2196f3'
            },
            lineColor : '#2196f3',
            spacingBottom: 15,
            spacingTop: 20,
            spacingLeft: 40,
            spacingRight: 30,
            zoomType: 'x',
            type: 'area',
            //styledMode: true
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
                // formatter: function(v) {
                //     console.error('value', this.value);
                //     return Highcharts.dateFormat('%H:%M:%S', this.value);
                // }
            },
            plotBands: [{
                color: '#2196f3',
                from: 1580948940000,
                to: 1580949600000,
                zIndex: 1,
                borderColor: '#2196f3',
                borderWidth: 1
            }],
        },
        // global: {
        //     useUTC: false
        //   },
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
                // className:'my-class1',
                // data: [1580951040000],
                // nodes:[{
                //     value:'1580948400000',
                //     colorIndex:0
                // }] 
                
                // zones: [{
                //     value:'1580948400000',
                //     //olorIndex:0
                //     color: '#BF0B23'
                // },
                // // {
                // //     value:'',
                // //     colorIndex:1
                // //     //color:'#B6B6B6'
                // // }
                // ],
            },
           
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
                
            }]
    };
 
    return(
        <div>
            <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options} />
        </div>
    )
}

export default HighCharts