import React from 'react'
import blogData from "../data/blog"

function About(props) {
    const image = "https://via.placeholder.com/215"
  return (
        <aside>
            <img src={props.image} alt="blog logo"/>
            <p>{props.about}</p>
        </aside>
  )
}

export default About