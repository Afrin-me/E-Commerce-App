import React, { useEffect } from 'react'
import { fetchProducts } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {

  // const product = useSelector((state)=>state)
  // console.log(state, "from product page ")
  const dispatch = useDispatch()
  useEffect(()=>{
    fetchProducts()
  }, [])
 
  return (
    <div>Products

    </div>
  )
}

export default Products