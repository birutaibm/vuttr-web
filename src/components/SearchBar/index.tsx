import React, { useState, useCallback } from 'react';

import { useTools } from '../../hooks/tools';
import SearchInput from './SearchInput';
import { Container, SearchCheck } from './styles';

const SearchBar: React.FC = () => {
  const [onlyInTags, setOnlyInTags] = useState(false);
  const { filterTool } = useTools();

  const toggleOnlyInTags = useCallback(
    () => setOnlyInTags(old => !old),
    [setOnlyInTags]
  );

  const search = useCallback(
    (keyword: string) => filterTool(keyword, onlyInTags),
    [onlyInTags, filterTool]
  );

  return (
    <Container>
      <SearchInput onChange={search} />
      <SearchCheck
        type="checkbox"
        name="onlyInTags"
        id="onlyInTags"
        checked={onlyInTags}
        onChange={toggleOnlyInTags}
      />
      <label htmlFor="onlyInTags">search in tags only</label>
    </Container>
  );
}

export default SearchBar;
