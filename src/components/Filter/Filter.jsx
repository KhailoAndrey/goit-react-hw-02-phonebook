import PropTypes from 'prop-types';

import { Wrapper, Label, Title } from './Filter.styled';

export const Filter = ({ name, onChange }) => {
  return (
    <Wrapper>
      <Title>Contacts</Title>
      <Label>Find contacts by name</Label>
      <input type="text" name={name} onChange={onChange} />
    </Wrapper>
  );
};

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
