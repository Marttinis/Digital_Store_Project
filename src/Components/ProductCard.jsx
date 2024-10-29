import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const styles = {
    
}
   




const ProductCard = ({ image, name, price, priceDiscount }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>

                </Card.Text>
                <span
                    className={`product-card__price ${priceDiscount ? 'product-card__price--discounted' : ''}`}
                >
                    R$ {price}
                </span>
                {priceDiscount && (
                    <span className="product-card__price-discount">
                        R$ {priceDiscount}
                    </span>
                )}
            </Card.Body>
        </Card>
    );
}


export default ProductCard;