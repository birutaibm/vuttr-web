import React, { useCallback, useRef, useState, useEffect } from 'react';
import { GrSecure } from 'react-icons/gr';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useModal } from '../../hooks/modal';
import { useSession } from '../../hooks/session';
import Input from '../Input';

import Modal from '.';
import { TitleBar, Title, ActionsBar, Button } from './styles';

interface Credential {
  email: string;
  password: string;
}

interface Props {
  onSuccess: () => void;
}

const Login: React.FC<Props> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { signIn, isSignedIn } = useSession();
  const { closeModal } = useModal();

  useEffect(() => {
    if (isSignedIn) {
      setLoading(false);
      onSuccess();
    }
  }, [isSignedIn, onSuccess]);

  const handleAdd = useCallback(async (formData: Credential) => {
    setLoading(true);
    formRef.current?.setErrors({});
    const schema = Yup.object().shape({
      email: Yup.string().required().email(),
      password: Yup.string().required(),
    });
    try {
      await schema.validate(formData, {
        abortEarly: false,
      });
      const { email, password } = formData;
      signIn(email, password);
      formRef.current?.reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        formRef.current?.setErrors(
          err.inner
            .map(error => ({ [error.path]: error.message }))
            .reduce(Object.assign)
        );
      } else {
        formRef.current?.setErrors({
          email: 'invalid email and/or password',
          password: 'invalid email and/or password',
        })
      }
      setLoading(false);
    }
  }, [signIn]);

  return (
    <Modal>
      <TitleBar>
        <GrSecure size={26} color={'#170c3a'} />
        <Title>Login required</Title>
      </TitleBar>
      <Form onSubmit={handleAdd} ref={formRef}>
        <Input name='email' label='E-Mail' required/>
        <Input name='password' label='Password' type="password" required/>
        <ActionsBar>
          <Button onClick={closeModal}>Cancel</Button>
          <Button className="primary" type="submit">
            {loading ? <div id="spinner" /> : 'Log In'}
          </Button>
        </ActionsBar>
      </Form>
    </Modal>
  );
}

export default Login;
