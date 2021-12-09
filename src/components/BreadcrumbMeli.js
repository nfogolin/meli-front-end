import React from 'react'  
import PropTypes from 'prop-types' 

/*
Ruta de "navegación" del/los productos buscados.
*/

export default function BreadcrumbMeli({ sCategories = [""] }) {
    return (
        <nav className="ml-breadcrumb">
            {
                sCategories?.map((category, index) => 
                    {
                        if (index !== sCategories?.length -1){
                            return <span key={index}> { category } &gt;</span>
                        }else{
                            return <span key={index}><strong> { category }</strong></span>
                        }
                    }
                )
            }
        </nav>
    )
}

BreadcrumbMeli.propTypes = {  
    sCategories: PropTypes.array
}