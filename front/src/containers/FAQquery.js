import React from "react";
import { Header, Footer, Content } from '../components';
import axios from 'axios';
import config from '../config'
import styled from 'styled-components';

const Section = styled.section`
  padding-bottom: 100px;
`;

class FAQquery extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
        counter: 0,
        data: ""
      };
  }
  
  componentDidMount() {
    this.refetchData()
  }

  refetchData() {
    axios.get(`${config.localhost}/faq/en`)
        .then(response => {
            if (response.status === 200) { 
              this.setState({
                data: response.data
              })
            } 
        })
        .catch(error => {
          console.log("error", error)
        });
  }

  render() {
    return (
      <Section>
      <Header />
      <Content 
        refetchData={this.refetchData.bind(this)}
        data={this.state.data}/>
      <Footer />
     </Section>
    )
  }
}

export default FAQquery;