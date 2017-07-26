import React, { Component } from 'react';
import styled from 'styled-components';
import SideBar from './components/SideBar';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const Content = styled.section`
  display: inline-block;
  float: left;
  width: 75%;
  background-color: #eef1f5;
  overflow: auto;
`;

class Profile extends Component {
  render() {
    console.log(this.state);
    return (
      <Wrapper>
        <SideBar />
        <Content>
          Test Content
        </Content>
      </Wrapper>
    );
  }
}


// <SideBar />
// <Content>
//   Test
// </Content>

export default Profile;
