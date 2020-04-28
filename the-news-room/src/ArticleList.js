import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticleList({ articles }) {
  return (
    <>
      {articles.map(article =>
        <div key={articles.title}>
          <Link
            to={"/article/" + articles.title}>
            {articles.title}
          </Link>
        </div>
      )}
    </>
  )
}
