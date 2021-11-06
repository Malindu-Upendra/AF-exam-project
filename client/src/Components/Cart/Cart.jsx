import {Component} from "react";
import {Table , Button} from "react-bootstrap";
import axios from "axios";

export class Cart extends Component{

    state = {
        cartItems:[],
        message:'',
        total:0
    }

    componentDidMount() {

        axios.get('https://backendofdinermore.herokuapp.com/cart/getAllItems').then(res => {
                if (res.data.success){
                    const cartItems = res.data.data;
                    this.setState({cartItems:cartItems})
                    this.state.cartItems.forEach(item => {
                        this.setState({total:this.state.total + item.amount})
                    })
                }else{
                    this.setState({message:"No Items In The Cart"})
                }
        })
    }

    handleOrder = () => {

        axios.delete('https://backendofdinermore.herokuapp.com/cart/deleteCart').then(res => {
            if(res.data.success){
                alert(res.data.message);
                window.location = '/';
            }
        })
    }

    render() {
        return(
            <>
                {!this.state.cartItems.length ? <h2 style={{paddingTop:'70px'}}> No Items In the Cart </h2>:
            <div style={{paddingTop:'70px'}}>
            <Table striped bordered hover className="container" >
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item Name</th>
                    <th>Size</th>
                    <th>Amount</th>
                </tr>
                </thead>
                {this.state.cartItems.map((item,index) => (
                <tbody>
                <tr>
                    <td>{index + 1}</td>
                    <td>{item.itemName}</td>
                    <td>{item.size}</td>
                    <td>{item.amount}</td>
                </tr>
                </tbody>
                ))}
            </Table>
                <h2 style={{paddingLeft:'50%'}}>Total = {this.state.total}</h2>
                <div style={{paddingLeft:'50%'}}>
                <Button variant="success" onClick={this.handleOrder}>Order</Button>
                </div>
            </div>
            }
            </>
        )
    }

}

export default Cart;