import React from 'react'

export default function Popular(component) {
    const C = component
    return function(props) {
        return(
            <div className="wrap-item wrap-item-popular">
                <span className="label">Popular!</span>
                {props.children}
            </div>
        )
    }
}
