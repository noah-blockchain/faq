import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabListItem = styled.li`
    display: block;
    list-style: none;
    margin-bottom: -1px;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: .75rem;
    border-left: 4px solid ${props => props.activeFontBorder};
    margin-top: .5em;
    margin-bottom: 1em;
    cursor: pointer;
    font-weight: ${props => props.activeFontWeight} !important;
    color: ${props => props.activeColor} !important;
    :hover {
        color: #b38340;
        border-left: 4px solid #cbd5e0;
    }
`;

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { 
      onClick,
      props: {
        activeTab,
        label
      },
    } = this;
    let activeColor = "";
    let activeFontWeight = "";
    let activeFontBorder = "";

    if (activeTab === label) {
        activeFontWeight = "700"
        activeColor = "#1a202c"
        activeFontBorder = "#b38340"
    } else {
        activeFontWeight = "400"
        activeColor = "#4a5568;"
        activeFontBorder = "white"
    }

    return (
      <TabListItem
        activeFontWeight={activeFontWeight}
        activeFontBorder={activeFontBorder}
        activeColor={activeColor}
        onClick={onClick}
      >
        {label}
      </TabListItem>
    );
  }
}


export default Tab;