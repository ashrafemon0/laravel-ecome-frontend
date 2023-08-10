import React from 'react'
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import UserLoginPage from "./pages/UserLoginPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PurchesPage from "./pages/PurchesPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import RefundPage from "./pages/RefundPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import NotificationPage from "./pages/NotificationPage.jsx";
import FavoritePage from "./component/home/FavoritePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import ProductCategoriesPage from "./pages/ProductCategoriesPage.jsx";
import ProductSubCategory from "./pages/ProductSubCategory.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import ForgetPasswordPage from "./pages/ForgetPasswordPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage key={Date.now()} />} />
            <Route path="/login" element={<UserLoginPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/purchases" element={<PurchesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/productdetails/:code" element={<ProductDetailsPage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/productcategory/:category"  element={<ProductCategoriesPage />} />
          <Route path="/productcategory/:category/:subcategory"  element={<ProductSubCategory />} />
          <Route path="/productbysearch/:SearchData"  element={<SearchPage />} />
          <Route path="/registration"  element={<RegistrationPage />} />
          <Route path="/forget"  element={<ForgetPasswordPage />} />
          <Route path="/reset/:id"  element={<ResetPasswordPage />} />
          <Route path="/profile"  element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
