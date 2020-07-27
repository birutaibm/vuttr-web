import axios from 'axios';

import { ITool } from '../hooks/tools';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

// FIXME Change this to a real implementation (consulting a server)

// let tools = [{
//   id: '1',
//   title: 'Notion',
//   link: "https://notion.so",
//   description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
//   tags: [
//     "organization",
//     "planning",
//     "collaboration",
//     "writing",
//     "calendar"
//   ]
// },
// {
//   id: '2',
//   title: "json-server",
//   link: "https://github.com/typicode/json-server",
//   description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
//   tags: [
//     "api",
//     "json",
//     "schema",
//     "node",
//     "github",
//     "rest"
//   ]
// },
// {
//   id: '3',
//   title: "fastify",
//   link: "https://www.fastify.io/",
//   description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
//   tags: [
//     "web",
//     "framework",
//     "node",
//     "http2",
//     "https",
//     "localhost"
//   ]
// }];

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
