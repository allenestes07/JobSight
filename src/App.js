import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Profile from './Profile';
import About from './About';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const Wrapper = styled.div`
  display: block;
  width: 100%;
`;


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <Router>
            <Switch>
              <Route path="/" exact component={Profile}/>
              <Route path="/about" component={About}/>
            </Switch>
          </Router>
        </Wrapper>
      </div>
    );
  }
}


// <SideBar />
// <Content>
//   Test
// </Content>

export default App;
