import S from 'styled-components';

export const Card = S.div`
    border: 1px solid gray;
    width: 200px;
    height: 200px;
    text-align: center;
    margin 5px;
    border-radius: 20px;
    padding: 5px;
    background-image: linear-gradient(to bottom, #663399, #800080);
    box-shadow: 2px 2px 3px gray;

    &:hover{
        width: 205px;
        height: 205px;
    }
`;

export const CardTitle = S.p`
    color: #ff4d4d;
    background-image: linear-gradient(to right, #800080, #663399);
    border-radius: 10px;
`;

export const CardImg = S.img`
    color: white;
`;

export const CardFooter = S.p`
    color: white;
`;

export const CardButton = S.button`
    width:50px;
    height: 30px;
    align-text: center;
    background-color: #6b03fc;
    border-radius: 10px;
    border: none;
    color: white;

    &:hover{
        background-color: #ff4d4d;
    }
`;