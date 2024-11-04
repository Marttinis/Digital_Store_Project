import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const styles = {
    price: {
        fontSize: '24px',
        color: '#1F1F1F',

    },
    priceDiscounted: {
        color: '#8F8F8F',
        textDecoration: 'line-through',

    },
    price_Discount: {
        fontSize: '24px',
        color: '#1F1F1F',
        marginTop: '5px',
    },

};



const ProductCard = ({ id, image, type, name, price, priceDiscount }) => {
    return (
        <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} alt={name} />
                <Card.Body style={{ backgroundColor: '#E5E5E5' }}>

                    <div>
                        <h6>{type}</h6>

                    </div>
                    <Card.Title>{name}</Card.Title>
                    <span
                        style={{ ...styles.price, ...(priceDiscount ? styles.priceDiscounted : {}) }}
                    >
                        R${price}
                    </span>
                    {priceDiscount && (
                        <span style={styles.price_Discount}>
                            R${priceDiscount}
                        </span>
                    )}
                </Card.Body>
            </Card>
        </Link>
    );
}


export default ProductCard;