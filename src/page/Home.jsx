import React, { useEffect, useState } from 'react';
import api from '../api/getPoke';
import { Card } from '../components/card';
import { Cart } from '../components/cart';
import * as S from '../styles/homeStyle';
import UppercaseFirstLetter from '../utils/uppercaseFirstLetter';
import Header from '../components/header';

function Home() {

    const [pokemon, setPokemon] = useState([]);
    const [pagination, setPagination] = useState('/pokemon')
    const [cart, setCart] = useState([])

    useEffect(() => {
        async function getPokemon() {
            const { data } = await api.get(pagination);
            const { next } = data;
            let results = data.results.map((pokemonster, i) => ({ ...pokemonster, name: UppercaseFirstLetter(pokemonster.name), price: i * 13 + 3, next }));
            setPokemon((p) => {
                return [...p, ...results]
            });
        }
        getPokemon();
    }, [pagination])

    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        if(cartData){
            setCart(JSON.parse(cartData))
        }
    }, [])

    function handleGetPokemon() {
        const nextUrl = pokemon[pokemon.length - 1].next;
        setPagination(nextUrl);
    }

    function addToCart(item) {
        const cartList = [];

        const pokemonCart = {
            id: item.id,
            name: item.name,
            price: item.price,
            qtd: 1

        }

        const index = cart.findIndex((e) => e.name === item.name);

        if (index !== -1) {
            cart[index].qtd += 1
            setCart([...cart])
            localStorage.setItem('cart', JSON.stringify(cart))
        } else {
            cartList.push(pokemonCart)
            setCart([...cartList, ...cart])
            localStorage.setItem('cart', JSON.stringify(cart))
        };
    }

    function clearCart(){
        setCart([]);
        localStorage.clear();
    }

    if (pokemon.length > 0) {

        return (
            <>
                <Header/>

                <Cart pokemonCart={cart} clearCart={() => clearCart()} />
                <S.CardContainer>
                    {pokemon.map((e, i) => {
                        return (
                            <Card key={i} name={e.name} url={e.url} price={e.price} addCart={() => addToCart(e)} />
                        );
                    })}
                </S.CardContainer>

                <S.HomeButtom type='button' onClick={handleGetPokemon}>Ver mais</S.HomeButtom>
            </>
        );
    } else {
        return (
            <>
                <p style={{ 'textAlign': 'center' }}>
                    Desculpe não conseguimos obter os dados!
                </p>
            </>
        );
    }
}

export default Home;