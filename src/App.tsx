import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./screens/SharedLayout";
import AboutUs from "./screens/aboutUs/AboutUs";
import Contact from "./screens/contact/Contact";
import Home from "./screens/home/Home";
import MobileApp from "./screens/mobileApp/MobileApp";
import News from "./screens/news/News";
import PrivacyPolicy from "./screens/privacyPolicy/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="mobileapp" element={<MobileApp />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
