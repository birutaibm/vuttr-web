import React from 'react';

import { SessionProvider } from './session';
import { ModalProvider } from './modal';
import { ToolsProvider } from './tools';

const AppContext: React.FC = ({ children }) => {
  return (
    <SessionProvider>
      <ModalProvider>
        <ToolsProvider>
          {children}
        </ToolsProvider>
      </ModalProvider>
    </SessionProvider>
  );
}

export default AppContext;
