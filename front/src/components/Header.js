import React, { Component } from "react";
import styled from 'styled-components';
import header from '../img/bg-header-main.svg';
import logo from '../img/noah-logo-circle.svg';
import japanImage from '../img/japan.svg';
import englishImage from '../img/united-kingdom.svg';

const Section = styled.section`
    overflow: hidden;
    background-image: url(${header});
    color: #fff;
    background-size: cover;
    padding: 34px 0;
    width: 100%;
    height: 60px; 
    position: absolute;
    top: 0;
    margin-bottom: 60px;
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
    
    @media (min-width: 768px) {
            max-width: none
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

const ContentSectionRight = styled.section`
    display: block;
    padding-right: 1rem;
`;

const CountryButton = styled.div`
    align-items: center;
    width: 2em;
    height: 1em;
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
    background: url(${props => props.language === "en" ? englishImage  : japanImage});
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
                {this.props.title}
                </HeaderLogoText>
             </ContentSectionLeft>
             <ContentSectionRight>
                 <StyledLink to="/admin">
                <CountryButton 
                onClick={this.props.changeLanguage}
                language={this.props.language}/>
                </StyledLink>
             </ContentSectionRight>
          </ContentSection>
      </Section>
    );
  }
}

export default Header;