import React from 'react'  
import { useForm } from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';

/*
Barra de busqueda MELI, al clickear hacer un redirect con React-Router al componente detalle.
*/

export default function HeaderMeli(){

    const navigate = useNavigate();

    const [ formValues, handleInputChange] = useForm({
        searchText : ''
    });

    const {  searchText } = formValues;

    const handleSearch = (evt) => {
        evt.preventDefault();
        if (searchText !== ''){
            navigate(`/items?search=${searchText}`, {
                replace: true
            });
        }
    }

    return (
        <header className="ml-header">
            <div className="ml-logo">
                <img src="../assets/Logo_ML.png" alt="Mercadolibre"/>
            </div>
            <div className="ml-input">
                <form onSubmit= { handleSearch }>
                    <input  type="text" 
                            placeholder="Nunca dejes de buscar" 
                            name = "searchText"
                            value = { searchText }
                            onChange= { handleInputChange }
                    />
                    <button type="submit"></button>
                </form>
            </div>
        </header>
    )
}