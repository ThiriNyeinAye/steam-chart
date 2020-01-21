import React from 'react'
import jsPDF from 'jspdf'
import Chart from './Chart'
import ReactDOMServer from 'react-dom/server'

const Publications = () => {
    return (
        <div style={{ height:700}}>
            <Chart />
            <Chart />
        </div>
    )
}

function App () {
    const print = () => {
        var doc = new jsPDF();
        doc.fromHTML(
            ReactDOMServer.renderToStaticMarkup(<Publications />),
            10,
            10,
            { color: "red"},
            () =>  {
                doc.save("table.pdf");
            }
        );
    }
    return (
        <div className="App">
            <Publications />
            <button onClick={print}>Generate PDF</button>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);