import React from 'react'  

export default function HeaderMeli(){
    return (
        <header className="ml-header">
            <div className="ml-logo">
                <img src="assets/Logo_ML.png" alt="Mercadolibre"/>
            </div>
            <div className="ml-input">
                <input type="text" placeholder="Nunca dejes de buscar" />
                <form>
                    <button type="submit"></button>
                </form>
            </div>
        </header>
    )
}