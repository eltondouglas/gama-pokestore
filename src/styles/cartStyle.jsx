import S from 'styled-components';

export const CartContainer = S.div`
    position: fixed;
    right: 10px;
    width: 300px;
    height: 400px;
    border: 5px solid #403f3e;
    border-radius: 10px;
    margin: 5px;
    background-image: linear-gradient(to bottom, #6b03fc, #eb5031);
    overflow-y: scroll;
`;

export const CartTitle = S.h4`
    color: #ff4d4d;
    text-align: center;
`;

export const CartFooter = S.div`
    position: relative;
    bottom: 5px;
    display:flex;
    justify-content: space-around;
    width: 100%;
`;

export const HorizontalRow = S.hr`
    border: 3px solid #403f3e;
`;

export const CartButton = S.button`
    width:70px;
    height: 30px;
    align-text: center;
    background-color: #6b03fc;
    border-radius: 10px;
    border: none;
    color: white;

    &:hover{
        background-color: #343635;
    }
`;

export const CartList = S.ul`
    list-style-type: none;
`;

export const CartListItem = S.li`
    color: white;
`;