import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function BeeCarousel() {
  const captionStyle = {backgroundImage: "linear-gradient(0deg, rgba(2,0,36,0.453752448244923) 0%, rgba(0,0,0,0) 100%)", width: "100%", left: "0", bottom: "0", color: "white"};
  return (
    <Carousel className="w-50" style={{margin: "0 auto"}} variant="dark">
      <Carousel.Item>
        <Link to= "/Store" ><img
          className="d-block w-100"
          src="assets/BeeHoney.png"
          alt="First slide"
        /></Link>
        <Carousel.Caption style={captionStyle}>
          <h3>Kitchen</h3> 
          <p>Check out our Beeloved kitchen selection for the very best in unique or custom items.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to= "/Store" ><img
          className="d-block w-100"
          src="assets/BeePillows.png"
          alt="Second slide"
          alignItems = 'center'
        /></Link>

        <Carousel.Caption style={captionStyle}>
          <h3>Home Decor</h3>
          <p>Bring the outdoors in with the Farmhouse Beeloved Home Decor Collection.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to= "/Store" ><img
          className="d-block w-100"
          src="assets/BeeNecklace.png"
          alt="Third slide"
          alignItems = 'center'
        /></Link>

        <Carousel.Caption style={captionStyle}>
          <h3>Jewelry</h3>
          <p>
          With a nod to nature's hardest worker, our sweetest Beeloved jewelry collection is the perfect adornment.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BeeCarousel;