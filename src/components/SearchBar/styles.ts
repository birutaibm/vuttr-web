import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const InputContainer = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #EBEAED;
  border-radius: 5px;
  padding-left: 15px;
  background-color: #fff;

  & > input {
    border: 0;
    background: transparent;
    padding-left: 20px;
  }
`;
export const SearchCheck = styled.input`
  margin: 10px;
  width: 18px;
  height: 18px;
`;
