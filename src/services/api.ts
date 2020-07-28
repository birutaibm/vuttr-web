import axios from 'axios';

import { ITool } from '../hooks/tools';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

async function getTools() {
  const { data } = await api.get<ITool[]>('/tools');
  return data;
}

async function findTools(keyword: string) {
  const { data } = await api.get<ITool[]>(`/tools?q=${keyword}`);
  return data;
}

async function findToolsByTag(tag: string) {
  const { data } = await api.get<ITool[]>(`/tools?tags_like=${tag}`);
  return data;
}

async function removeTool(id: number) {
  api.delete(`/tools/${id}`);
}

async function addTool(tool: Omit<ITool, 'id'>) {
  const { data } = await api.post<ITool>('/tools', tool);
  return data;
}

const apiTools = {
  getTools,
  findTools,
  findToolsByTag,
  addTool,
  removeTool,
};

export default apiTools;
