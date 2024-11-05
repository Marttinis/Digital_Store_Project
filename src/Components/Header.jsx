import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Logo from "./Logo";
import { Link } from 'react-router-dom';


import { Logo1 } from "./Logo";
//aqui alterei a logo, apesar de ter deixado a mesma imagem que já estava anteriormente


const Header = () => {
    return (

        <>
            <div style={{ marginLeft: '100px', display: 'flex', flexDirection: 'column', gap: '48px' }}>

                <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-between', paddingTop: '25px', alignItems: 'center', marginRight: '60px', marginBottom: '29px' }} >




                <Link to={'/'}> <Logo1 /> </Link> 



                    <div className="d-flex mb-3" style={{ width: '559px', height: '60', display: 'flex', alignItems: 'center' }}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Pesquisar produto..."
                            aria-label="Pesquisar"
                            aria-describedby="button-addon2"
                            style={{ position: 'relative' }}
                        />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" style={{ position: 'absolute', right: '378px' }}>
                            <i className="bi bi-search"></i> {/* Ícone de lupa */}
                        </button>
                    </div>

                    <a href="" style={{ listStyle: 'none', color: 'black', fontSize: '16px', width: '102', height: '28' }} >Cadastre-se</a>




                    <button className="btn" style={{ backgroundColor: '#C92071', color: 'white', borderColor: '#C92071', width: '114px', height: '40px', fontWeight: 'bold', fontSize: '14px' }}>Entrar</button>



                    <img src="src\images\mini-cart.svg" alt="mini-cart" />


                </div>
                <ul style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', listStyle: 'none', left: '0px' }} >
                    <li><Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
                    <li><Link to={"/produtos"} style={{ textDecoration: 'none', color: 'inherit' }}>Produtos</Link></li>

                    <li>Categoria</li>
                    <li>Meus Pedidos</li>
                </ul>
            </div>
        </>
    );
}

export default Header;