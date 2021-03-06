import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import profileimg from '../images/profileimg.jpg';

const navColor = '#2b3643';

const SideBar = styled.aside`
  width: 300px;
  height: 100%;
  background-color: #333333;
  color: #FFFFFF;
  padding-bottom: 10px;

  > h3 {
    text-align:center;
  }
`;

const ActiveBarBtn = styled.button`
  margin-top:10px;
  padding: 5px;
  width: 290px;
  height: 30px;
  background-color: ${navColor};
  border: none;
  border-left: 4px solid  #36c6d3;
  color: #FFFFFF;

  &:hover {
    background-color: #3e4b5c;
    border-left: 4px solid  #febd69;
    cursor: pointer;
  }
`;

const SideBarBtn = styled.button`
  margin-top: 5px;
  padding: 5px;
  width: 290px;
  height: 30px;
  background-color: ${navColor};
  border: none;
  border-left: 4px solid  #36c6d3;
  color: #FFFFFF;

  &:hover {
    background-color: #3e4b5c;
    border-left: 4px solid  #febd69;
    cursor: pointer;
  }
`;

const Image = styled.img`
  display:block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 200px;
  border-radius: 100%;
`;

const UserIcon = styled.div`
  display: inline-block;
  margin-right: 10px;
`;

const UserHeader = styled.div`
  margin-top: 0px;
  margin-bottom: 5px;
  padding: 5px;
  background-color: #2b3643;
  border-top: 1px solid #FFFFFF;
  border-bottom: 1px solid #FFFFFF;
  border-left: 4px solid  #febd69;
  cursor: pointer;

  > h3 {
    text-align:center;
    color: #FFFFFF;
  }
`;

class NavSideBar extends Component {
  render() {
    return (
  <SideBar>
    <UserHeader>
      <h3>
      Allen Estes
      </h3>
    </UserHeader>
    <Image src={profileimg} />
    <ActiveBarBtn>
      <UserIcon>
      <FontAwesome
        name='user'
      />
      </UserIcon>
        Profile
    </ActiveBarBtn>
    <SideBarBtn>
      <UserIcon>
        <FontAwesome
          name='home'
        />
      </UserIcon>
        About
    </SideBarBtn>
  </SideBar>
  );
 }
}


export default NavSideBar;
