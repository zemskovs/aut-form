import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Form from '../form/form';
import InputGroup from '../input-group/input-group';
import Input from '../input/input';

import './category-add-form.scss';

const CategoryAddForm = (props: any) => {
  const [categoryName, setCategoryName] = useState("");
  const [rubs, setRubs] = useState("");
  const [pennies, setPennies] = useState("");

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
          <Input 
            label="коп"
            name="pennies"
            value={pennies}
            onChange={(e) => setPennies(e.target.value)}
          />
        </InputGroup>
      </InputGroup>
    </Form>
  )
}

export default CategoryAddForm;
