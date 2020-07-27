import React from 'react';
import { FiXCircle } from 'react-icons/fi'

import { useModal } from '../../hooks/modal';
import { Container, CloseButton } from './styles';

const Modal: React.FC = ({ children }) => {
  const { closeModal } = useModal();

  return (
    <Container>
      {children}
      <CloseButton onClick={closeModal}>
        <FiXCircle size={12} />
      </CloseButton>
    </Container>
  );
}

export default Modal;
