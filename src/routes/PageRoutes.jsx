import { Route, Routes } from "react-router-dom";
import route from "./route.json";
import Home from "../pages/Home";
import MensClothing from "../pages/MensClothingPage";
import WomensClothing from "../pages/WomensClothingPage";
import Electronics from "../pages/ElectronicsPage";
import Jwellery from "../pages/JewelleryPage";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AddressPage from "../pages/AddressPage";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={route.HOME} element={<Home />} />
      <Route path={route.PRODUCTS}>
        <Route index element={<ProductsPage />} />
        <Route path=":pid" element={<ProductsPage />} />
      </Route>
      <Route path={route["MENS'S_CLOTHING"]} element={<MensClothing />} />
      <Route path={route["WOME'S_CLOTHING"]} element={<WomensClothing />} />
      <Route path={route.ELECTRONICS} element={<Electronics />} />
      <Route path={route.JWELLERY} element={<Jwellery />} />
      <Route path={route.CART} element={<CartPage />} />
      <Route path={route.ABOUT} element={<About />} />
      <Route path={route.CONTACT_US} element={<ContactUs />} />
      <Route path={route.LOGIN} element={<LoginPage />} />
      <Route path={route.SIGNUP} element={<SignupPage />} />
      <Route path={route.ADDRESS} element={<AddressPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default PageRoutes;
