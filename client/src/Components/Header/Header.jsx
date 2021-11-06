import {Component} from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import axios from "axios";

export class Header extends Component{

    state = {
        categories: []
    }

    componentDidMount() {

        axios.get('https://backendofdinermore.herokuapp.com/category/onlyCategories').then(res => {
            const categories = res.data.data;
            this.setState({categories:categories});
        })

    }

    render() {
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Dinermore</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/addCategory">Add Category</Nav.Link>
                        <Nav.Link href="/addFood">Add Food</Nav.Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            {this.state.categories.map(item => (
                                <>
                            <NavDropdown.Item href={`/viewCategoryItems/${item._id}`}>{item.name}</NavDropdown.Item>
                            <NavDropdown.Divider />
                                </>))}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/viewCart">Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}

export default Header;