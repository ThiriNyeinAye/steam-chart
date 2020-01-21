import React from 'react'
import Page from './Page'

const MultiPage = ({id}) => {
    return(
        <Page id={id}>
            <div 
                className="f2 mb2"
                style={{ color:"red"}}
            >Hello</div>
            <div>This is Muliple Page</div>

        </Page>
    )
}
export default MultiPage;