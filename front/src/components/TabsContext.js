import React from "react";
import axios from 'axios';
import config from '../config'

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
    // console.log("props",this.props)
    this.props.dataUpdate(tab);
  };

  editTab = tab => event => {
    // console.log("edit init, id => ",tab)
    this.setState((prevState, props) => {
      return {
        prevOpenedTab: prevState.openedTab,
        openedTab: tab
      };
    },() => {});
  };

  deleteTab = tab => event => {
    // console.log("remove init, id => ",tab)
    const url = `${config.api}/${this.props.page}/${this.props.language}/removeTab/${tab.title}`
    axios.delete(url)
        .then(response => {
            if (response.status === 200) { 
              
              //this.props.removeData(tab.id)
              document.location.reload(true);
            } 
        })
        .catch(error => {
          console.log("error", error)
        });
  };

  saveTab = tab => event => {
     const url = `${config.api}/${this.props.page}/${this.props.language}/editTab/${tab.id}`
      axios.put(url, tab)
        .then(response => {
            if (response.status === 200) { 
              this.props.refetchData()
            } 
        })
        .catch(error => {
          console.log("error", error)
        });
    this.setState((prevState, props) => {
      return {
        prevOpenedTab: prevState.openedTab,
        openedTab: ""
      };
    },() => {  });
  };

  render() {
    //console.log("this.props => ", this.props)
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
