import React from 'react'
import './checkouts.css'
import Filter from '../../components/Checkouts/Filter/Filter'
import TotalCheckouts from '../../components/Checkouts/TotalCheckouts/TotalCheckouts'
import TotalFailures from '../../components/Checkouts/TotalFailures/TotalFailures'
import ProductsNav from '../../components/Checkouts/ProductsNav/ProductsNav'
import {data} from '../../data'
import Product from '../../components/Checkouts/Product/Product'

const Checkouts = () => {
    return (
        <div className='checkouts'>
            <div className='control'>
                <Filter/>
                <TotalCheckouts/>
                <TotalFailures/>
            </div>
            <div>
               <ProductsNav/>
               <div className='products'>
               {data.map(item=>{if(item.status ==='SUCCESS'){
                   return <span key={item.size}>
                   <Product
                    product={item.product}
                    price={item.price}
                    status={item.status}
                    size={item.size}/>
                   </span>
               }else{
                return <span key={item.size}>
                <Product
                 isFail
                 product={item.product}
                 price={item.price}
                 status={item.status}
                 size={item.size}/>
                </span>
               }}
               )}
                </div>
            </div>
        </div>
    )
}

export default Checkouts

