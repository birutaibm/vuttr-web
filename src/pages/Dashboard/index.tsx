import React from 'react';

import { useTools } from '../../hooks/tools';
import Tool from '../../components/Tool';
import SearchBar from '../../components/SearchBar';
import AddButton from '../../components/AddButton';

import { Container, Title, Subtitle, ToolBar, ToolList } from './styles';

const Dashboard: React.FC = () => {
  const { tools } = useTools();

  return (
    <Container>
      <Title>VUTTR</Title>
      <Subtitle>Very Useful Tools to Remember</Subtitle>
      <ToolBar>
        <SearchBar />
        <AddButton />
      </ToolBar>
      <ToolList>
        {tools.map(tool => (
          <Tool
            key={tool.id}
            id={tool.id}
            title={tool.title}
            description={tool.description}
            link={tool.link}
            tags={tool.tags}
          />
        ))}
      </ToolList>
    </Container>
  );
}

export default Dashboard;
