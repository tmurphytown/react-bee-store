import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation} from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { ProductContext } from "./ProductContext";

export default function Search() {
    const query = useQuery().get("query");
    const [results, setResults] = useState([]);
    let { deleteProduct } = useContext(ProductContext);
    function handleDeleteProduct(id) {
        deleteProduct(id);
    }

    useEffect(() => {
        axios.get("http://localhost:3001/products?q=" + encodeURI(query)).then(result => {
            setResults(result.data);
        })
    }, [query])

    if (query.length === 0) {
        return "No products found."
    }
    return <Row xs={1} md={4} className="g-4">
        {results.map(({ productName, id, image, description, price }) => <Col>
            <Card className="align-self-start">
                <Card.Body>
                    <Card.Img variant="top" src={image} />
                    <Card.Title>{productName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
                    <Card.Text>
                        <strong>$</strong> <span>{price}</span>
                    </Card.Text>
                    <Link to={`/Store/${id}/edit`} className="btn btn-primary" style={{ marginRight: "1rem" }}>Edit</Link>
                    <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
                </Card.Body>
            </Card>
        </Col>)}
    </Row>
}

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }


