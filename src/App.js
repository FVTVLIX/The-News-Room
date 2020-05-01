import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import ArticleList from './ArticleList'
import ArticleDetail from './ArticleDetail'
import Categories from './Categories'



function App() {

  const [articles, updateArticles] = useState([])
  const [categories, updateCategories] = useState([])
 

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios('https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com,engadget.com,espn.com,msn.com,usnews.com,nbcnews.com&apiKey=f038a48516ee4a818e27c24b219789f4')

      updateArticles(response.data.articles)

      const secondResponse = await axios('https://newsapi.org/v2/sources?language=en&country=us&apiKey=f038a48516ee4a818e27c24b219789f4')

      updateCategories(secondResponse.data.sources)
    }
    apiCall()
  }, [])


  return (
    <>
      <div className="header">
        <header>
          <Link
            className="titlelink"
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
          <Route path='/categories/:id'>
            <Categories categories={categories} />
          </Route>
        </div>
        
      </main>
    </>
  );
}

export default App;
