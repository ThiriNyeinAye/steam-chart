import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const InventoryBar = (props) => {
    const {data} = props;
    return(
    <ResponsiveBar
        data={data}
        keys={["Amount"]}
        indexBy= { d => JSON.stringify(d)}
        margin={{ top: 0, right: 130, bottom: 80, left: 200 }}
        padding={0.3}
        maxValue={450000000}
        // groupMode="grouped"
        layout="horizontal"
        colors={{ scheme: 'category10' }}
       
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
            // tickRotation: 270,
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
            <rect x={-131} y={-31} width={130} height={68} fill="white" stroke="lightgray" strokeWidth="1" />
            <text
                transform="rotate(270)"
                textAnchor="middle"
                dominantBaseline="middle"
                // textLength="10px"
                style={{ fill: '#333', fontSize:11}}
            >
                {/* <div>{value.Product}</div> */}
                <tspan x="0" y="-70" dy="0em" textAnchor="middle" maxWidth="10" style={{ fontWeight: "bold"}}>{value.Product}</tspan>
                <tspan x="0" y="-67" dy="1.4em" textAnchor="middle" style={{ fontWeight: "bold"}}>{value.Qty}</tspan>
            </text>
            <text
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fill: '#333', fontSize:11 }}
            >
                <tspan x="-32" y="-30" dy="2.8em" textAnchor="middle" style={{ fontWeight: "bold"}}>{value.Unit}</tspan>
            </text>
        </g>
    )
}