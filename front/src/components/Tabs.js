import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Tab } from './';

const TabsSection = styled.div`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    display: flex;
    width: 100%;
`;

const TabList = styled.ol`
    width: 15%;
    padding-left: 0;
`;

const TabItem = styled.ol`
    width: 100%;
    margin-bottom: 5em;
`;

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
    this.props.dataUpdate(tab);
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <TabsSection>
        <TabList>
          {children.map((child) => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </TabList>
        <TabItem>
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </TabItem>
      </TabsSection>
    );
  }
}

export default Tabs;