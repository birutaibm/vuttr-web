import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .25);
`;

export const Container = styled.div`
  background-color: #fff;
  padding: 30px;
  width: 600px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: transparent;
  border: 0;
`;

export const TitleBar = styled.div`
  max-width: 528px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Icon = styled.div``;

export const Title = styled.h4`
  margin-left: 20px;
`;

export const ActionsBar = styled.div`
  margin-top: 30px;
  text-align: right;
`;

export const Button = styled.button`
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 5px;
  border: 0;
  margin-left: 29px;
  width: 122px;
  background-color: #e1e7fd;
  color: #365df0;

  &.primary {
    background-color: #365df0;
    color: #fff;
  }

  > #spinner {
    width: 35px;
    height: 35px;
    display: inline-block;
    border-radius: 100%;
    border-width: 2px;
    border-style: solid;
    border-image: initial;
    border-color: rgb(56, 163, 142) rgb(56, 163, 142) transparent;
    animation: 0.75s linear 0s infinite normal both running animation-s8tf20;
    background: transparent !important;
  }
`;

export const Confirmation = styled.p`
  font-size: 20px;
`;
