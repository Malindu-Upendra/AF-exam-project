import {Component} from "react";
import axios from "axios";
import {Form , Button} from "react-bootstrap";
import Select from "react-select";

export class AddFood extends Component{

    state = {
        code:"",
        name:"",
        amount:"",
        categories:[],
        options:[]

    }


    componentDidMount = () => {

        axios.get('https://backendofdinermore.herokuapp.com/category/onlyCategories').then(res => {
            const categories = res.data.data;
            this.setState({categories:categories})

            let data = [];
            this.state.categories.map((item) => {
                let category = {
                    value: item._id,
                    label: item.name
                }
                data.push(category);

            });
            this.setState({ categories: data });
            console.log(this.state.categories);
        }).catch(err => err.message)

    }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({[name]:value});
    }

    selectCategory = async (e) => {
        await this.setState({ options: e ? e.map(item => item.value) : [] });
        console.log(this.state.options);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const food = {
            code:this.state.code,
            name:this.state.name,
            amount:this.state.amount,
            categories:this.state.options
        }

        console.log(food)

        axios.post('https://backendofdinermore.herokuapp.com/food/insertFoodItem',food).then(response => {
            if (response.data.success) {
                alert(response.data.message)
                window.location = '/'
            } else {
                alert('Failed to insert')
            }
        }).catch(err => console.log(err));
    }

    render() {
        return(
            <div className='container' style={{paddingTop:'50px'}}>
                <h2>Insert Food Item</h2>
                <Form style={{borderWidth:'5px' , border:'black'}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Code</Form.Label>
                        <Form.Control type="text" name="code" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>name</Form.Label>
                        <Form.Control type="text" name="name" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>amount</Form.Label>
                        <Form.Control type="number" name="amount" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Select
                            options={this.state.categories}
                            onChange={this.selectCategory}
                            className="basic-multi-select"
                            isMulti/>
                    </Form.Group>
                    <Button variant="outline-success" type="submit" onClick={this.handleSubmit}>
                        Add
                    </Button>
                </Form>
            </div>
        )
    }

}

export default AddFood;