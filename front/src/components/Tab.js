import React from "react";
import { TabsContext } from "./TabsContext";

class Tab extends React.Component {
  componentDidMount() {
    this.context.context.addTab({
      id: this.props.id,
      title: this.props.title,
      openedId: this.props.openedId
    });
  }

  render() {
    const { context: { activeTab: { id: activeTabId } } } = this.context;
     //const { context: { openedTab: { id: openedTabId } } } = this.context;
    const { children, id: tabId } = this.props; 
    return activeTabId === tabId && children;
  }
}

Tab.contextType = TabsContext;

export default Tab;
