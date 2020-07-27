import React from 'react';

import { ModalProvider } from './modal';
import { ToolsProvider } from './tools';

const AppContext: React.FC = ({ children }) => {
  return (
    <ModalProvider>
      <ToolsProvider>
        {children}
      </ToolsProvider>
    </ModalProvider>
  );
}

export default AppContext;
