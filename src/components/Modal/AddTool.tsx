import React, { useCallback, useRef } from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useModal } from '../../hooks/modal';
import { useTools, ITool } from '../../hooks/tools';
import Input from '../Input';

import Modal from '.';
import { TitleBar, Title, ActionsBar, Button } from './styles';

interface ToolCreationData {
  title: string;
  link?: string;
  description: string;
  tags?: string;
}

const AddTool: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { closeModal } = useModal();
  const { addTool } = useTools();

  const handleAdd = useCallback(async (formData: ToolCreationData) => {
    formRef.current?.setErrors({});
    const schema = Yup.object().shape({
      title: Yup.string().required('Name is required'),
      description: Yup.string().required('Description is required'),
      link: Yup.string().optional().url('Invalid URL'),
    });
    try {
      await schema.validate(formData, {
        abortEarly: false,
      });
      const newTool: Omit<ITool, 'id'> = {
        title: formData.title,
        description: formData.description,
        tags: [],
      };
      if (formData.link?.length) {
        newTool.link = formData.link;
      }
      if (formData.tags?.length) {
        newTool.tags = formData.tags.split(' ');
      }
      addTool(newTool);
      formRef.current?.reset();
      closeModal();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        formRef.current?.setErrors(
          err.inner
            .map(error => ({ [error.path]: error.message }))
            .reduce(Object.assign)
        );
      }
    }
  }, [closeModal, addTool]);

  return (
    <Modal>
      <TitleBar>
        <FiPlusSquare size={26} color={'#170c3a'} />
        <Title>Add new tool</Title>
      </TitleBar>
      <Form onSubmit={handleAdd} ref={formRef}>
        <Input name='title' label='Tool Name' required/>
        <Input name='link' label='Tool Link'/>
        <Input name='description' label='Tool description' multiline required/>
        <Input name='tags' label='Tags'/>
        <ActionsBar>
          <Button className="primary" type="submit">Add tool</Button>
        </ActionsBar>
      </Form>
    </Modal>
  );
}

export default AddTool;
