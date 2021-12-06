import React from 'react'  
import PropTypes from 'prop-types' 

export default function DataProduct ({sImgPath = "",  
                                    sImgDescript = "Alt Opcional",
                                    sSimbolMoney = "$",
                                    nPrice = 0,
                                    nSoldQuantity = 0,
                                    sProductDescript = "Sin Descripción",
                                    sProductAdditInfo = ""}) {
    return (
        <>
            <article className="ml-prod-data">
                <figure className="ml-prod-data-img">
                    <img src={sImgPath} alt={sImgDescript}/>
                </figure>
                <div className="ml-prod-data-detail">
                    <div>Nuevo - {nSoldQuantity} vendidos</div>
                    <div>{sProductDescript}</div>
                    <div>{sSimbolMoney} {nPrice}</div>
                    <div>
                        <button>Comprar</button>
                    </div>
                </div>
            </article>
            <article className="ml-prod-additional">
                <div>Descripción del producto</div>
                <div>{sProductAdditInfo}</div>
            </article>
        </>
    );
}

DataProduct.propTypes = {  
    sImgPath: PropTypes.string.isRequired,  
    sImgDescript: PropTypes.string,
    sSimbolMoney: PropTypes.string.isRequired,
    nPrice: PropTypes.number.isRequired,
    nSoldQuantity: PropTypes.number,
    sProductDescript: PropTypes.string.isRequired,
    sProductAdditInfo: PropTypes.string
}