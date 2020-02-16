import React from "react"

function BlogPost(props){
    return(
        <div className= "blogpost">
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <p>{props.author}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default BlogPost

