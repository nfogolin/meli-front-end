import React from 'react'  
import DetailProductMeli from "./DetailProductMeli";
import PropTypes from 'prop-types' 

export default function GridSearchedProducts({ searchResults = [] }) {
    return (
        <>
            {
                searchResults?.map(product => 
                <DetailProductMeli
                    key = {product.id}
                    sId = {product.id}
                    sImgPath = {product.picture}
                    sSimbolMoney = {product?.price?.currency}
                    nPrice = {product?.price?.amount}
                    sProductDescript = {product.title}
                    sProductLocation = "Capital Federal"
                    bShipping = {product.free_shipping}
                />
                )
            }
        </>
    );
}

GridSearchedProducts.propTypes = {  
    searchResults: PropTypes.array
}