import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ProductContextProvider from "./Context/ProductContextProvider";
import MainRoutes from "./MainRoutes";
const App = () => {
  return (
    <>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
        <Footer />
      </ProductContextProvider>
    </>
  );
};

export default App;
