import React from 'react';
import * as S from '../styles/headerStyle';
import Logo from '../assets/logo-pokemon-79x45.png';


function Header(){

    return(
       <S.HeaderLogo>
           <S.HeaderImg alt='Logo' src={Logo}/>
       </S.HeaderLogo>
    );
}

export default Header;