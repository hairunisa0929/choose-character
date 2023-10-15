import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";
import CharacterPage from "./pages/CharacterPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/characters/:id" element={<DetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
