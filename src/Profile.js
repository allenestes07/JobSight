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
  padding: 10px 0px 10px 0px;
  display: inline-block;
  float: left;
  width: 75%;
  background-color: #eef1f5;
  overflow: auto;
`;

const CardContainer = styled.div`
  padding: 2px 16px;
`;
const Card = styled.div`
  margin-left: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 45%;
  padding: 5px;
  border-radius: 5px;
  background:#333333;

  >h4 {
    display: inline;
    color: #dfc48c;
    }
  >p {
    display: inline;
    color: #9b869c;
    }
`;

class Profile extends Component {
  render() {
    return (
      <Wrapper>
        <SideBar users={this.props.users}/>
        <Content>
        <Card>
          <h4>College: </h4><p>{this.props.users.college}</p><br />
          <h4>Majors: </h4><p>{this.props.users.major}</p><br />
          <h4>GPA: </h4><p>{this.props.users.gpa}</p><br />
        </Card>
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
