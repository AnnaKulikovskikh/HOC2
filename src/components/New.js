import React from 'react'


export default function New(component) {
    const C = component
    return function(props) {
        return(
            <div className="wrap-item wrap-item-new">
                <span className="label">New!</span>
                <p>{props.children}</p>
            </div>    
        )
    }
}