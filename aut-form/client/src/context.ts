import React from 'react';
import CategoriesService from './service/categories-service';

const ServiceContext = React.createContext(new CategoriesService());

export { ServiceContext }
