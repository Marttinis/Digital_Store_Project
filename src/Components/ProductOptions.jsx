import React, { useState } from 'react';
import '../css/ProductOptions.css';

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="product-options">
      {options.map((option, index) => (
        <div
          key={index}
          className={`option ${shape} ${selectedOption === option ? 'selected' : ''}`}
          onClick={() => handleOptionClick(option)}
          style={{
            // Estilos para o formato "square"
            width: shape === 'square' ? '46px' : '31px',
            height: shape === 'square' ? '46px' : '31px',
            borderRadius: shape === 'square' ? radius : '50%',
            border: selectedOption === option 
              ? '2px solid var(--primary)' 
              : '1px solid var(--light-gray-2)',
            // Estilos de cor para "color" no formato "circle"
            backgroundColor: type === 'color' && shape === 'circle' ? option : 'transparent',
            // Estilos de texto para "text"
            color: type === 'text' ? 'var(--dark-gray-2)' : 'transparent',
            fontSize: type === 'text' ? '24px' : 'inherit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          {/* Exibe o texto apenas se o tipo for "text" */}
          {type === 'text' ? option : null}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;
