import { Route, Routes } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import Layout from "./layouts/Layout";
import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";
import CharacterPage from "./pages/CharacterPage";
import CheckoutPage from "./pages/CheckoutPage";
import { CheckoutProvider } from "./context/CheckoutContext";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <CheckoutProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/characters" element={<CharacterPage />} />
          <Route path="/characters/:id" element={<DetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </CheckoutProvider>
  );
}

export default App;
