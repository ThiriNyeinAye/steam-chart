import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const InventoryBar = (props) => {
    const {data} = props;
    console.log('Data -> ', Data => JSON.stringify(Data));
    return(
    <ResponsiveBar
        data={data}
        keys={["Amount"]}
        indexBy= { Data => JSON.stringify(Data)}
        tooltip={({ id, value, color,data }) => (
            <strong style={{ color }}>
                {/* <div className="d-flex flex-row">
                    <div className="col-lg-6">
                        <p>{id} :</p>
                        <p>Unit :</p>
                        <p>Qty :</p>
                        <p>Product :</p>
                    </div>
                    <div className="col-lg-6">
                        <p>{value}</p>
                        <p>{data.Unit}</p>
                        <p>{data.Qty}</p>
                        <p>{data.Product}</p>
                    </div>
                </div> */}
              {id}: {value} <br />
              Unit:{data.Unit} <br />
              Quantity:{data.Qty} <br />
              Product:{data.Product}
            </strong>
          )}
          theme={{
            tooltip: {
              container: {
                // background: "white",
                 width: 250
              }
            }
          }}
        margin={{ top: 0, right: 130, bottom: 80, left: 200 }}
        padding={0.3}
        // maxValue={350000000}
        layout="horizontal"
        colors={{ scheme: 'category10' }}
        // isInteractive={false}
        // tooltip={({Product,Amount})=>{
        //     <div>
        //         {Product} : {Amount}
        //     </div>
        // }}
        // tooltip={function(){}}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            legendPosition: 'middle',
            legendOffset: 40,
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: -40,
            renderTick: CustomTick
        }}
        enableGridX={true}
        enableGridY={false}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom',
                direction: 'column',
                justify: false,
                translateX: 20,
                translateY: 60,
                itemsSpacing: 2,
                itemWidth: 120,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 10,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
    )
    
    }

export default InventoryBar;

const CustomTick = (tick) => {
    const value = JSON.parse(tick.value)
    return (
        
        <g transform={`translate(${tick.x},${tick.y})`} >
            {/* <rect x={-146} y={-31} width={145} height={60} fill="white" stroke="lightgray" strokeWidth="1" /> */}
            <text
                transform="rotate(270)"
                textAnchor="middle"
                dominantBaseline="middle"
                glyphOrientationVertical="0"
                style={{ fill: '#333', fontSize:11}}
            >
                <tspan x="0" y="-120" dy="0em" textAnchor="middle"  style={{ fontWeight: "bold"}}>{value.Qty}</tspan>
                <tspan x="0" y="-119" dy="1.4em" textAnchor="middle" style={{ fontWeight: "bold"}}>{value.Unit}</tspan>
            </text>
            <text
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fill: '#333', fontSize:11 }}
            >
                <tspan x="-57" y="-30" dy="2.8em" textAnchor="middle" style={{ fontWeight: "bold"}}>{value.Product}</tspan>
            </text>
        </g>
    )
}