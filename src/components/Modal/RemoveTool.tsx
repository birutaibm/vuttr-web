import React, { useCallback, useMemo, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { useModal } from '../../hooks/modal';

import Modal from '.';
import { TitleBar, Title, Confirmation, ActionsBar, Button } from './styles';
import { useTools } from '../../hooks/tools';

interface Props {
  id: number;
}

const RemoveTool: React.FC<Props> = ({ id }) => {
  const { closeModal } = useModal();

  const { tools, removeToolById } = useTools();
  const tool = useMemo(
    () => tools.find(candidate => candidate.id === id),
    [id, tools]
  );
  useEffect(() => {
    if (!tool) {
      closeModal();
    }
  }, [tool, closeModal]);

  const handleCancel = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const handleRemove = useCallback(() => {
    removeToolById(id);
    closeModal();
  }, [closeModal, removeToolById, id]);

  return tool ? (
    <Modal>
      <TitleBar>
        <FiTrash2 size={26} color={'#170c3a'} />
        <Title>Remove tool</Title>
      </TitleBar>
      <Confirmation>
        Are you sure you want to remove {tool.title}?
      </Confirmation>
      <ActionsBar>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button className="primary" onClick={handleRemove}>Yes, remove</Button>
      </ActionsBar>
    </Modal>
  ) : null;
}

export default RemoveTool;
