import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import {Character} from "./Character"
import {Button} from "react-bootstrap"

export const Characters = () => {
    const [categoria, setCategoria] = useState('');
    const [status, setStatus] = useState('');
    const [personajes, setPersonajes] = useState([])
    const [pagina, setPagina] = useState(1);

    useEffect(() => {
        const request = async () => {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?gender=${categoria}&status=${status}&page=${pagina}`)
            console.log(response.data)
            const results = response.data.results
            setPersonajes(results)
        }
        request()
    }, [categoria,pagina,status])

    const changeCategoria = (event) => {
        setCategoria(event.target.value);
    };

    const changeStatus = (event) => {
        setStatus(event.target.value);
    };

    const clickPagina = () => {
        setPagina(pagina - 1);
    };

    const isAnteriorDisabled = pagina === 1;
    const isSiguienteDisabled = personajes.length === 0;

    return (
        <div>
          
            <form>
                <label htmlFor="category">Gender</label>
                <select name="category" id="category" onChange={changeCategoria}>
                    <option value="" >All</option>
                    <option >male</option>
                    <option >female</option>
                    <option >genderless</option>
                    <option >unknown</option>
                </select>
                <label htmlFor="estado">estado</label>
                <select name="estado" id="estado" onChange={changeStatus}>
                    <option value="" >All</option>
                    <option >Alive</option>
                    <option >Dead</option>
                    <option >Unknown</option>
                </select>
                
            </form>
            <div className="d-flex flex-wrap">
                {personajes.map((pj) => (
                    <Character pj={pj}/>
                ))}
            </div>
            <div>{pagina}</div>

            {/* si la pagina es igual a 1, que no se muestre el botón */}
            <Button onClick={clickPagina} disabled={isAnteriorDisabled}>Anterior</Button>
            <Button
                onClick={() => {
                    setPagina(pagina + 1);
                }}
                disabled={isSiguienteDisabled}
            >
                Siguiente
            </Button>
        </div>
    )
}
