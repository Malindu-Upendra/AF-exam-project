import {Button, Card} from "react-bootstrap";
const {Component} = require("react");

class Template extends Component{

    render() {
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title><a href="/files/Draft submission.docx" target="_blank">IEEE Format</a></Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )

    }

}

export default Template

