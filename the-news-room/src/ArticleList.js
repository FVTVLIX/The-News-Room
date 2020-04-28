import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticleList({ articles }) {
  return (
    <>
      {articles.map(article =>
        <div key={article.title}>
          <Link
            to={"/article/" + article.url}>
            {article.title}
          </Link>
        </div>
      )}
    </>
  )
}


// guard operator