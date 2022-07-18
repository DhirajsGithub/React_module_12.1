import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Products = () => {
  return (
    <section>
      <h1>The Product Page</h1>
      <ul>
        <li><Link to="/products/p1">A Book</Link></li>
        <li><Link to="/products/p2">A carpent</Link></li>
        <li><Link to="/products/p3">A Course</Link></li>
      </ul>
    </section>
  )
}

export default Products