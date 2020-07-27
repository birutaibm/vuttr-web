import React, { useState, useCallback, ChangeEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

import { InputContainer } from './styles';

interface Props {
  onChange: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({ onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  }, [onChange]);

  return (
    <InputContainer>
      <FiSearch color="#b1adb9" />
      <input type="text" onChange={handleChange} value={value} />
    </InputContainer>
  );
}

export default SearchInput;
