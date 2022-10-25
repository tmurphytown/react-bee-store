import { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import { Card } from 'react-bootstrap';



function CreateProduct() {
    let params = useParams()
  let [ product, setProduct ] = useState({
    id: params.productId,
    image:"",
    productName: "",
    description: "",
    price: "",
    stock: ""
  })
  console.log(params.productId, "test")

  let { getProduct, addProduct, updateProduct } = useContext(ProductContext)
  let navigate = useNavigate()
  let { id, image, productName, description, price, stock } = product

  useEffect(() => {
    if (id === undefined) return
    async function fetch() {
      await getProduct(id)
        .then((product) => setProduct(product))
    }
    fetch()
  }, [id])

  function handleChange(event) {
    setProduct((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }})
  }

  function addOrUpdate() {
    if (id === undefined) {
      return addProduct(product)
    } else {
      return updateProduct(product)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
     addOrUpdate().then((product) =>
        navigate(`/products/${product.id}`)
      )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Image:</Form.Label>
        <Form.Control type="text" name="image" value={image} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Product:</Form.Label>
        <Form.Control type="text" name="productName" value={productName} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description:</Form.Label>
        <Form.Control type="text" name="description" value={description} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Price:</Form.Label>
        <Form.Control type="text" name="price" value={price} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Stock:</Form.Label>
        <Form.Control type="boolean" name="stock" value={stock} onChange={handleChange} />
      </Form.Group>
      <Button style={{backgroundColor: "#EBB907", border:"#EBB907", color:"white" }} type="submit">Save</Button>
    </Form>
  )
}

export default CreateProduct



