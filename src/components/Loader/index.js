import React from 'react'
import LoaderSrc from '../../assets/loader.gif'

const Loader = props => {
    return (
        <div>
            <img 
                alt="Loader Icon"
                src={LoaderSrc} />
        </div>
    )
}

export default Loader