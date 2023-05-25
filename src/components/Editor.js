import React from 'react'
import './Editor.css'

const Editor = (props) => {

    return (
        <div className='editor'>
            <div className='heading'>
               <h2>
                 Editor
               </h2>
            </div>
            <textarea  className='textarea' onChange={ props.onChange} />
        </div>
    )
}

export default Editor
