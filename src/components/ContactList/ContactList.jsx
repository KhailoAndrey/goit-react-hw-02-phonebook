import React, { Component } from 'react';
import { Filter } from '../Filter/Filter.jsx';
import { Wrapper, Title, List, ListItem } from './ContactList.styled';

export class ContactList extends Component {
  handleRemoveClick(id) {
    this.props.removeContact(id);
  }

  render() {
    return (
      <Wrapper>
        <Title>Contacts</Title>
        <Filter></Filter>
        <List>
          {this.props.contacts.map(contact => (
            <ListItem key={contact.id}>
              <span>{contact.name}: </span>
              <span>{contact.number}</span>
              <button onClick={() => this.handleRemoveClick(contact.id)}>
                Delete
              </button>
            </ListItem>
          ))}
        </List>
      </Wrapper>
    );
  }
}
