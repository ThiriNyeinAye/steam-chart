import React from 'react';
import BarChart from './Charts/containers/BarChartContainer';
import VerticalChart from './Charts/containers/VerticalChartContainer'
import LineChart from './Charts/containers/LineChartContainer'
import Pdf from 'react-to-pdf'

function App() {
  const ref = React.createRef();
  const options = { orientation:'landscape'};
  return (
    <div class="container">
       <Pdf targetRef={ref} options={options} filename="chart.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div style={{backgroundColor:'none', height:900, padding:0}} ref={ref}>
      
        <div className="d-flex flex-row">
            <div className="col-lg-6">
              <BarChart />
            </div>
            <div className="col-lg-6">
              <LineChart />
            </div>
        </div>
        <VerticalChart />
      </div>
    </div>
    
  );
}

export default App;
