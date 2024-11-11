const AirJordan = () => {
    return (
        <>
            <section>
                <div style={{ display: 'flex', gap: '68px', alignItems: 'center', paddingTop: '87px', backgroundColor: '#F5F5F5;' }}>
                    <div className="produto">
                        <img src="\src\images\Ellipse 11.png" alt="Ellipse por trás da imagem" style={{ position: 'relative', left: '129px' }} />
                        <div className="imagem-principal">
                            <img src="\src\images\Laye 1.png" alt="Foto do Air Jordan" style={{ position: 'absolute', top: '2700px', left: '52px' }} />
                        </div>
                    </div>
                    <div className="informacoes-produto" style={{ marginLeft: '150px', width: '589px' }}>
                        <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '14px', color: 'rgba(201, 32,113,1', marginBottom: '17px' }}>Oferta especial</h3>
                        <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '48px', color: ' rgba(71, 71, 71, 1)', marginBottom: '20px' }}>Air Jordan edição de colecionador</h2>
                        <p style={{ marginBottom: '30px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis sunt hic consequatur magni fugit delectus sed amet saepe sit blanditiis accusantium molestiae beatae ratione, vitae quos iste nemo? Impedit!</p>
                        <button style={{ backgroundColor: ' rgba(201, 32, 113, 1)', border: 'none', borderRadius: '8px', color: 'rgba(245, 245, 245, 1)', fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '14px', paddingTop: '10px', paddingBottom: '10px', paddingRight: '60px', paddingLeft: '60px' }}>Ver oferta</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AirJordan;