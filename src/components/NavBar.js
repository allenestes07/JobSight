import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const navColor = '#2b3643';
const searchbtn = '#febd69';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
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
const List = styled.button`
  display:inline-block;
  font-size: .875rem;
  margin-right: 20px;
  color: #FFFFFF;
  cursor: pointer;
  background: none;
  border: none;

  &:focus {
    outline: none;
  }
`;

const CareersDropDown = styled.div`
  position: abosolute;
  background-color: rgba(24,24,24,0.95);
  height: auto;
  width: 100%;
  padding-top: 2px;
  padding-bottom: 5px;
`;

const TechCareer = styled.div`
  display: block;
  background-color: #333333;
  height: 275px;
  margin-left: 10px;
  width: 25%;
  border-left: 4px solid  #36c6d3;

  >p {
    background-color: #2b3643;
    padding: 5px;
    font-size: .875rem;
    color: #FFFFFF;
    text-align: center;
  }
`;

const Techbtn = styled.button`
  margin-bottom: 5px;
  width: 100%;
  background: none;
  color: #aaa;
  border: none;
  cursor: pointer;

  &:hover {
    color: #FFFFFF;
  }
`;

class NavBar extends Component {
  constructor(props) {
    super(props);
      this.state = {
        opened: false
      };
      this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown() {
    this.setState({
      opened: !this.state.opened
    })
  }
  render() {
    return (
      <Wrapper>
        <Logo>
          <FontAwesome
            name='binoculars'
            style={{ color: '#febd69', display:'inline-block' }}
          />
          JobSight
        </Logo>
        <Search placeholder="search" type="search">
        </Search>
        <SearchBtn>
          <FontAwesome
            name='search'
          />
          </SearchBtn>
          <UnOrderedList>
          <List onClick={this.handleDropdown} >
            Careers
            <FontAwesome
              name='angle-down'
              style={{
                margin: '0 0 0 5px',
                display: 'inline-block',
                fontSize: '.875rem',
                height: '16px' }}
            />
          </List>
          <List>
            Employers
            <FontAwesome
              name='angle-down'
              style={{
                margin: '0 0 0 5px',
                display: 'inline-block',
                fontSize: '.875rem',
                height: '16px' }}
            />
          </List>
          </UnOrderedList>
          { this.state.opened &&
          <CareersDropDown>
            <TechCareer>
              <p>IT Careers</p>
                <Techbtn>
                  Developer Careers
                </Techbtn>
                <Techbtn>
                  HelpDesk Careers
                </Techbtn>
            </TechCareer>
          </CareersDropDown>
          }
      </Wrapper>
      );
  }
}

export default NavBar;
