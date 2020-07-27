import styled, { css } from 'styled-components';

interface Props {
  error: string | undefined;
}

export const Container = styled.fieldset<Props>`
  border: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 30px 0;

  & > label {
    margin-bottom: 20px;

    svg {
      margin: auto 8px;
      color: ${({error}) => error ? '#f95e5a' : '#8f8a9b'};
    }
  }

  & > input {
    width: 100%;
    border: 1px solid #EBEAED;
    border-radius: 5px;
    padding: 12px 20px;

    ${({error}) => error && css`
      border-color: #f95e5a;
      color: #f95e5a;
      background-color: #feefee;
    `}
  }

  & > textarea {
    width: 100%;
    border: 1px solid #EBEAED;
    border-radius: 5px;
    padding: 12px 20px;
    resize: none;

    ${({error}) => error && css`
      border-color: #f95e5a;
      color: #f95e5a;
      background-color: #feefee;
    `}
  }

  & > span {
    width: 100%;
    text-align: right;
    color: #f95e5a;
    font-size: 18px;
    margin-top: 8px;
  }
`;
