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
