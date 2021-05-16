import React from 'react';

import BtnRender from './BtnRender';

const ProductItem = ({ product, isAdmin, deleteProduct, handleCheck }) => {
    
    return (
        <>
            <div className='product_card' style={{height:'auto', backgroundSize:'cover', backgroundRepeat:'no-repeat',backgroundImage:`url(${product.images.url})`}}>
                <div className="product_box">
                    {
                        isAdmin && <input type="checkbox" checked={product.checked}
                            onChange={() => handleCheck(product._id)} />
                    }
                    <h2 title={product.title}>
                        {product.title}
                    </h2>
                    <span>${product.price}</span>
                    <p>{product.description}</p>
                    <BtnRender product={product} deleteProduct={deleteProduct} />
                </div>
                {/* this image is needed in order for the div's height to scale to the image */}
                <img src={product.images.url} alt="product" style={{visibility: "hidden", maxWidth:"100%", maxHeight:'100%'}}/>
            </div>
            
        </>
    )
}

export default ProductItem;