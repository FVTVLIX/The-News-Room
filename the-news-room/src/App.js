import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import ArticleList from './ArticleList'
import ArticleDetail from './ArticleDetail'

function App() {

  const [articles, updateArticles] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios('https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com,cnn.com,engadget.com,espn.com,msn.com,usnews.com,nbcnews.com&apiKey=f038a48516ee4a818e27c24b219789f4')

      updateArticles(response.data)
      console.log(response)

    }
    apiCall()
  }, [])



  return (
    <>
      <div className="header">
        <header>
          <Link
            to="/">
            The News Room
          </Link>
        </header>
      </div>
      <main>
        <div className="body">
          <Route exact path="/">
            <ArticleList articles={articles} />
          </Route>
          <Route path="/article/:id">
            <ArticleDetail articles={articles} />
            </Route>
        </div>
      </main>
    </>
  );
}

export default App;
