import React, { Component } from 'react';
import { Wrapper, List, ListItem } from './ContactList.styled';

export class ContactList extends Component {
  handleRemoveClick(id) {
    this.props.removeContact(id);
  }

  render() {
    return (
      <Wrapper>
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
