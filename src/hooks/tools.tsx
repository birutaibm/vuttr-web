import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

import api from '../services/api';
import apiTools from '../services/api';

export interface ITool {
  id: number;
  title: string;
  description: string;
  link?: string;
  tags: string[];
};

interface ToolsContext {
  tools: ITool[];
  removeToolById: (id: number) => void;
  addTool: (tool: Omit<ITool, 'id'>) => void;
  filterTool: (keyword: string, byTag?: boolean) => void;
}

const Context = createContext<ToolsContext>({} as ToolsContext);

export function useTools(): ToolsContext {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useTools must be used within an ToolsProvider');
  }

  return context;
}

export const ToolsProvider: React.FC = ({ children }) => {
  const [tools, setTools] = useState<ITool[]>([]);

  useEffect(() => {
    api.getTools().then(setTools);
  }, []);

  const apiError = useCallback((err) => {
    window.alert(
      'It appear this functionality is not supported at this version/environment'
    );
  }, []);

  const addTool = useCallback((tool: Omit<ITool, 'id'>) => {
    api.addTool(tool)
      .then(created => setTools(old => [ ...old, created ]))
      .catch(apiError);
  }, [setTools, apiError]);

  const removeToolById = useCallback((id: number) => {
    api.removeTool(id)
      .then(() => setTools(old => old.filter(tool => tool.id !== id)))
      .catch(apiError);
  }, [setTools, apiError]);

  const filterTool = useCallback((keyword: string, byTag = false) => {
    const search = byTag ? apiTools.findToolsByTag : apiTools.findTools;
    const found = keyword.length
      ? search(keyword)
      : apiTools.getTools();
    found.then(setTools).catch(apiError);
  }, [setTools, apiError]);

  return (
    <Context.Provider value={{ tools, removeToolById, addTool, filterTool }}>
      {children}
    </Context.Provider>
  );
};
