import React from 'react'  
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { setSearchResults } from '../store/actions';

import { useNavigate } from 'react-router-dom';

export default function HeaderMeli(){

    let searchResults = {
        "author":{
          "name":"String",
          "lastname":"String"
        },
        "categories":[
          "Electrónica, Audio y Video",
          "iPod",
          "Reproductores",
          "iPod touch",
          "32 GB"
        ],
        "items":[
          {
              "id":"e0cb8381-dc8e-48f5-8d11-11108a6b83a5",
              "title":"Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!",
              "price":{
                "currency":"$",
                "amount":1980,
                "decimals":0
              },
              "picture":"assets/Cel1.jpg",
              "condition":"String",
              "free_shipping":true
          },
          {
            "id":"e0cb8381-dc8e-48f5-8d11-11108a6b83a6",
            "title":"Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!",
            "price":{
              "currency":"$",
              "amount":1980,
              "decimals":0
            },
            "picture":"assets/Cel3.jpg",
            "condition":"String",
            "free_shipping":false
        }
        ]
    }

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [ formValues, handleInputChange] = useForm({
        searchText : ''
    });

    const {  searchText } = formValues;

    const handleSearch = (evt) => {
        evt.preventDefault();
        if (searchText !== ''){
            dispatch(setSearchResults(searchResults));
            navigate(`/items?search=${searchText}`);
        }
    }

    return (
        <header className="ml-header">
            <div className="ml-logo">
                <img src="assets/Logo_ML.png" alt="Mercadolibre"/>
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