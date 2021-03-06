import React, { useState } from "react";

import TopBar from '../top-bar/top-bar';
import AddList from '../add-list/add-list';
import { ICategotyItem } from "../../service/categories-service";
import CategoryAddForm from "../category-add-form/category-add-form";

import './category-add.scss';

export interface ICategoryData {
  dataCount: number,
  lastId: 0,
  dataItems: ICategotyItem[],
}

const CategoriesAddPage = (props: any) => {
  const [data, setData] = useState({
    dataCount: 1,
    lastId: 0,
    dataItems: [
      {
        id: 0,
        title: "",
        limit: 0,
      }
    ]
  });

  function handleDataChange(id: number, data: ICategotyItem) {
    
  }

  function handleAdd() {
    setData({
      dataCount: data.dataCount + 1,
      lastId: data.lastId + 1,
      dataItems: [
        ...data.dataItems,
        {
          id: data.lastId + 1,
          title: "",
          limit: 0
        }
      ]
    })
  }

  function handleDelete(id: number) {
    const dataItems = data.dataItems;
    const idx = dataItems.findIndex((item) => item.id === id);
    const newDataItems = [
      ...dataItems.slice(0, idx),
      ...dataItems.slice(idx + 1)
    ]
    setData({
      dataCount: data.dataCount - 1,
      lastId: data.lastId,
      dataItems: newDataItems
    })
  }

  function handleSubmit() {

  }

  return (
    <div className="categories-add">
      <TopBar title="добавить категории" backButton={true} />
      <div className="categories-add-content">
        <AddList 
          title="Добавить категории"
          handleAdd={() => handleAdd()}
          handleDelete={(id) => handleDelete(id)}
          handleSubmit={() => handleSubmit()}
          deleteBtnEnable={data.dataCount > 1}
        >
          {
            data.dataItems.map((item) => { 
              return (
                <CategoryAddForm 
                  key={item.id} 
                  id={item.id}
                  onChange={(id: number, data: ICategotyItem) => handleDataChange(id, data)}
                />
              )
            })
          }
        </AddList>
      </div>
    </div>
  )
}

export default CategoriesAddPage;