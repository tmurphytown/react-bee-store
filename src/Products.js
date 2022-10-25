import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Spinner } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import { useContext, useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router-dom';

function Product() {

    let params = useParams()
    let navigate = useNavigate()

    let { getProduct, deleteProduct } = useContext(ProductContext)
    let [product, setProduct] = useState()

    useEffect(() => {
        async function fetch() {
            await getProduct(params.productId)
                .then((product) => setProduct(product))
        }
        fetch()
    }, [params.productId]);

    let [ error, setError ] = useState()

useEffect(() => {
  setError(null)
  async function fetch() {
    await getProduct(params.productId)
      .then((product) => setProduct(product))
      .catch((message) => setError(message))
  }
  fetch()
}, [params.productId, getProduct])

function errorMessage() {
    return <Alert variant="danger">There was an error attempting to load this product: {error}</Alert>
  }

  if (error) return errorMessage()
if (product === undefined) return loading()
return product.id !== parseInt(params.productId) ?  loading() : productCard()

    function handleDeleteProduct(id) {
        deleteProduct(id)
        navigate('/Products')
    }

    function loading() {
        return <div className="w-25 text-center"><Spinner animation="border" /></div>
    }





    function productCard() {
        let { id, image, productName, description, price, stock } = product

        console.log(image);
        return (
            <Card style={{margin:10}} className="align-self-start w-25 shadow p-3 mb-5 bg-white rounded">
                <Card.Body>
                <Card.Img variant="top" src={image} />
                    <Card.Title>{productName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
                    <Card.Text>
                        <strong>Price: $</strong> <span>{price}</span><br/>
                        <strong>{stock ? "In Stock" : "Out of Stock"}</strong>
                    </Card.Text>
                    <Link to={`/Store/${id}/edit`} className="btn btn-primary" style={{marginRight: "1rem", backgroundColor: "#EBB907", border:"#EBB907", color:"white"}}>Edit</Link>
                    <Button style={{backgroundColor: "#EBB907", border:"#EBB907", color:"white" }} variant="danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
                </Card.Body>
            </Card>
        )
    }
  }

    export default Product
