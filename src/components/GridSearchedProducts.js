import React, { useEffect, useState } from 'react'  
import { useDispatch } from 'react-redux';
import DetailProductMeli from "./DetailProductMeli";
import { setSearchResults } from '../store/actions';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'

export default function GridSearchedProducts() {

    const dispatch = useDispatch();
    const location = useLocation();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
      fetch(`http://192.168.0.106:8085/api/items?q=${queryString.parse(location.search).search}`, { 
        method: 'get', 
        headers: new Headers({ 
          'Content-Type': 'application/json'
        })
      }).then((resp)=>{
        resp.json().then((res)=>{
            setProducts(res)
            dispatch(setSearchResults(res));
        });
      }).catch((e)=>{
        console.log(e);
      });
    }, [location.search]);

    return (
        <>
            {
                products?.items?.map(product => 
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