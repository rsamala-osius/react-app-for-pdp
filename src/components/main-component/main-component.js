import React from 'react';
import {Router, BrowserRouter, Route } from 'react-router-dom';
import styles from './main-component.css'

import SearchFormComponent from '../search-list/search-list-component';
import ProductDescription from '../product-display-component/product-display-component';
import HeaderComponent from '../header/header-component';


class MainComponent extends React.Component{
    render(){
        return (
            <div className={styles.mainContainer}>
                <HeaderComponent />
                <Route path="/page/product-list" exact component={ SearchFormComponent } />
                <Route path="/page/product-description" component={ ProductDescription } />
            </div>
        );
    }
}

export default MainComponent;