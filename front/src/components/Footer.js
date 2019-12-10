import React, { Component } from "react";
import styled from 'styled-components';
import footer from '../img/footer-bg.svg';
import logo from '../img/noah-logo-white.svg';

const Section = styled.section`
    overflow: hidden;
    background-image: url(${footer});
    color: #fff;
    background-size: contain;
    padding: 34px 0;
    width: 100%;
    height: auto; 
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const ContentSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
`;

const Logo = styled.div`
    display: block;
    margin-left: 10px;
    width: 255px;
    height: 66px;
    background-image: url(${logo});
`;

const ContentSectionRight = styled.section`
    display: block;
`;

const FooterMenu = styled.div`
    font-size: 14px;
    font-weight: 800;
    display: inline-block;
`;

const FooterMenuLink = styled.a`
    font-size: 14px;
    font-weight: 800;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    ::after {
        content: " | ";
        margin: 0px 3px;
    }
`;

const FooterMenuLastLink = styled.a`
    font-size: 14px;
    font-weight: 800;
    display: inline-block;
    cursor: pointer;
    ::after {
        margin: 0px 3px;
    }
`;

class Footer extends Component {
  render() {
    return (
      <Section>
          <ContentSection>
            <Logo />
             <ContentSectionRight>
                <FooterMenu>
                   <FooterMenuLink >
                        Intro
                   </FooterMenuLink>
                   <FooterMenuLink>
                       Network
                   </FooterMenuLink>
                   <FooterMenuLink target="_blank" href="http://ark-wallet.testnet.noah-blockchain.com/">
                       Ark wallet
                   </FooterMenuLink>
                   <FooterMenuLink target="_blank" href="http://explorer.testnet.noah-blockchain.com/">
                       Explorer
                   </FooterMenuLink>
                   <FooterMenuLastLink>
                       Docs
                   </FooterMenuLastLink>
                </FooterMenu>
             </ContentSectionRight>
          </ContentSection>
      </Section>
    );
  }
}

export default Footer;