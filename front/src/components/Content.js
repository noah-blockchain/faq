import React from 'react';
import styled from 'styled-components';
import { Tabs } from './';
import DOMPurify from 'dompurify'

const Section = styled.section`
    padding-top: 4rem;
    padding-bottom: 4rem;
    width: 95%;
    padding-left: .5rem;
    padding-right: .5rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex: 1 0 auto;
    @media (max-width: 640px) {
        width: 95%;
        margin: 0 auto;
        display: block;
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

const TabsBlock = styled.div`
    box-shadow: 0 4px 8px rgba(0,0,0,.1);
    color: #1a202c;
    padding: 2rem;
    line-height: 1.5;
    background-color: #fff;
    min-height: 300px;
    @media (min-width: 640px) {
        width: 340px;
    }
    @media (min-width: 768px) {
        width: 450px;
    }
    @media (min-width: 800px) {
        width: 500px;
    }
    @media (min-width: 900px) {
        width: 550px;
    }
    // @media (min-width: 1024px) {
    //     width: 724px;
    // }
    @media (min-width: 1280px) {
        width: 880px;
    }
`;

class Content extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
       language: "",
       data: [],
       activeTab: "Main",
       page: ""
        };
    }
   
    componentDidUpdate(prevProps, prevState) {
        if ((prevProps.data !== this.props.data)) {
            this.setState({
                language: this.props.language,
                data: this.props.data,
                page: this.props.page
            })
        }   
    }

    dataUpdate (data) {
        this.setState({
            activeTab: data.title
        },()=>{})
     }

     createMarkup(innerHtml) {
        return {__html: innerHtml};
      }

    render() {
        if (!this.state.data) {
            
            return (
        <div>
            Fetching data...
        </div>
        )
            }
        else if (this.state.data) {
                return (
        <Section>
            <Tabs
                dataUpdate={this.dataUpdate.bind(this)}
                page={this.state.page}
                activeTab={{id:0}}
                language={this.state.language}
            >
            {this.state.data.map(((object, id) => {
             return  <TabsSection key={id}>
                        <Tabs.Tab id={id} title={object.Header}>
                            <TabsBlock dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(object.Content)}}></TabsBlock>
                        </Tabs.Tab>
                    </TabsSection>  ;
             }))}
            </Tabs>
        </Section>
                )
        }
    }
  }

export default Content;