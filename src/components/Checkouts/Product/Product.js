import React from 'react'
import './product.css'

const Product = (props) => {
    return (
        <div className='product'>
              <p style={{flex:'1' , paddingRight:'15px'} }  className='p_title'>22 Feb 2021</p>
               <p style={{flex:'3'}}  className='p_title'>{props.product}</p>
               <p style={{flex:'1'}} className='p_title'>{props.size}</p>
               <p style={{flex:'2'}} className='p_title'>Footlocker UK</p>
               <p style={{flex:'1'}} className='p_title'>{props.price}</p>
               <p style={{flex:'1' }} className={`p_title butt ${props.isFail && 'Fail'}`}>
                   {props.status}<span className={`product_button ${props.isFail && 'fail'}`}></span></p>
               
        </div>
    )
}

export default Product
