import CircleOption from "../Components/CircleOpition";
import Gallery from "../Components/Gallery";
import OfertaEspecial from "../Components/OfertaEspecial";
import ProductCard from "../Components/ProductCard";
import ProductListing from "../Components/ProductListing";

import Section from "../Components/Section";
import Layout from "../PageLayout/Layout";



const products = [
  {
    id: "1",
    image: "src/images/Layer 1aa 2.svg",
    name: "K-Swiss V8 - Masculino",
    type: "tênis",
    price: 200,
    priceDiscount: 100
  },
  {
    id: "1",
    image: "src/images/Layer 1aa 2.svg",
    name: "K-Swiss V8 - Masculino",
    type: "tênis",
    price: 200,
    priceDiscount: 100
  },
  {
    id: "1",
    image: "src/images/Layer 1aa 2.svg",
    name: "K-Swiss V8 - Masculino",
    type: "tênis",
    price: 200,
    priceDiscount: 100
  },
  {
    id: "1",
    image: "src/images/Layer 1aa 2.svg",
    name: "K-Swiss V8 - Masculino",
    type: "tênis",
    price: 200,
    priceDiscount: 100
  },
  {
    id: "1",
    image: "src/images/Layer 1aa 2.svg",
    name: "K-Swiss V8 - Masculino",
    type: "tênis",
    price: 200,
    priceDiscount: 100
  },
  {
    image: "src/images/Layer 1aa 2.svg",
    name: "K-Swiss V8 - Masculino",
    type: "tênis",
    price: 200,
    priceDiscount: 100
  },
  {
    id: "1",
    image: "src/images/Layer 1aa 2.svg",
    name: "K-Swiss V8 - Masculino",
    type: "tênis",
    price: 200,
    priceDiscount: 100
  },
  {
    id: "1",
    image: "src/images/Layer 1aa 2.svg",
    name: "K-Swiss V8 - Masculino",
    type: "tênis",
    price: 200,
    priceDiscount: 100
  }

];







const HomePage = () => {
  return (

    <Layout>

      <main style={{ backgroundColor: '#F5F5F5' }}>
        <Gallery
          className="custom-gallery"
          width="1440px"
          height="681px"
          radius="4px"
          showOverlay
          // showThumbs
          showGuide
          images={[
            { src: 'src/images/Home.png' },
            { src: 'src/images/home-slide-2.jpeg' },
            { src: 'src/images/home-slide-3.jpeg' },
            { src: 'src/images/home-slide-4.jpeg' },
            { src: 'src/images/home-slide-5.jpeg' },
            { src: 'src/images/home-slide-6.jpeg' },
            { src: 'src/images/home-slide-7.jpeg' },
            { src: 'src/images/home-slide-8.jpeg' },


          ]}
        />


        <main style={{ backgroundColor: '#E5E5E5' }}>
          <div>
            <Section
              title="Coleções em destaque"
              titleAlign="left"
            // link={{ text: 'Show More', href: 'https://redirect.link' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>

                <img style={{ borderRadius: '4px' }} src="public\collection-1.png" alt="collection1" />
                <img style={{ borderRadius: '4px' }} src="public\collection-2.png" alt="collection2" />
                <img style={{ borderRadius: '4px' }} src="public\collection-3.png" alt="collection3" />
              </div>
            </Section>
          </div>

          <div style={{ paddingTop: '100px' }}>
            <div style={{ padding: '100px' }}>
              <Section
                title="Coleções em destaque"
                titleAlign="center">

                <CircleOption />
              </Section>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-betweens', width: '100%' }}>
              <Section
                title="Produtos em alta"
                titleAlign="left"
                link={{ text: 'Ver todos', href: 'https://redirect.link' }}>

              </Section>
            </div>
            <OfertaEspecial />
            link={{ text: 'Ver todos', href: '/produtos' }}

          </div>
          <ProductListing products={products} />
        </main>
      </main>

    </Layout>


  );
}

export default HomePage;