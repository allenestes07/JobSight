import React, { Component } from 'react';
import styled from 'styled-components';

const navColor = '#2b3643';
const searchbtn = '#febd69';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  padding-bottom: 5px;
  background-color: ${navColor};
`;

const Search = styled.input`
  display:inline-block;
  line-height: 16px;
  margin-top: 10px;
  margin-left: 10px;
  width: 20%;
  height: 25px;
  border: 1px solid rgba(34,36,38,.15);
  padding: 5px;
  background-color: #f3f6f8;

  &:focus {
    background-color: #FFFFFF;
    border: 1px solid #85B7D9;
    cursor: pointer;
    outline: none;
  }
`;
const SearchBtn = styled.button`
  background-color: ${searchbtn};
  border: none;
  width: 45px;
  height: 25px;
  cursor: pointer;
`;
const Logo = styled.h3`
  display:inline-block;
  padding: 5px;
  margin-top: 10px;
  margin-left: 5px;
  color:#FFFFFF;
`;

const UnOrderedList = styled.ul`
  margin-left: 20px;
  display:inline-block;
  padding: 5px;
`;
// background-color: #000000;
const List = styled.li`
  display:inline-block;
  font-size: .875rem;
  margin-right: 20px;
  color: #FFFFFF;
  cursor: pointer;
`;

export default NavBarStyle;
