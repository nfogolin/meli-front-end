import React from 'react'  
import PropTypes from 'prop-types' 
import { Link } from 'react-router-dom'

/*
Componente que dibuja la fila con la información del producto: Recibe un grupo de props
para realizarlo.
*/

export default function DetailProductMeli ({sId = "",
                                            sImgPath = "",  
                                            sImgDescript = "Alt Opcional",
                                            sSimbolMoney = "$",
                                            nPrice = 0,
                                            sProductDescript = "Sin Descripción",
                                            sProductLocation = "Sin Ubicación",
                                            bShipping = false}) {
    return (
        <div className="ml-detail-external-layer">
            <article className="ml-detail-row">
                <figure className="ml-detail-image">
                    { <Link to={`/items/${sId}`}><img src={sImgPath} alt={sImgDescript}/></Link> }
                </figure>
                <div className="ml-detail-prod">
                    <div className={`ml-detail-price ${(bShipping === true?'ml-shipping':'')}`}>
                        {sSimbolMoney} {nPrice}
                    </div>
                    <div className="ml-detail-descript">
                        {sProductDescript}
                    </div>
                </div>
                <div className="ml-detail-location">
                    {sProductLocation}
                </div>
            </article>
        </div>
    )
}

DetailProductMeli.propTypes = {
    sId: PropTypes.string.isRequired,  
    sImgPath: PropTypes.string.isRequired,  
    sImgDescript: PropTypes.string,
    sSimbolMoney: PropTypes.string.isRequired,
    nPrice: PropTypes.number.isRequired,
    sProductDescript: PropTypes.string.isRequired,
    sProductLocation: PropTypes.string,
    bShipping: PropTypes.bool
}