import React, { createContext, useContext, useState, useCallback } from 'react';

import apiTools from '../services/api';

interface SessionContext {
  isSignedIn: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const Context = createContext<SessionContext>({} as SessionContext);

export function useSession(): SessionContext {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useSession must be used within an SessionProvider');
  }

  return context;
}

export const SessionProvider: React.FC = ({ children }) => {
  const [isSignedIn, setSignedIn] = useState<boolean>(false);

  const signIn = useCallback(async (email: string, password: string) => {
    if (!isSignedIn) {
      await apiTools.signIn(email, password);
      setSignedIn(true);
    }
  }, [isSignedIn, setSignedIn]);

  const signOut = useCallback(async () => {
    if (isSignedIn) {
      await apiTools.signOut();
      setSignedIn(false);
    }
  }, [isSignedIn, setSignedIn]);

  return (
    <Context.Provider value={{ isSignedIn, signIn, signOut }}>
      {children}
    </Context.Provider>
  );
};
