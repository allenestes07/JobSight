import React, { Component } from 'react';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
    return (
      <Wrapper>
        <SideBar users={this.props.users}/>
        <Content>
          <p>Majors: {this.props.users.major}</p>
          <p>GPA: {this.props.users.gpa}</p>
          <p>College: {this.props.users.college}</p>
        </Content>
      </Wrapper>
    );
  }
}

function mapStatetoProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStatetoProps)(Profile);
