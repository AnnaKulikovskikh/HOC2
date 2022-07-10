import React from 'react'
import New from "./New"
import Popular from "./Popular"

function Article(props) {
    if (props.views < 100) {
        return(
            <New />
        )
    }
    //if (props.views > 1000) return
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
}

export default New(Article)