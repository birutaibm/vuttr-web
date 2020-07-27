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
  removeToolById: (id: number) => Promise<void>;
  addTool: (tool: Omit<ITool, 'id'>) => Promise<void>
  filterTool: (keyword: string, byTag?: boolean) => Promise<void>;
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

  const addTool = useCallback(async (tool: Omit<ITool, 'id'>) => {
    const created = await api.addTool(tool);
    setTools(old => [ ...old, created ]);
  }, [setTools]);

  const removeToolById = useCallback(async (id: number) => {
    await api.removeTool(id);
    setTools(old => old.filter(tool => tool.id !== id));
  }, [setTools]);

  const filterTool = useCallback(async (keyword: string, byTag = false) => {
    const search = byTag ? apiTools.findToolsByTag : apiTools.findTools;
    const found = keyword.length
      ? await search(keyword)
      : await apiTools.getTools();
    setTools(found);
  }, [setTools]);

  return (
    <Context.Provider value={{ tools, removeToolById, addTool, filterTool }}>
      {children}
    </Context.Provider>
  );
};
