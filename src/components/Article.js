import React from 'react'

function Article(props) {
    const date = "January 1, 1970"
  return (
        <artical>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>{props.preview}</p>
            <p>{props.minute}</p>
        </artical>
  )
}

export default Article
