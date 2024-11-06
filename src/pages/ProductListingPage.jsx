
import ProductFilter from "../Components/FilterGroup";
import ProductListing from "../Components/ProductListing";
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




];






const ProductListingPage = () => {
  return (
    <Layout>
      <main>

        <h5>Resultado para "Tênis" - 389 produtos</h5>

        <div className="selecao">
          <select name="opition" id="option">
            <option value="relevantes" selected>Ordenar por: mais relevantes</option>
            <option value="menor">Menor preço</option>
          </select>

        </div>

        <div style={{ display: 'flex', padding: '20px' }}>

          <div style={{ width: '250px', marginRight: '20px' }}>
            <ProductFilter />
          </div>

          <ProductListing products={products} />

        </div>
      </main>








    </Layout>

  );
}

export default ProductListingPage;