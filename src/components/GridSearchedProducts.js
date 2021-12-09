import React, { useEffect, useState } from 'react'  
import { useDispatch } from 'react-redux';
import DetailProductMeli from "./DetailProductMeli";
import { setSearchResults } from '../store/actions';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'

/*
Componente que dibuja la grilla del resultado de los productos. Realiza la invocación al momento
de detectar que la busqueda cambió, de manera de no realizar varias búsquedas iguales en caso de
repetirse varios clicks / enter seguidos con el mismo texto.
Está preparado para usar algún componente tipo LOADER para maracar cuando la página está cargando.
*/

export default function GridSearchedProducts() {

    const dispatch = useDispatch();
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      fetch(`http://localhost:8085/api/items?q=${queryString.parse(location.search).search}`, { 
        method: 'get', 
        headers: new Headers({ 
          'Content-Type': 'application/json'
        })
      }).then((resp)=>{
        resp.json().then((res)=>{
            setProducts(res)
            dispatch(setSearchResults(res));
            setLoading(false);
        });
      }).catch((e)=>{
        console.log(e);
        setLoading(false);
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