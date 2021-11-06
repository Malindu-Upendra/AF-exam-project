import {Component} from "react";
import axios from "axios";
import {Form , Button} from "react-bootstrap";
import Select from "react-select";

export class AddCategory extends Component{

    state = {
        name:"",
        description:"",
        foods:[],
        options:[]

    }

    componentDidMount = () => {

        axios.get('https://backendofdinermore.herokuapp.com/food/getFoodItems').then(res => {
            const foods = res.data.data;
            this.setState({foods:foods})

            let data = [];
            this.state.foods.map((item) => {
                let category = {
                    value: item._id,
                    label: item.name
                }
                data.push(category);

            });
            this.setState({ foods: data });
            console.log(this.state.foods);
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

        const category = {
            name:this.state.name,
            description:this.state.description,
            foods:this.state.options
        }

        console.log(category)

        axios.post('https://backendofdinermore.herokuapp.com/category/insertCategory',category).then(response => {
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
                <h2>Insert Category</h2>
                <Form style={{borderWidth:'5px' , border:'black'}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Code</Form.Label>
                        <Form.Control type="text" name="name" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" name="description" rows={3} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Select
                            options={this.state.foods}
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

export default AddCategory;