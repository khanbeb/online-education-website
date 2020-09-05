import React from 'react';
import './Product.css'
import {Card, Button} from "react-bootstrap";

const Product = (props) => {
    const {img, description, title, price} = props.product
    return (

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                <p>{description}</p>
                 <p className="price">${price}</p>
                </Card.Text>
                <Button variant="primary"
                onClick = {() => props.handleAddProduct(props.product)}
                >Enroll Here</Button>
            </Card.Body>
        </Card>
    );
};

export default Product;