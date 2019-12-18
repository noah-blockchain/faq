import React from "react";
import { TabProvider, TabConsumer } from "./TabsContext";
import TabItem from "./Tab";
import styled from 'styled-components';
import axios from 'axios';
import config from '../config'

const ListTabs = ({ children }) => (
  <ul style={{
    paddingLeft: 0,
    listStyle: "none",
    margin: 0,
    //width: "10em"
  }}>{ children }</ul>
);

const TabTitleItem = ({ children, innerRef, ...restProps }) => (
  <li 
  ref={innerRef}
  style={{
    display: "flex",
    width: "200px",
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  }} { ...restProps }>{ children }</li>
);

const TabAnchorItem = ({ isActiveTab, children, ...restProps}) => {
  const style = {
    display: "block",
    width: "100%",
    listStyle: "none",
    paddingTop: ".5rem",
    paddingBottom: ".5rem",
    paddingLeft: ".75rem",
    marginTop: ".5em",
    marginBottom: "1em",
    cursor: "pointer",
    fontWeight: "400 !important",
    color: "#4a5568",
    textDecoration: "none",
    borderLeft: "4px solid white",
    ":hover": {
      color: "#b38340",
      borderLeft: "4px solid #cbd5e0"
    }
  }

  if (isActiveTab) {
    style.transition = "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";
    style.cursor = "default";
    style.borderLeft = "4px solid #b38340";
    //  style.width = "100%";
  }

  return (
    <a style={style} {...restProps}>{ children }</a>
  );
};


const TabsContainer = ({ children, ...restProps }) => (
  <div style={{
    // width: "15%",
    position: "relative",
    // marginRight: "100px",
    // width: "5em"
  }}
  { ...restProps }>
    { children }
  </div>
);

const ReactTabs = ({ children, ...restProps }) => (
  <div style={{
    display: "flex",
     width: "0",
    justifyContent: "space-between",
    // margin: "0 auto"
  }}
  { ...restProps }>
    { children }
  </div>
);

class Tabs extends React.Component {
  static Tab = TabItem;
  
  state = {
    tabsElements: [],
    addingNew: false,
    language: "",
    tab: "",
    page: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if ((prevProps.language !== this.props.language) || prevProps.tab !== this.props.tab) {
        this.setState({
          language: this.props.language,
          tab: this.props.tab,
          page: this.props.page
        },()=>{})
    }   
}
  
  // componentDidMount() {
  //   // console.log("this.props => ",this.props)
  //   this.setState({
  //     language: this.props.language
  //   },() => { console.log("language => ",this.state.language) });
  // }

  plus = () => {
    this.setState( {
      addingNew: true
    })
  }

  save = () => {
    let value = this.inputNode.value
    const fixedData = value.replace(/&nbsp;/gi,'')
    const url = `${config.api}/${this.state.page}/${this.state.language}/addTab/${value}`
    axios.post(url, fixedData)
        .then(response => {
            if (response.status === 200) { 
              this.props.refetchData();
            } 
        })
        .catch(error => {
          console.log("error", error)
        });

    // console.log(this.inputNode.value)
    this.setState( {
      addingNew: false
    })
  }

  // editTab =(data) => {
  //   console.log("editTab init, data", data)
  // }

  render() {
    //  console.log("this.props => ", this.props)
    return (
      <TabProvider 
      removeData={this.props.removeData}
      refetchData={this.props.refetchData}
      language={this.props.language}
      page={this.props.page}
      activeTab={this.props.activeTab}
      dataUpdate={this.props.dataUpdate}
      openedTab={this.props.openedTab}>
        <TabConsumer>
          {value => (
            <ReactTabs>
              <TabsContainer>
                <ListTabs>
                  {value.context.tabs.map((tab, index) => (
                    <TabTitleItem
                      key={index}
                      id={tab.id}
                      innerRef={tabElement => {
                        if (!this.state.tabsElements[tab.id]) {
                          this.setState((prevState, props) => {
                            const tabsElements = prevState.tabsElements;
                            tabsElements[tab.id] = tabElement;
                            return {
                              tabsElements
                            };
                          });
                        }
                      }}
                    >
                      <TabAnchorItem
                        isActiveTab={value.context.activeTab.id === tab.id}
                        href="#!"
                        onClick={value.context.activateTab(tab)}
                        onKeyPress={event => {
                          const code = event.keyCode || event.which;
                          if (code === 13) {
                            this.activateTab(tab)(event);
                          }
                        }}
                      >
                        {tab.title}
                      </TabAnchorItem>
                    </TabTitleItem>
                  ))}
                </ListTabs>
              </TabsContainer>
              {this.props.children}
            </ReactTabs>
          )}
        </TabConsumer>
      </TabProvider>
    );
  }
}

export default Tabs;
