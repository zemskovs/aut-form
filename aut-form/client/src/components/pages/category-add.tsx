import React, { useState } from "react";

import TopBar from '../top-bar/top-bar';
import AddList from '../add-list/add-list';
import { ICategotyItem } from "../../service/categories-service";
import CategoryAddForm from "../category-add-form/category-add-form";

export interface ICategoryData {
  dataCount: number,
  dataItems: ICategotyItem[],
}

const CategoriesAddPage = (props: any) => {
  const [data, setData] = useState<ICategoryData>({
    dataCount: 1,
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

  return (
    <div className="categories-add">
      <TopBar title="добавить категории" backButton={true} />
      <div className="categories-add-content">
        <AddList title="Добавить категории">
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