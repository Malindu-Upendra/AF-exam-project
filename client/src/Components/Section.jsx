import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from "./LandingPage/LandingPage.jsx";
import AddFood from "./AddFood/AddFood.jsx";
import AddCategory from "./AddCategory/AddCategory.jsx";
import ViewCategoryItems from "./ViewCategoryItems/ViewCategoryItems.jsx";
import Cart from "./Cart/Cart.jsx";

export class Section extends Component{

    render() {
        return(
                <Router>
                    <Switch>
                    <Route path="/" component={LandingPage} exact />
                    <Route path="/addFood" component={AddFood} exact />
                    <Route path="/addCategory" component={AddCategory} exact />
                    <Route path="/viewCategoryItems/:id" component={ViewCategoryItems} exact />
                    <Route path="/viewCart" component={Cart} exact />
                    </Switch>
                </Router>
        )
    }
}

export default Section;