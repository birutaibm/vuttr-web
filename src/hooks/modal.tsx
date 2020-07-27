import React, { createContext, useContext, useCallback, useState } from 'react';

import AddTool from '../components/Modal/AddTool';
import RemoveTool from '../components/Modal/RemoveTool';

type ModalElement = null | JSX.Element;

interface ModalContext {
  modal: ModalElement;
  showModalRemove: (id: number) => void;
  showModalAdd: () => void;
  closeModal: () => void;
}

const Context = createContext<ModalContext>({} as ModalContext);

export function useModal(): ModalContext {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useModal must be used within an ModalProvider');
  }

  return context;
}

export const ModalProvider: React.FC = ({ children }) => {
  const [modal, setModal] = useState<ModalElement>(null);

  const showModalAdd = useCallback(() => {
    setModal(<AddTool />);
  }, []);

  const showModalRemove = useCallback((id) => {
    setModal(<RemoveTool id={id} />);
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
  }, []);

  return (
    <Context.Provider
      value={{ modal, showModalAdd, showModalRemove, closeModal }}
    >
      {children}
    </Context.Provider>
  );
};
