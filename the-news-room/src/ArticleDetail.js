import React from 'react'
import { useParams } from 'react-router-dom'

export default function ArticleDetail({ articles }) {

  const { id } = useParams()

  const article = articles[id]

  console.log(article)

  return (
    <>
      <div className='articletitle'>
        <h1>
          {article.title}
        </h1>
      </div>

      <div className='publish-date'>
        <h2>
          {article.publishedAt}
        </h2>
      </div>

      <div className='articleimage'>
        <img
          src={article.urlToImage}
          alt="article-image"
          height="200"
        />
      </div>

      <div className="content">
        <p>
          {article.content}
        </p>

        <div className='link'>
          {article.url}
        </div>
        
      </div>
    </>
  )
}
