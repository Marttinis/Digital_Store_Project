import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProdutoDetalhado from '../Components/ProductDetails.jsx';


// Definindo o componente de layout
const Layout = ({ children }) => {
  return (
    <div>
      {/* Componente do cabeçalho */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}
      {children}
      <ProdutoDetalhado />

      {/* Componente do rodapé */}
      <Footer />
    </div>
  );
};

export default Layout;