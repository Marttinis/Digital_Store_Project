import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
    
    return (
        <div 
            className="d-flex justify-content-center align-items-center" 
            style={{ height: "100%", width: "100%" }}
        >
            <Carousel controls={false}  style={{ width: "1200px" }}>
                <Carousel.Item interval={1000}>
                    <img
                        src="src\images\Rectangle 7.svg"
                        alt="First slide"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button>bota</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        src="https://via.placeholder.com/800x400?text=Second+Slide"
                        alt="Second slide"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="https://via.placeholder.com/800x400?text=Third+Slide"
                        alt="Third slide"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Gallery;
