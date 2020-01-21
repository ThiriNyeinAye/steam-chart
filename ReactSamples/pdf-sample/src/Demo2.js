import React from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import Chart from './Chart'
import ReactDOMServer from 'react-dom/server'

const Publications = () => {

  return(
  <div>
    <div id="chart">
      <div style={{ height:500, width: 500 }}>
        <Chart data={data} />
      </div>
      <div style={{ height:500, width: 500 }}>
        <Chart data={data} />
      </div>
    </div>
      {/* <div id="chart2">
      { <img src={User} alt="test" style={{width:400}} /> }
    </div> */}
  </div>
  )
};

function Demo2() {
  const  download=()=>{
    html2canvas(document.getElementById('chart')).then(function(canvas) {
    var img = canvas.toDataURL("image/png");
    var doc = new jsPDF();
    // pdf.internal.scaleFactor = 1.40; pdf.addHTML($('.resume'), options, function () { pdf.save($scope.resumeData.basics.name + '.pdf');
    doc.addImage(img,'JPEG',50,0,300,300);
    var pageHeight=doc.internal.pageSize.height;
    var y= 500;
    var x=0;
    if(y>= pageHeight)
    {
      doc.addPage();
      y=0;
    }
    doc.text(x,y, 'value')
    doc.save('chart.pdf');
    
    });
  }

   
  return (
    <div className="App">
      <Publications />
      <button onClick={download}>Click</button>
    </div>
  );
}
export default Demo2;


const data = [
    {
      "country": "AD",
      "hot dog": 129,
      "hot dogColor": "hsl(275, 70%, 50%)",
      "burger": 7,
      "burgerColor": "hsl(341, 70%, 50%)",
      "sandwich": 126,
      "sandwichColor": "hsl(244, 70%, 50%)",
      "kebab": 86,
      "kebabColor": "hsl(79, 70%, 50%)",
      "fries": 100,
      "friesColor": "hsl(306, 70%, 50%)",
      "donut": 34,
      "donutColor": "hsl(90, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 137,
      "hot dogColor": "hsl(76, 70%, 50%)",
      "burger": 54,
      "burgerColor": "hsl(61, 70%, 50%)",
      "sandwich": 135,
      "sandwichColor": "hsl(42, 70%, 50%)",
      "kebab": 60,
      "kebabColor": "hsl(292, 70%, 50%)",
      "fries": 10,
      "friesColor": "hsl(117, 70%, 50%)",
      "donut": 134,
      "donutColor": "hsl(277, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 171,
      "hot dogColor": "hsl(122, 70%, 50%)",
      "burger": 19,
      "burgerColor": "hsl(332, 70%, 50%)",
      "sandwich": 26,
      "sandwichColor": "hsl(279, 70%, 50%)",
      "kebab": 126,
      "kebabColor": "hsl(106, 70%, 50%)",
      "fries": 71,
      "friesColor": "hsl(233, 70%, 50%)",
      "donut": 150,
      "donutColor": "hsl(239, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 119,
      "hot dogColor": "hsl(242, 70%, 50%)",
      "burger": 51,
      "burgerColor": "hsl(247, 70%, 50%)",
      "sandwich": 80,
      "sandwichColor": "hsl(261, 70%, 50%)",
      "kebab": 16,
      "kebabColor": "hsl(150, 70%, 50%)",
      "fries": 147,
      "friesColor": "hsl(221, 70%, 50%)",
      "donut": 26,
      "donutColor": "hsl(118, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 172,
      "hot dogColor": "hsl(88, 70%, 50%)",
      "burger": 99,
      "burgerColor": "hsl(40, 70%, 50%)",
      "sandwich": 30,
      "sandwichColor": "hsl(13, 70%, 50%)",
      "kebab": 62,
      "kebabColor": "hsl(309, 70%, 50%)",
      "fries": 195,
      "friesColor": "hsl(49, 70%, 50%)",
      "donut": 157,
      "donutColor": "hsl(358, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 129,
      "hot dogColor": "hsl(183, 70%, 50%)",
      "burger": 79,
      "burgerColor": "hsl(40, 70%, 50%)",
      "sandwich": 28,
      "sandwichColor": "hsl(188, 70%, 50%)",
      "kebab": 37,
      "kebabColor": "hsl(10, 70%, 50%)",
      "fries": 42,
      "friesColor": "hsl(170, 70%, 50%)",
      "donut": 158,
      "donutColor": "hsl(271, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 42,
      "hot dogColor": "hsl(282, 70%, 50%)",
      "burger": 161,
      "burgerColor": "hsl(311, 70%, 50%)",
      "sandwich": 108,
      "sandwichColor": "hsl(89, 70%, 50%)",
      "kebab": 131,
      "kebabColor": "hsl(216, 70%, 50%)",
      "fries": 71,
      "friesColor": "hsl(242, 70%, 50%)",
      "donut": 92,
      "donutColor": "hsl(52, 70%, 50%)"
    }
  ]