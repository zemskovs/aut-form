import React  from 'react';

export interface IAddListProps {
  title: string,
  children: any,
}

const AddList = (props: IAddListProps) => {
  return(
    <div className="add-list">
      <div className="add-list-title"><span>{props.title}</span></div>
      {props.children}
    </div>
  )
}

export default AddList;
