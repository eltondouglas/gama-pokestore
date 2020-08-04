import S from 'styled-components';

export const CardContainer = S.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: initial;
    width: 70%;
`;

export const HomeButtom = S.button`
    width:70px;
    height: 30px;
    align-text: center;
    background-color: #6b03fc;
    border-radius: 10px;
    border: none;
    color: white;
    box-shadow: 2px 2px 3px gray;

    &:hover{
        background-color: #c9352a;
    }
`;