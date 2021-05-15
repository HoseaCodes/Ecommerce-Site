import React, { useState, useEffect } from 'react';
import BtnRender from './BtnRender';

const ProductItem = ({ product, isAdmin, deleteProduct, handleCheck }) => {
    
    return (
        <>
            <div className='product_card' style={{height:'auto', backgroundSize:'cover', backgroundRepeat:'no-repeat',backgroundImage:`url(${product.images.url})`}}>
                {
                    isAdmin && <input type="checkbox" checked={product.checked}
                        onChange={() => handleCheck(product._id)} />
                }
                <div></div>
                <img src={product.images.url} alt="product" style={{visibility: "hidden", maxWidth:"100%", maxHeight:'100%'}}/>
                {/* <div className="product_box">
                    <h2 title={product.title}>
                        {product.title}
                    </h2>
                    <span>${product.price}</span>
                    <p>{product.description}</p>
                </div>
                <BtnRender product={product} deleteProduct={deleteProduct} /> */}

            </div>
            
        </>
    )
}

export default ProductItem;