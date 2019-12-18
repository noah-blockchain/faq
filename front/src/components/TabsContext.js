import React from "react";

const TabsContext = React.createContext({
  context: {
    prevActiveTab: {},
    activeTab: {},
    prevOpenedTab: {},
    openedTab: {},
  }
});

class TabProvider extends React.Component {
  state = {
    tabs: [],
    prevActiveTab: {},
    activeTab: this.props.activeTab,
    prevOpenedTab: {},
    openedTab: this.props.openedTab
  };

  addTab = tab => {
    const isTabExist = this.state.tabs.find((t) => tab.id === t.id);

    if (!isTabExist) {
      this.setState((prevState, props) => {
        return {
          tabs: prevState.tabs.concat(tab)
        };
      });
    }
  };

  removeTab = tabId => {
    this.setState((prevState, props) => {
      return {
        tabs: prevState.tabs.filter(tab => tab.id !== tabId)
      };
    });
  };

  activateTab = tab => event => {
    this.setState((prevState, props) => {
      return {
        prevActiveTab: prevState.activeTab,
        activeTab: tab
      };
    },()=>{});
    this.props.dataUpdate(tab);
  };

  editTab = tab => event => {
    this.setState((prevState, props) => {
      return {
        prevOpenedTab: prevState.openedTab,
        openedTab: tab
      };
    },() => {});
  };

  render() {
    
    return (
      <TabsContext.Provider
        value={{
          context: {
            ...this.state,
            addTab: this.addTab,
            removeTab: this.removeTab,
            activateTab: this.activateTab,
            editTab: this.editTab,
            deleteTab: this.deleteTab,
            saveTab: this.saveTab
          }
        }}
      >
        {this.props.children}
        
      </TabsContext.Provider>
    );
  }
}

const TabConsumer = TabsContext.Consumer;

export { TabProvider, TabsContext, TabConsumer };
