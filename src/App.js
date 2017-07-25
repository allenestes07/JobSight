import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

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
