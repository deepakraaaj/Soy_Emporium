import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import products from '../products';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';


const ProductScreen = () => {
  const { id: productId } = useParams();


  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      
        <>
          <Row>
            <Col md={6}>
              <Image src={products.image} alt={products.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{products.name}</h3>
                </ListGroup.Item>
               
                <ListGroup.Item>Price: ${products.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {products.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${products.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {products.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>


          
              
          </Row>
        </>
    </>
  );
};

export default ProductScreen;