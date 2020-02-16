import React from "react"
import css from "./style.css"
import BlogPost from "./blogpost"
import blog from "./blog"
import Header from "./header"
import Footer from "./footer"


function App(){
    const blogspot = blog.map(items => <BlogPost title = {items.title} subTitle = {items.subTitle}  author = {items.author} date = {items.date}/>)

    return(
        <div>
            <Header />
            {blogspot}
            <Footer />
        </div>
    )
}

export default App