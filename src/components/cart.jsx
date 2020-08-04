import React from 'react';
import * as S from '../styles/cartStyle'

export function Cart(props) {

    const { pokemonCart, clearCart } = props;



    if (pokemonCart) {



        return (
            <S.CartContainer>
                <S.CartTitle>Cart</S.CartTitle>

                <S.HorizontalRow />
                <S.CartList>
                    {pokemonCart.map(pokemon => (
                        <S.CartListItem key={pokemon.name}>
                            {` ${pokemon.qtd}x ${pokemon.name} - Valor: $${pokemon.price},00`}
                        </S.CartListItem>
                    ))}
                </S.CartList>
                <S.CartFooter>
                    <S.CartButton disabled={pokemonCart.length === 0} onClick={clearCart}>Limpar</S.CartButton>
                    <S.CartButton disabled={pokemonCart.length === 0} onClick={() => {
                        clearCart();
                        alert('Compra finalizada');
                    }}>Finalizar</S.CartButton>
                </S.CartFooter>
            </S.CartContainer>
        );
    }
    return (
        <>
            <S.CartContainer>
                <S.CartTitle>Cart</S.CartTitle>
            </S.CartContainer>

        </>
    );

}