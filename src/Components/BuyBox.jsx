
const styles = {
    price: {
        fontSize: '32px',
        color: '#1F1F1F',

    },
    priceDiscounted: {
        fontSize: '16px',
        color: '#8F8F8F',
        textDecoration: 'line-through',


    },
    price_Discount: {
        fontSize: '32px',
        color: '#1F1F1F',
        marginTop: '5px',
    },

};


const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, descripiton, children }) => {
    return (
        <div className="informacoes-tenis" style={{ marginLeft: '40px' }} >
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '32px', width: '440px', color: '#1F1F1F', textDecoration: 'none' }}>{name}</h3>
            <span style={{ fontSize: '12px', fontFamily: 'Inter, sans-serif', fontWeight: '500', color: '#666666', marginTop: '10px' }}>{reference}</span>

            <div className="classificacao" style={{ marginTop: '10px' }}>
                <img src="src\images\Stars.png" alt="Estrelas recebidas pelo produto" />
                <img src="src\images\Group 1103.png" alt="Classificaçao do produto" />
            </div>
            <div>
                <span
                    style={{ ...styles.price, ...(priceDiscount ? styles.priceDiscounted : {}) }}
                >
                    <span style={{ fontSize: '16px', color: '#1F1F1F' }}>R$</span>{price}<span style={{ fontSize: '16px', fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>,00</span>
                </span>
                {priceDiscount && (
                    <span style={styles.price_Discount}>
                        <span style={{ fontSize: '16px', color: '#1F1F1F' }}>R$</span>{priceDiscount} <span style={{ fontSize: '16px', fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>,00</span>
                    </span>
                )}
            </div>
            <h6 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '700', color: '#8F8F8F', marginTop: '20px' }}>Descrição do produto</h6>
            <p style={{ width: '440px', fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: '500', color: '#474747' }}> {descripiton} </p>


            <div>
               {children}
            </div>

            <button style={{ width: '220px', height: '48px', textTransform: 'uppercase', backgroundColor: '#FFB31F', border: 'none', borderRadius: '11%', color: '#F5F5F5', fontSize: '16px' }}>Comprar</button>


        </div>
    );
}

export default BuyBox;