import React from "react";
import { Header, Footer, Content } from '../components';
import axios from 'axios';
import config from '../config'
import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`;

class FAQquery extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      data: "",
      title: "Noah FAQ",
      language: "en",
      page: "faq",    
      height: window.innerHeight, 
      width: window.innerWidth
      };
      this.updateDimensions = this.updateDimensions.bind(this);
  }
  
  componentDidMount() {
    this.refetchData()
    window.addEventListener("resize", this.updateDimensions)
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight, 
      width: window.innerWidth
    });
  }


  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  refetchData() {
    axios.get(`${config.api}/${this.state.page}/${this.state.language}`)
    .then(response => {
      if (response.status === 200) { 
        if (response.status === 200) { 
          const data = response.data.data
          this.setState({
            data
            }
          )
          this.forceUpdate()
        } 
      } 
    })
    .catch(error => {
      console.log("error", error)
    });
  }

  changeLanguage = () => {
    if (this.state.language === "en") {
      this.setState({
        language: "jp"
        }, () => { this.refetchData()})
    } else {
      this.setState({
        language: "en"
        }, () => { this.refetchData()})
    }
  }

  render() {
    return (
      <Section>
      <Header 
      title={this.state.title}
      changeLanguage={this.changeLanguage}
      language={this.state.language}/>
      <Content 
        refetchData={this.refetchData.bind(this)}
        data={this.state.data}/>
      <Footer />
     </Section>
    )
  }
}

export default FAQquery;