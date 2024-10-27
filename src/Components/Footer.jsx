
import { Logo2 } from "./Logo";


const Footer = () => {
    return (
        <>


            <footer style={{ backgroundColor: '#1f1f1f', height: '540px' }}>
                <div style={{ display: 'flex' }}>
                    <div className="descricao-footer" style={{ marginLeft: '104px' }}>
                        <div className="logo-footer" style={{ width: 'auto', paddingTop: '72px' }}>
                            <Logo2 />

                        </div>
                        <p className="descricao-paragrafo" style={{ fontFamily: 'Inter', color: 'white', width: '307px', height: '78px', fontSize: '16px', textAlign: 'left', paddingTop: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat modi vitae possimus, consequuntur inventore alias fuga ab aperiam deserunt veniam, magni quaerat eos voluptates assumenda laboriosam facilis at cum neque.</p>

                        <div className="redes-sociais" style={{ display: 'flex', marginTop: '150px', paddingLeft: '20px', gap: '36px' }}>
                            <img src="src\images\facebook.png" alt="Ícone do Facebook" />
                            <img src="src\images\instagram.png" alt="Ícone do Instagram" />
                            <img src="src\images\twitter.png" alt="Ícone do Twitter" />
                        </div>
                    </div>

                    <div className="informacao" style={{ marginLeft: '120px', padding: '10px', textAlign: 'left' }}>
                        <h3 style={{ fontFamily: 'Inter', fontSize: '18px', color: 'white', marginTop: '72px' }}>Informação</h3>
                        <ul style={{ fontFamily: 'Inter', marginTop: '28px', color: "white", listStyle: 'none', padding: '0px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li>Sobre Drip Store</li>
                            <li>Segurança</li>
                            <li>Wishlist</li>
                            <li>Blog</li>
                            <li>Trabalhe Conosco</li>
                            <li>Meus Pedidos</li>
                        </ul>
                    </div>

                    <div className="categoria" style={{ marginLeft: '120px', padding: '10px', textAlign: 'left' }}>
                        <h3 style={{ fontFamily: 'Inter', fontSize: '18px', color: 'white', marginTop: '72px' }}>Categorias</h3>
                        <ul style={{ marginTop: '28px', fontFamily: 'Inter', color: "white", listStyle: 'none', padding: '0px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li>Camisetas</li>
                            <li>Calças</li>
                            <li>Bonés</li>
                            <li>Headphones</li>
                            <li>Tênis</li>
                        </ul>
                    </div>

                    <div className="contato" style={{ marginLeft: '120px', padding: '10px', textAlign: 'left' }}>
                        <h3 style={{ fontFamily: 'Inter', fontSize: '18px', color: 'white', marginTop: '72px' }}>Contatos</h3>
                        <ul style={{ fontFamily: 'Inter', marginTop: '28px', color: "white", listStyle: 'none', padding: '0px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li>Av. Santos Dumont, 1510-1 andar- Aldeota, Fortaleza- CE, 60150-161</li>
                            <li>(85) 30513411</li>
                        </ul>
                    </div>
                </div>
                <hr style={{ width: '1200px', height: '1px', color: '#FFFFFF', opacity: '30%', marginLeft: '80px' }} />
                <p style={{ fontFamily: 'Inter', color: 'white', marginLeft: '600px' }}> &#169; 2024 Digital College</p>

            </footer>



        </>
    );
}

export default Footer;