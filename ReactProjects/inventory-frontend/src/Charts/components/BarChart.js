import React from 'react'
import { ResponsiveBar } from '@nivo/bar'


const InventoryBar = ({ data }) => (
    <ResponsiveBar
        data={data}
        keys={[ 'Amount' ]}
        indexBy= "product"
        margin={{ top: 0, right: 130, bottom: 80, left: 200 }}
        padding={0.3}
        maxValue={450000000}
        // groupMode="grouped"
        layout="horizontal"
        colors={{ scheme: 'category10' }}
        // defs={[
        //     {
        //         id: 'dots',
        //         type: 'patternDots',
        //         background: 'inherit',
        //         color: '#38bcb2',
        //         size: 4,
        //         padding: 1,
        //         stagger: true
        //     },
        //     {
        //         id: 'lines',
        //         type: 'patternLines',
        //         background: 'inherit',
        //         color: '#eed312',
        //         rotation: -45,
        //         lineWidth: 6,
        //         spacing: 10
        //     }
        // ]}
        // fill={[
        //     {
        //         match: {
        //             id: 'product'
        //         },
        //         id: 'gradientA'
        //     }
        // ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            // tickSize: 5,
            // tickPadding: 0,
            // tickRotation: 0,
            // legend: 'Amount',
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
            //tickRotation: 270,
            // legend: 'Product',
            legendPosition: 'middle',
            legendOffset: -40
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

export default InventoryBar;