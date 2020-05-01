import React from 'react'
import { Link } from 'react-router-dom'


export default function Categories({ categories }) {
  return (
    <>
      
      {categories.map((category, index) =>
        
        <div
          className='categorypage'
          key={category.name}>
          
          <h4 className='catname'>{category.source.name}</h4>
          
          <Link
            className="category"
            to={"/categories/" + index}>
            {category.name}
          </Link>

        </div>
      )}
    </>
  )
}
