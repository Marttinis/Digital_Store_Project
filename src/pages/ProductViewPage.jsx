
import BuyBox from "../Components/BuyBox";
import Gallery from "../Components/Gallery";
import ProductListing from "../Components/ProductListing";
import ProductOptions from "../Components/ProductOptions";
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
  }
]







const ProductViewPage = () => {
  const sizeOptions = ["39", "40", "41", "42", "43"];
  const colorOptions = ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"];


  return (
    <Layout>
      <main style={{marginLeft:'40px', marginRight:'40px', backgroundColor: '#F5F5F5'}}>
        <h6>Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</h6>
        <div style={{ display: 'flex', marginBottom: '100px' }}>
          <Gallery
            className="custom-gallery"
            width="700px"
            height="570px"
            radius="4px"
            showThumbs

            images={[
              { src: 'src/images/tenis1.svg' },
              { src: 'src/images/tenis2.png' },
              { src: 'src/images/tenis3.png' },
              { src: 'src/images/tenis4.png' },
              { src: 'src/images/tenis5.png' },



            ]}


          />
          <BuyBox
            name="Tênis Nike Revolution 6 Next Nature Masculino"
            reference="Casual | Nike | REF:38416711s"
            price="219"
            priceDiscount="100"
            descripiton="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum veritatis hic, rerum dolorem culpa voluptas. Aliquid quaerat perferendis eligendi ratione numquam possimus ab! Quod, perferendis dolores quas deleniti earum asperiores."
          >
            <ProductOptions
              title="Tamanho"
              options={sizeOptions}
              radius="5px"
              shape="square"
              type="text"
            />

            <ProductOptions
              title="Cor"
              options={colorOptions}
              shape="circle"
              type="color"
            />
          </BuyBox>
        </div>
        <Section
          title="Produtos Relacionados"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/produtos' }}>

          <ProductListing products={products} />
        </Section>


      </main>
    </Layout>

  );
}

export default ProductViewPage;