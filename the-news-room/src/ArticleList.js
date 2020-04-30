import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleList.css'

export default function ArticleList({ articles }) {
  return (
    <>
      {articles.map((article, index) =>
        <div
          className='articlebox'
          key={article.title}>

          <h4 className="sourcename">{article.source.name}</h4>

          <Link
            className="title"
            to={"/article/" + index}>
            {article.title}
          </Link>

          <img 
            className="frontImage"
            src={article.urlToImage}
            alt="article-image"
            />
          
          <h3 className="author">{article.author}</h3>

          <p className="description">{article.description}</p>

        </div>
      )}
    </>
  )
}


// guard operator