import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";
import CharacterPage from "./pages/CharacterPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage />,
//   },
//   {
//     path: "/characters",
//     element: <CharacterPage />,
//   },
// ]);

function App() {
  return (
    <>
      {/* config route dengan JSX */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/characters/:id" element={<DetailPage />} />
      </Routes>

      {/* config route dengan menggunakan object */}
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
