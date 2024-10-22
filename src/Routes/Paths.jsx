import { BrowserRouter, Route, Router } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";

const Paths = () => {
    return (
        <>
          <BrowserRouter>
             <Router>
                 <Route path="/" element={<HomePage />} />
                 <Route path="/listaProdutos" element = {<ProductListingPage />} />
             </Router>
          </BrowserRouter>
        </>
    );
}
 
export default Paths;