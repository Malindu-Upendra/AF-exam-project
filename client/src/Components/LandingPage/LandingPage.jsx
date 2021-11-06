import React , {Component} from "react";
import {Table} from "react-bootstrap";
import axios from "axios";

export class LandingPage extends Component{

    state = {
        categories:[]
    }

    componentDidMount() {
        axios.get('https://backendofdinermore.herokuapp.com/category/getCat').then(res => {
                if(res.data.success){
                    const categories = res.data.data;
                    this.setState({categories:categories})
            }
        })
    }

    render() {
        return(
            <>
                {this.state.categories.map(item => (
                    <div style={{paddingTop:'60px'}} className="container">
                    <h2>Category Type : {item.name}</h2>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Code</th>
                            <th>name</th>
                            <th>size</th>
                            <th>amount</th>
                        </tr>
                        </thead>
                        {item.foods.map(food => (
                        <tbody>
                        <tr>
                            <td>{food.code}</td>
                            <td>{food.name}</td>
                            <td>{food.size}</td>
                            <td>{food.amount}</td>
                        </tr>
                        </tbody>
                        ))}
                    </Table>
                    </div>
                ))}
            </>
        )
    }

}

export default LandingPage;