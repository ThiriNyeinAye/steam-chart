import React from 'react'
import Page from './Page'

const SinglePage = ({id}) => {
    return(
        <Page singleMode={true} id={id}>
            <div 
                className="f2 mb2"
                style={{ color:"red"}}
            >Hello</div>
            <div>This is Single Page</div>

        </Page>
    )
}
export default SinglePage;