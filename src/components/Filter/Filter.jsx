import React, { Component } from 'react';

import { Wrapper, Label, Title } from './Filter.styled';

export class Filter extends Component {
    filterContacts = () => {
      this.props.filter(this.state.filter);
  };

  render() {
    return (
      <Wrapper>
        <Title>Contacts</Title>
        <Label>Find contacts by name</Label>
        <input type="text" onChange={this.filterContacts} />
      </Wrapper>
    );
  }
}
