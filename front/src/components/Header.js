import React, { Component } from "react";
import styled from 'styled-components';
import header from '../img/bg-header-main.svg';
import logo from '../img/noah-logo-circle.svg';
import searchLogo from '../img/search-logo.svg';

const Section = styled.section`
    overflow: hidden;
    background-image: url(${header});
    background-size: cover;
    background-position: center;
    width: 100%;     
    border-width: 0;
    border-style: solid;
    border-color: #e2e8f0;
    font-family: 'Lato', sans-serif;
`;

const ContentSection = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    @media (min-width: 640px) {
            max-width: 640px
    }
    
    @media (min-width: 768px) {
            max-width: 768px
    }
    
    @media (min-width: 1024px) {
            max-width: 1024px
    }
    
    @media (min-width: 1280px) {
            max-width: 1280px
    }
`;

const ContentSectionLeft = styled.section`
    padding-left: 1rem;
    align-items: center;
    display: flex;
    letter-spacing: .05em;
    line-height: 1.5;
`;

const Logo = styled.div`
    height: 2.25em;
    width: 2.25em;
    display: block;
    vertical-align: middle;
    background-position: center;
    background-size: cover;
    background-image: url(${logo});
`;

const HeaderLogoText  = styled.div`
    color: #fff;
    margin-left: 10px;
    font-size: 26px;
`;

const ContentSectionCenter = styled.section`
    display: block;
    position: relative;
`;

const Search = styled.input`
    height: 1.5em;
    width: 23em;
    font-size: .875rem;
    color: #2d3748;
    padding-left: 2.5rem;
    padding-right: .5rem;
    padding-top: .25rem;
    padding-bottom: .25rem;
    line-height: 1.5;
    border-width: 1px;
    border-radius: .25rem;
    background-color: #f7fafc;
    overflow: visible;
`;

const SearchLogo = styled.div`
    height: 1em;
    width: 1em;
    display: block;
    vertical-align: middle;
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0.5rem;
    left: 0.8rem;
    background-image: url(${searchLogo});
`;

const ContentSectionRight = styled.section`
    display: block;
`;

const LoginButton = styled.div`
    align-items: center;
    width: 8.625em;
    display: block;
    background-color: transparent;
    border: 1px solid white;
    border-color: #fff;
    border-width: 2px;
    border-radius: 21px;
    color: #fff;
    display: flex;
    justify-content: center;
    margin-right: .75rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: .05em;
    font-family: 'Lato', sans-serif;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

class Header extends Component {
  render() {
    return (
      <Section>
          <ContentSection>
             <ContentSectionLeft>
                <Logo />
                <HeaderLogoText>
                    Noah FAQ
                </HeaderLogoText>
             </ContentSectionLeft>
             {/* <ContentSectionCenter>
                <Search placeholder="Search"/>
                <SearchLogo />
             </ContentSectionCenter> */}
             <ContentSectionRight>
                 <StyledLink to="/admin">
                 {/* <Route exact path="/admin" component={AdminPanel} /> */}
                <LoginButton >
                    Login
                </LoginButton>
                </StyledLink>
             </ContentSectionRight>
          </ContentSection>
      </Section>
    );
  }
}

export default Header;