import React, { createContext, useContext, useCallback, useState } from 'react';

import Login from '../components/Modal/Login';
import AddTool from '../components/Modal/AddTool';
import RemoveTool from '../components/Modal/RemoveTool';
import { useSession } from './session';

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
  const { isSignedIn } = useSession();

  const whenSignedIn = useCallback((showModal: () => void) => {
    if (isSignedIn) {
      showModal();
    } else {
      setModal(<Login onSuccess={showModal} />);
    }
  }, [isSignedIn]);

  const showModalAdd = useCallback(() => {
    whenSignedIn(() => setModal(<AddTool />));
  }, [whenSignedIn]);

  const showModalRemove = useCallback((id) => {
    whenSignedIn(() => setModal(<RemoveTool id={id} />));
  }, [whenSignedIn]);

  const closeModal = useCallback(() => {
    setModal(null);
  }, [setModal]);

  return (
    <Context.Provider
      value={{ modal, showModalAdd, showModalRemove, closeModal }}
    >
      {children}
    </Context.Provider>
  );
};
