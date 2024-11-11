// src/components/ProductOptions.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/ProductOptions.css';

const ProductOptions = ({ title, options, radius, shape, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <main>
      <h6 id='titulo' style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: '700', lineHeight: '22px', color: '#8F8F8F', marginTop: '30px' }}>{title}</h6>
      <div className="product-options">
        
        {options.map((option, index) => (
          <div

            key={index}
            className={`option ${shape} ${type} ${selectedOption === option ? 'selected' : ''}`}
            style={{
              borderRadius: shape === 'square' ? radius : '50%',
              width: shape === 'square' ? 'auto' : '31px',
              height: shape === 'square' ? '46px' : '31px',
              border: selectedOption === option ? '4px solid #C92071' : '3px solid  #CCCCCC',
              backgroundColor: type === 'color' ? option : 'white',
              color: type === 'text' ? ' #474747' : 'transparent',
              fontSize: type === 'text' ? '24px' : 'initial',
            }}
            onClick={() => handleClick(option)}
          >

            {type === 'text' && option}
          </div>
        ))}
      </div>
    </main>
  );
};

ProductOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  radius: PropTypes.string,
  shape: PropTypes.oneOf(['square', 'circle']).isRequired,
  type: PropTypes.oneOf(['text', 'color']).isRequired,
};

ProductOptions.defaultProps = {
  radius: '0px',
};

export default ProductOptions;
