import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ProductContext } from './ProductContext'
import './global.css'
import './Create'

function StoreItems() {
    const [sort, setSort] = useState(false);

    return (
        <ProductContext.Consumer>
            {({ products }) => {
                let sortedProducts = [...products].sort((a, b) => {
                    if (a.stock) {
                        return -1
                    }
                    return 1
                })
                if (products.length > 0) {
                    return <>
                        <Button style={{margin:10, backgroundColor: "#EBB907", border:"#EBB907", color:"white" }} className="btn1" onClick={() => setSort(!sort)}>Sort in Stock Items</Button>
                            <a href="/Create">
                                <Button style={{margin:10, backgroundColor: "#EBB907", border:"#EBB907", color:"white" }}>Create New Product</Button>
                          </a>
                                <Row xs={1} md={4} className="g-4">
                                    {(sort ? sortedProducts : products).map(({ image, productName, id, stock }) => {
                                        console.log(image);
                                        return <Col>
                                            <Card className="shadow p-3 mb-5 bg-white rounded">
                                                <Link to={`/Store/${id}`}>
                                                    <Card.Img variant="top" src={image} />
                                                    <Card.Title style={{ fontSize: "18px", textAlign: "center" }} ><strong>{productName}</strong></Card.Title>
                                                    <Card.Text style={{margin:10}}>
                                                        <strong>{stock ? "In Stock" : "Out of Stock"}</strong>
                                                    </Card.Text>
                                                </Link>
                                            </Card>

                                        </Col>
                                    })
                                    }
                                </Row >
                            </>
                }
                            return "No products found."
            }
            }
                        </ProductContext.Consumer>
                        );
}


                        export default StoreItems