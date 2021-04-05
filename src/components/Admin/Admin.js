import './Admin.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import ProductManager from "../ProductManager/ProductManager";

const Admin = () => {
    return (
        <Router>
            <div className="d-flex">
                <div className="side-menu">
                    <Link className="nav-link "to="/addProduct"><i className="fas fa-plus"></i> Add Product</Link>
                    <Link className="nav-link" to="/productManager"><i className="fas fa-tasks"></i> Product Manager</Link>
                </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <div className="right-side">
                    <Switch>
                    <Route path="/addProduct">
                        <AddProduct />
                    </Route>
                    <Route path="/productManager">
                        <ProductManager />
                    </Route>
                    </Switch>
                </div>
            </div>
    </Router>
    );
};

export default Admin;