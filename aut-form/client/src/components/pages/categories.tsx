import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';

import { IGlobalAppState } from '../../store/reducer';
import { ICategotyItem } from '../../service/categories-service';

import * as actions from '../../store/consts';
import { ServiceContext } from '../../context';
import ItemsList from '../items-list/items-list';
import CategoryItem from '../category-item/category-item';
import TopBar from '../top-bar/top-bar';
import Button from '../button/button';

import './categories.scss';

const Categories = (props: any) => {  
  const categoriesService = useContext(ServiceContext);
  const toAddCategory = () => {
    props.history.push("/categories/add")
  }

  useEffect(() => {
    categoriesService.getCategories()
      .then((categories) => props.updateCategories(categories))
      .catch(() => props.categoriesLoadError())
  })

  const addButton = <Button 
    onClick={() => toAddCategory()} 
    color="#1890ff"
    iconType="plus" 
    likeIcon={true} />;
    
  return (
    <div className="categories">
      <TopBar title="категории" funcComponent={() => addButton}/>
      <div className="categories-content">
        <ItemsList>
          {
            props.categories.map((category: ICategotyItem) => <CategoryItem key={category.id} item={category}/>)
          }
        </ItemsList>
      </div>
    </div>
  )
}


const mapStateToProps = (state: IGlobalAppState) => {
  return {
    authenticated: state.authenticated,
    categories: state.categories,
    categoriesLoaded: state.categoriesLoaded,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateCategories: (categories: ICategotyItem[]) => dispatch({ type: actions.CATEGORIES_LOADED, payload: categories }),
    categoriesLoadError: () => dispatch({ type: actions.CATEGORIES_LOADED_ERROR })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
