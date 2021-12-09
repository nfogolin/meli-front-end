import React, { useEffect, useState } from 'react'  
import {useParams } from 'react-router-dom';
import DataProduct from './DataProduct';

/*
Componente que recibe por url el Id del producto MELI para buscar su detalle en el servicio MELI.
*/

export default function DetailDataProduct() {

    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(()=>{
      fetch(`http://localhost:8085/api/items/${id}`, { 
        method: 'get', 
        headers: new Headers({ 
          'Content-Type': 'application/json'
        })
      }).then((resp)=>{
        resp.json().then((res)=>{
            setProduct(res)
        });
      }).catch((e)=>{
        console.log(e);
      });
    }, []);

    return (
        <>
            {
                <DataProduct
                    sImgPath = {(product?.item?.picture !== undefined?product?.item?.picture:'')}
                    sImgDescript = {(product?.item?.title !== undefined?product?.item?.title:'')}
                    sSimbolMoney = {(product?.item?.price?.currency !== undefined?product?.item?.price?.currency:'')}
                    nPrice = {(product?.item?.price?.amount !== undefined?product?.item?.price?.amount:0)}
                    nSoldQuantity = {(product?.item?.sold_quantity !== undefined?product?.item?.sold_quantity:0)}
                    sProductDescript = {(product?.item?.title !== undefined?product?.item?.title:'')}
                    sProductAdditInfo = {(product?.item?.description !== undefined?product?.item?.description:'')}
                />
            }
        </>
    );
}