import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from "./Logo";
import { Link } from 'react-router-dom';


const Header = () => {
    return (

        <>

            <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-around', padding: '25px' }} >


                <Logo />

                <div className="d-flex mb-3" style={{ width: '559px', height: '60' }}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Pesquisar produto..."
                        aria-label="Pesquisar"
                        aria-describedby="button-addon2"
                    />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                        <i className="bi bi-search"></i> {/* Ícone de lupa */}
                    </button>
                </div>

                <a href="" style={{ listStyle: 'none', color: 'black', fontSize: '16px', width: '102', height: '28' }} >Cadastre-se</a>



                <button className="btn" style={{ backgroundColor: '#C92071', color: 'white', borderColor: '#C92071', width: '114px', height: '40px', fontWeight: 'bold', fontSize:'14px' }}>Entrar</button>


                <img src="src\images\mini-cart.svg" alt="mini-cart" />
            </div>
            <ul style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', listStyle: 'none' }} >
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/produtos"}>Produtos</Link></li>
                <li>Categoria</li>
                <li>Meus pedidos</li>
            </ul>
        </>
    );
}

export default Header;