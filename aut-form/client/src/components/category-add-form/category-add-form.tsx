import React, { useState, useEffect } from 'react';

import Form from '../form/form';
import InputGroup from '../input-group/input-group';
import Input from '../input/input';

import { ICategotyItem } from '../../service/categories-service';

import './category-add-form.scss';

export interface ICategoryAddFormProps {
  id: number,
  onChange: (id: number, data: ICategotyItem) => void;
}

const CategoryAddForm = (props: ICategoryAddFormProps) => {
  const [categoryName, setCategoryName] = useState("");
  const [rubs, setRubs] = useState("");

  useEffect(() => {
    props.onChange(props.id, {
      id: props.id,
      title: categoryName,
      limit: Number(rubs)
    })
  })

  return (
    <Form handleSubmit={() => {}}>
      <InputGroup direction="column">
        <Input 
          label="категория" 
          name="category-title"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <InputGroup groupTitle="Лимит по категории">
          <Input 
            label="руб"
            name="rubs"
            value={rubs}
            onChange={(e) => setRubs(e.target.value)}
          />
        </InputGroup>
      </InputGroup>
    </Form>
  )
}

export default CategoryAddForm;
