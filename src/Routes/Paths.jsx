import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import NotFound from "../pages/NotFound";

const Paths = () => {
    return (
        <>
          <BrowserRouter>
             <Routes>
                 <Route path="/" element={<HomePage />} />
                 <Route path="/listaProdutos" element = {<ProductListingPage />} />
                 <Route path="/verProduto" element = {<ProductViewPage />} />
                 <Route path="*" element = {<NotFound />}  />
             </Routes>
          </BrowserRouter>
        </>
    );
}
 
export default Paths;