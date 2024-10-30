import ProductCard from "./ProductCard";
import PropTypes from 'prop-types';
import '../css/ProductListing.css';

const ProductListing = ({ products }) => {
    return (
        <div className="product-listing" >
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    name={product.name}
                    type={product.type}
                    image={product.image}
                    price={product.price}
                    priceDiscount={product.priceDiscount}
                />

            ))}

        </div>

    );
}

ProductListing.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            priceDiscount: PropTypes.number,
        })
    ).isRequired,
};


export default ProductListing;