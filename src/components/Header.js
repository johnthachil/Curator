import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../logo.svg';

const Header = () => (
  <Main>
    <Link to="/">
      <img src={Logo} alt="" />
    </Link>
  </Main>
);

export default Header;

const Main = Styled.header`
  background-color:#241878;
  padding: 19px 24px 19px 24px;
  border-bottom:10px solid #3C27C5;
`;
