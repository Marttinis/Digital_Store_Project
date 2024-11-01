import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';




// Definindo o componente de layout
const Layout = ({ children }) => {
  return (
    <div>
      {/* Componente do cabeçalho */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}
      {children}
      

      {/* Componente do rodapé */}
      <Footer />
    </div>
  );
};
//teste para o Permission denied

export default Layout;