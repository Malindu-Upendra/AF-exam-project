import React, {Component} from "react";
import {Button, Form, Modal, Table} from "react-bootstrap";
import axios from "axios";

export class ViewCategoryItems extends Component{

    state ={
        category:[],
        howMany:0,
        openModal:false,
        temp:''
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`https://backendofdinermore.herokuapp.com/category/getCategory/${id}`).then(res => {
            if(res.data.success){
                const category = res.data.data;
                this.setState({category:category})
            }
        })
    }

    handleChange = (event) => {
        const {name , value} = event.target;
        this.setState({[name]:value});
    }

    ModalOn = (food) => {
        console.log(food)
        this.setState({temp:food});
        this.setState({openModal:true})
    }

    ModalOff = (e) => {
        e.preventDefault();

        const details = {
            itemName:this.state.temp.name,
            size:this.state.howMany,
            amount: this.state.temp.amount
        }

        console.log(details);

        axios.post('https://backendofdinermore.herokuapp.com/cart/insertToCart',details).then(res => {
            if(res.data.success){
                alert("Successfully Added !");
                this.setState({openModal:false});
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.category.map(item => (
                    <div style={{paddingTop:'60px'}} className="container">
                        <h2>Category Type : {item.name}</h2>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Code</th>
                                <th>name</th>
                                <th>size</th>
                                <th>amount</th>
                                <th>action</th>
                            </tr>
                            </thead>
                            {item.foods.map(food => (
                                <tbody>
                                <tr>
                                    <td>{food.code}</td>
                                    <td>{food.name}</td>
                                    <td>{food.size}</td>
                                    <td>{food.amount}</td>
                                    <td><Button variant="success" onClick={this.ModalOn.bind(this,food)}>add to cart</Button></td>
                                </tr>
                                </tbody>
                            ))}
                        </Table>
                    </div>
                ))}
                <div>
                    <Modal
                        show={this.state.openModal}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Body>
                            <h4>How Many</h4>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="number" name="howMany" value={this.state.howMany} onChange={this.handleChange}/>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-success" type="submit" onClick={this.ModalOff}>add</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>

        );
    }

}

export default ViewCategoryItems;