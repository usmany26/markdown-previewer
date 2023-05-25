import React from 'react'
import './Previewer.css'

const Previewer = (props) => {


    return (
        <div className='previewer'>
            <div className='heading'>
               <h2>
                 previewer
               </h2>
            </div>
            <div
                dangerouslySetInnerHTML={{
                  __html: props.html
                }}
            />
        </div>
    )
}

export default Previewer
