import React from 'react';

import { useModal } from '../../hooks/modal';

import { Wrapper } from './styles';

const ModalWrapper: React.FC = () => {
  const { modal } = useModal();

  return modal ? (
    <Wrapper>
      {modal}
    </Wrapper>
  ) : null;
}

export default ModalWrapper;
