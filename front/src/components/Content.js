import React from 'react';
import styled from 'styled-components';
import { Tabs } from './';
import DOMPurify from 'dompurify'

const Section = styled.section`
    padding-top: 4rem;
    width: 100%;
    padding-left: .5rem;
    padding-right: .5rem;
    margin-left: auto;
    margin-right: auto;
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

const TabsSection = styled.div`
    width 100%
`;

const TabsContent = styled.div`
    box-shadow: 0 4px 8px rgba(0,0,0,.1);
    color: #1a202c;
    padding: 2rem;
    line-height: 1.5;
    background-color: #fff;
`;

const TabsTitle = styled.h1`
    overflow-wrap: normal;
    word-break: normal;
    font-size: 1.25rem;
    color: #1a202c;
    padding-bottom: .5rem;
    font-weight: 400;
`;

const Border = styled.hr`
    border-bottom-width: 1px;
    border-color: #cbd5e0;

`;

class Content extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
       language: "",
       data: {},
       activeTab: "Main"
        };
    }
   
    componentDidUpdate(prevProps, prevState) {
        if ((prevProps.data !== this.props.data)) {
            this.setState({
                language: this.props.data.language,
                data: this.props.data.data
            })
        }   
    }

    dataUpdate (data) {
        this.setState({
            activeTab: data
        },()=>{})
     }

     createMarkup(innerHtml) {
        return {__html: innerHtml};
      }

    render() {
        console.log("this.state.data",this.state.data)
      return (
        <Section>
        <Tabs dataUpdate={this.dataUpdate.bind(this)}>
          <TabsSection label="Main">
              <TabsContent>
                  <TabsTitle>
                      Main page title
                  </TabsTitle>
                  <Border />
                  <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.data.Content)}}></div>
              </TabsContent>
          </TabsSection>

          <TabsSection label="Deligation">
              <TabsContent>
                  <TabsTitle>
                  Deligation page title
                  </TabsTitle>
                  <Border />
                  <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.data.Deligation)}}></div>
              </TabsContent>
          </TabsSection>

          <TabsSection label="Services">
              <TabsContent>
                  <TabsTitle>
                  Services page title
                  </TabsTitle>
                  <Border />
                  <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.data.Services)}}></div>
              </TabsContent>
          </TabsSection>

          <TabsSection label="Wallets">
              <TabsContent>
                  <TabsTitle>
                  Wallets page title
                  </TabsTitle>
                  <Border />
                  <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.data.Wallets)}}></div>
              </TabsContent>
          </TabsSection>

          <TabsSection label="Masternodes">
              <TabsContent>
                  <TabsTitle>
                  Masternodes page title
                  </TabsTitle>
                  <Border />
                  <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.data.Masternodes)}}></div>
              </TabsContent>
          </TabsSection>
        </Tabs>
      </Section>
      )
    }
  }

export default Content;