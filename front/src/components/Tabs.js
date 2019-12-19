import React from "react";
import { TabProvider, TabConsumer } from "./TabsContext";
import TabItem from "./Tab";

const ListTabs = ({ children }) => (
  <ul style={{
    paddingLeft: 0,
    listStyle: "none",
    margin: 0,
  }}>{ children }</ul>
);

const ListTabsMobile = ({ children }) => (
  <select style={{
    display: "block",
    padding: "10px",
    listStyle: "none",
    border: "1px solid rgb(179, 131, 64)",
    borderRadius: "5px",
    margin: "0 auto 15px",
    webkitAppearance: "none",
    mozAppearance: "none",
    textIndent: "1px",
    textOverflow: '',
    width: "100%"
  }}>{ children }</select>
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

const TabTitleItemMobile = ({ children, innerRef, ...restProps }) => (
  <option  
  ref={innerRef}
  style={{
    display: "flex",
    width: "200px",
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  }} { ...restProps }>{ children }</option >
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
  }

  return (
    <a style={style} {...restProps}>{ children }</a>
  );
};

const TabsContainer = ({ children, ...restProps }) => (
  <div style={{
    position: "relative",
  }}
  { ...restProps }>
    { children }
  </div>
);

const TabsContainerMobile = ({ children, ...restProps }) => (
  <div style={{
    width: "100%",
    position: "relative",
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
  }}
  { ...restProps }>
    { children }
  </div>
);

const ReactTabsMobile = ({ children, ...restProps }) => (
  <div style={{
    display: "block",
     width: "100%",
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
  
  render() {
      if (window.innerWidth <= 640) {
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
                <ReactTabsMobile>
                  <TabsContainerMobile>
                    <ListTabsMobile>
                      {value.context.tabs.map((tab, index) => (
                        <TabTitleItemMobile
                          value={tab.title}
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
                          isActiveTab={value.context.activeTab.id === tab.id}
                            href="#!"
                            onClick={value.context.activateTab(tab)}
                            onKeyPress={event => {
                              const code = event.keyCode || event.which;
                              if (code === 13) {
                                this.activateTab(tab)(event);
                              }
                            }}
                        > {tab.title}
                         
                        </TabTitleItemMobile>
                      ))}
                    </ListTabsMobile>
                  </TabsContainerMobile>
                  {this.props.children}
                </ReactTabsMobile>
              )}
            </TabConsumer>
          </TabProvider>
        );
    } else {
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
}}}
export default Tabs;
