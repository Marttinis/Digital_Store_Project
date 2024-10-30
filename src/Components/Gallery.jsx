import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/Gallery.css';
import ArrowRight from '../images/arrow-right.svg';
import ArrowLeft from '../images/arrow-left.svg';

const Gallery = ({ className, width, height, radius, showOverlay, showThumbs, showGuide, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lida com mudança de imagem ao clicar nas setas
  const goToNextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPreviousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Lida com seleção de miniaturas
  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`gallery ${className}`} style={{ width }}>
      <div className="gallery__slider" style={{ height }}>
        <img
          src={images[currentIndex].src}
          alt={`Imagem ${currentIndex + 1}`}
          className="gallery__image"
          style={{ borderRadius: radius }}
        />

        {showOverlay &&(
        <div className="gallery__overlay">
          <h6 id="gallery_legend" >Melhores ofertas personalizadas</h6>
          <h2 className="gallery__title">Queima de <br /> estoque Nike 🔥</h2>
          <p className="gallery__description">
            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
          </p>
          <button className="gallery__button">Ver Ofertas</button>
          
        </div>
        )}


        <button
          className="gallery__arrow gallery__arrow--left"
          onClick={goToPreviousImage}
          disabled={currentIndex === 0}
        >
          <img src={ArrowLeft} alt="Seta para a esquerda" />
        </button>
        <button
          className="gallery__arrow gallery__arrow--right"
          onClick={goToNextImage}
          disabled={currentIndex === images.length - 1}
        >
          <img src={ArrowRight} alt="Seta para a direita" />
        </button>

      </div>
      {showThumbs && (
        <div className="gallery__thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Miniatura ${index + 1}`}
              onClick={() => selectImage(index)}
              className={`gallery__thumbnail ${index === currentIndex ? 'gallery__thumbnail--selected' : ''}`}
              style={{ borderRadius: radius }}
            />
          ))}
        </div>
      )}
      {showGuide && (
        <div className="gallery__circles">
          {images.map((_, index) => (
            <span
              key={index}
              className={`gallery__circle ${index === currentIndex ? 'gallery__circle--active' : ''}`}
              onClick={() => selectImage(index)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

// Tipagem para garantir que as propriedades recebam o valor correto
Gallery.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  showThumbs: PropTypes.bool,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;
