import React, { useCallback } from 'react';
import { FiPlusSquare } from 'react-icons/fi';

import { useModal } from '../../hooks/modal';

import { Container } from './styles';

const AddButton: React.FC = () => {
  const { showModalAdd } = useModal();

  const handleAddTool = useCallback(() => {
    showModalAdd();
  }, [showModalAdd]);

  return (
    <Container onClick={handleAddTool}>
      <FiPlusSquare size={20} />
      Add
    </Container>
  );
}

export default AddButton;
