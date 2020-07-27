import styled from 'styled-components';

export const Container = styled.li`
  margin: 20px 0;
  padding: 20px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 10px #0000000D;
  border: 1px solid #EBEAED;
  border-radius: 5px;
`;

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.a`
  font-size: 24px;
  font-weight: bold;
`;

export const Description = styled.p`
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const Tag = styled.li`
  margin: 0 5px;
  font-size: 18px;
  font-weight: bold;
`;
