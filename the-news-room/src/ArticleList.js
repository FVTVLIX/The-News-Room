import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticleList({ articles }) {
  return (
    <>
      {articles.map((article, index) =>
        <div key={article.title}>
          
          <h4 className="sourcename">{article.source.name}</h4>

          <Link
            to={"/article/" + index}>
            {article.title}
          </Link>

          <img 
            src={article.urlToImage}
            alt="article-image"
            height="200" />
          
          <h3 className="author">{article.author}</h3>

          <p className="description">{article.description}</p>

        </div>
      )}
    </>
  )
}


// guard operator