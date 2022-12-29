import './category.styles.scss'
import { useParams } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { CategoriesContext } from '../../context/categories.context'
import ProductCard from '../../components/product-card/productcard.cpmponent'

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Category =() => {
 const {category} = useParams();
 const {categoriesMap} = useContext(CategoriesContext)
 const [products, setProducts] = useState(categoriesMap[category]);
 useEffect(() => {
    setProducts(categoriesMap[category]);
 },[category,categoriesMap])
 return (
    <Fragment>
          <h2 className='category-title'>{category.toUpperCase()}</h2>
          <div className='category-container'>
      
      {products &&
          products.map((product) => <ProductCard key={product.id} product={product}/>)
      }
  </div>
    </Fragment>
 )
}

export default Category
