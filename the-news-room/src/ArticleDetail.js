import React from 'react'
import { useParams } from 'react-router-dom'

export default function ArticleDetail({ articles }) {

  const { id } = useParams()

  const article = articles.find(article => articles.id === id)

  console.log(article)

  return (
    <>
      <div className='articletitle'>
        {/* <h1>{article.title}</h1> */}
      </div>

      {/* <div className='articleimage'>
        <img
          src={articles.urlToImage[0].url}
          alt=""
          height="200"
        />
      </div> */}
    </>
  )
}
