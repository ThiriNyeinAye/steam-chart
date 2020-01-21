import React from 'react'
//import jsPDF from 'jspdf'
import Pdf from 'react-to-pdf'
import Chart from './Chart'

const Demo = () => {
    const ref = React.createRef();
    // const jsPdfGenerator = () => {
    //     var doc = new jsPDF();
    //     doc.text(20,20, 'This is the default font.')
    //     doc.save("generated.pdf");
    // }

    // return(
    //     <button onClick={jsPdfGenerator}>Generate PDF</button>
    // )
    return(
        <div className="App">
            <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            </div>
      </div>
    )
   
}
export default Demo;