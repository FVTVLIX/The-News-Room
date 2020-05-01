import React from 'react'
import { useParams } from 'react-router-dom'
import './ArticleDetail.css'

export default function ArticleDetail({ articles }) {

  const { id } = useParams()

  const article = articles[id]

  console.log(article)

  return (
    <> 
      
      <div className='articletitle'>
        <h1>{article.title}</h1>
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
        />
      </div>

      <div className="content">
        <p>
          {article.content}
        </p>
        
        <a target='_blank'
          rel="noopener noreferrer"
          href={article.url}>Read More</a>
      </div>

    </>
  )
}
