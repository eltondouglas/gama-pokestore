import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from '../styles/cardStyle';

export function Card(props) {

    const { name, url, price, addCart } = props;
    const [pokemonDetails, setPokemonDetails] = useState({})

    useEffect(() => {
        async function loadPokemon(adress) {
            const { data } = await axios.get(`${adress}`);
            const { id, sprites } = data;
            const { front_default } = sprites
            setPokemonDetails({ id, front_default });
        }
        loadPokemon(url)
    }, [url]);

    return (
        <>
            <S.Card>
                <S.CardTitle>ID:{pokemonDetails.id} {name}</S.CardTitle>
                <S.CardImg alt={name} src={pokemonDetails.front_default}/>
                <S.CardFooter>Price: ${price},00  <S.CardButton onClick={addCart}>Add</S.CardButton></S.CardFooter>
            </S.Card> 
        </>
    );
}