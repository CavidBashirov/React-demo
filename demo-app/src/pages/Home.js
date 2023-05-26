import React, { useState } from 'react'
import '../assets/css/home/home.css';
import Header from '../components/layout/Header'
import Product from '../components/common/Product'
import { Button } from 'reactstrap';

function Home() {
  const products = ["Iphone", "Nokia", "Samsung", "Xiomi"];



  return (
    <>
      <main>
        <section id='products'>
          <div className="container">
            <h1 className='text-center py-3'>Products</h1>
            <div className="row">
              {
                products.map(function (item, i) {
                  return <div key={i} className="col-3">
                    <Product productName={item} />
                  </div>
                })
              }
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  )
}

export default Home
