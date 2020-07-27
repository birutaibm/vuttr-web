import React from 'react';

import RemoveButton from '../RemoveButton';

import { Container, TitleBar, Title, Description, Tags, Tag } from './styles';

interface Props {
  id: number;
  title: string;
  description: string;
  link?: string;
  tags: string[];
}

const Tool: React.FC<Props> = ({ id, title, description, link, tags }) => {
  return (
    <Container>
      <TitleBar>
        <Title href={link}>{title}</Title>
        <RemoveButton id={id} />
      </TitleBar>
      <Description>{description}</Description>
      <Tags>
        {tags.map(tag => (
          <Tag key={tag}>
            {tag}
          </Tag>
        ))}
      </Tags>
    </Container>
  );
}

export default Tool;
