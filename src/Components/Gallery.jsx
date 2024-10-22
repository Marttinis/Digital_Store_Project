import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px', backgroundColor: "light-gray-3" }}>
                <div style={{ width: '100%' }}>
                    <Carousel controls={false}>
                        <Carousel.Item>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {/* Coluna do Texto */}
                                <div style={{ flex: '1', textAlign: 'left' }}>
                                    <p style={{ color: "orange", fontWeight: 'bold' }}>Melhores ofertas personalizadas</p>
                                    <h1 style={{ color: "black", fontSize: '40px', fontWeight: 'bold' }}>Queima de estoque Nike 🔥</h1>
                                    <p style={{ color: "gray", fontSize: '16px' }}>Consequat culpa exercitation mollit nisi exceptur do do tempor laboris eiusmod irure consectetur.</p>
                                    <button
                                        className="btn"
                                        style={{
                                            backgroundColor: '#C92071',
                                            color: 'white',
                                            borderColor: '#C92071',
                                            width: '130px',
                                            height: '45px',
                                            fontWeight: 'bold',
                                            fontSize: '16px'
                                        }}
                                        aria-label="Ver Ofertas"
                                    >
                                        Ver Ofertas
                                    </button>
                                </div>
                                {/* Coluna da Imagem */}
                                
                                <div style={{ flex: '1', textAlign: 'right', margin:"0", padding:"0" }}>
                                    <img
                                        src="src\images\White-Sneakers-PNG-Clipart 1.png"
                                        alt="Tênis Nike"
                                        style={{ width: '700px' }}
                                    />
                                </div>

                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        </>
    );
}

export default Gallery;
