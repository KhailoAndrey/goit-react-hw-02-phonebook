import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 8px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const AddBox = styled.div`
  border: 1px solid ${p => p.theme.colors.black};
  width: 300px;
  padding: 10px;
`;

export const Label = styled.h3`
  margin: 8px 0;
  font-size: 18px;
  font-weight: 400;
`;

export const AddContactButton = styled.button`
  margin-top: 20px;
border-radius: 4px
`;
