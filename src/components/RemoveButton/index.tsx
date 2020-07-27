import React, { useCallback } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { useModal } from '../../hooks/modal';

import { Container } from './styles';

interface Props {
  id: number;
}

const RemoveButton: React.FC<Props> = ({ id }) => {
  const { showModalRemove } = useModal();

  const handleRemoveTool = useCallback(() => {
    showModalRemove(id);
  }, [id, showModalRemove]);

  return (
    <Container onClick={handleRemoveTool}>
      <FiTrash2 size={20} />
      remove
    </Container>
  );
}

export default RemoveButton;
