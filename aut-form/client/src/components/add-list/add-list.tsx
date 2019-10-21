import React  from 'react';

import Button from '../button/button';

import './add-list.scss';

export interface IAddListProps {
  title: string,
  handleAdd: () => void,
  handleSubmit: () => void,
}

const AddList: React.FC<IAddListProps> = (props) => {
  return(
    <div className="add-list">
      <div className="add-list-title"><span>{props.title}</span></div>
      <div className="forms">
        {props.children}
      </div>
      <div className="button-group">
        <Button title="добавить ещё" withBorder={true} onClick={props.handleAdd} />
        <Button title="ок" withBorder={true} onClick={props.handleSubmit} />
      </div>
    </div>
  )
}

export default AddList;
