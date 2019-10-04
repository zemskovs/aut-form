import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/consts';
import { ServiceContext } from '../../context';
import ItemsList from '../items-list/items-list';
import CategoryItem from '../category-item/category-item';
import TopBar from '../top-bar/top-bar';
import Button from '../button/button';

import './categories.scss';

class Categories extends React.Component {  
  constructor(props) {
    super(props);
    this.toAddCategory = this.toAddCategory.bind(this);
  }

  componentDidMount() {
    this.context.getCategories()
      .then(categories => this.props.updateCategories(categories))
      .catch(() => this.props.categoriesLoadError())
  }

  toAddCategory() {
    this.props.history.push("/categories/add")
  }

  render() {
    const addButton = <Button 
      onAction={() => this.toAddCategory()} 
      color="#1890ff"
      iconType="plus" 
      likeIcon={true} />;
    
    return (
      <div className="categories">
        <TopBar title="категории" funcComponent={() => addButton}/>
        <div className="categories-content">
          <ItemsList>
            {
              this.props.categories.map(category => <CategoryItem key={category.id} item={category}/>)
            }
          </ItemsList>
        </div>
      </div>
    )
  }
}

Categories.contextType = ServiceContext;

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
    categories: state.categories,
    categoriesLoaded: state.categoriesLoaded,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCategories: (categories) => dispatch({ type: actions.CATEGORIES_LOADED, payload: categories }),
    categoriesLoadError: () => dispatch({ type: actions.CATEGORIES_LOADED_ERROR })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
