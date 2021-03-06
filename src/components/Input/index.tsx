import React, { useRef, useEffect } from 'react';
import { IoMdStar } from 'react-icons/io';
import { useField } from '@unform/core';

import { Container } from './styles';

type NativeProps = React.InputHTMLAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLTextAreaElement>;

interface Props extends NativeProps {
  name: string;
  label: string;
  multiline?: boolean
  required?: boolean
}

const Input: React.FC<Props> = ({ name, label, multiline=false, required=false, ...rest }) => {
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const ref = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container error={error}>
      <label htmlFor={name}>
        {label}
        { required && <IoMdStar size={10} />}
      </label>
      {
        multiline ? (
          <textarea
            ref={ref}
            id={name}
            name={name}
            defaultValue={defaultValue}
            rows={4}
            {...rest}
          />
        ) : (
          <input
            ref={ref}
            id={name}
            name={name}
            defaultValue={defaultValue}
            required={required}
            {...rest}
          />
        )
      }
      {
        error ? <span>{error}</span> : null
      }
    </Container>
  );
}

export default Input;
