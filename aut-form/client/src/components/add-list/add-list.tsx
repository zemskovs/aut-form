import React  from 'react';

import Button from '../button/button';

import './add-list.scss';

export interface IAddListProps {
  title: string,
  handleAdd: () => void,
  handleSubmit: () => void,
  handleDelete: (id: number) => void,
  deleteBtnEnable?: boolean,
}

const AddList: React.FC<IAddListProps> = (props) => {
  return(
    <div className="add-list">
      <div className="add-list-title"><span>{props.title}</span></div>
      <div className="add-items">
        {
          React.Children.map(props.children, (child) => {
            return (
              <div className="add-item">
                {child}
                {
                  props.deleteBtnEnable 
                  ? (
                      <Button 
                        likeIcon={true}
                        iconType="close" 
                        onClick={() => props.handleDelete(child.props.id)}
                      />
                    )
                  : null
                }
              </div>
            )
          })
        }
      </div>
      <div className="button-group">
        <Button title="добавить ещё" withBorder={true} onClick={props.handleAdd} />
        <Button title="ок" withBorder={true} onClick={props.handleSubmit} />
      </div>
    </div>
  )
}

export default AddList;
