import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const styles = {
    price: {
        fontSize: '24px',
        color:'#1F1F1F',

    },
    priceDiscounted:{
        color: '#8F8F8F',
        textDecoration: 'line-through',

    },
    price_Discount:{
        fontSize: '24px',
        color: '#1F1F1F',
        marginTop: '5px',
    },
    
};
   


const ProductCard = ({ image, type,  name, price, priceDiscount }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body style={{backgroundColor:'#E5E5E5'}}>
                
                <Card.Text>
                <h6>{type}</h6>

                </Card.Text>
                <Card.Title>{name}</Card.Title>
                <span
                    style={{ ...styles.price, ...(priceDiscount ? styles.priceDiscounted : {}) }}
                >
                    ${price} 
                </span>
                {priceDiscount && (
                    <span style={styles.price_Discount}>
                        ${priceDiscount}
                    </span>
                )}
            </Card.Body>
        </Card>
    );
}


export default ProductCard;