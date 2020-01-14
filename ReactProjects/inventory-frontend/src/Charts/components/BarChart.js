import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const InventoryBar = (props) => {
    const {data} = props;
    return(
    <ResponsiveBar
        data={data}
        keys={["Amount"]}
        indexBy= {'Product'}
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
            //tickRotation: 270,
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
    
    }

export default InventoryBar;