import React from 'react'  
import PropTypes from 'prop-types' 

export default function BreadcrumbMeli({ sCategories = ["S/Categorías"] }) {
    return (
        <nav className="ml-breadcrumb">
            {
                sCategories?.map((category, index) => 
                    {
                        if (index !== sCategories?.length -1){
                            return <span> { category } &gt;</span>
                        }else{
                            return <span><strong> { category }</strong></span>
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