import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import profileimg from './images/profileimg.jpg';

const navColor = '#2b3643';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Content = styled.section`
  width: 100%;
  background-color: #eef1f5;
`;

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div>
        <NavBar />
        <Wrapper>
          <SideBar />
          <Content>
            Test
          </Content>
        </Wrapper>
      </div>
    );
  }
}

export default App;
