import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Hero from "../assets/hero.png";
import Layout from "../layouts/Layout";

function LandingPage() {
  const navigate = useNavigate();

  const onClickBrowse = () => {
    navigate("/characters");
  };

  return (
    <Layout>
      <section className="flex flex-col items-center">
        <img src={Hero} alt="hero image" />
        <h1 className="text-xl font-bold capitalize">
          Find your favorite pokemon
        </h1>
        <button
          className="rounded-lg bg-sky-400 p-2 text-white mt-2"
          onClick={onClickBrowse}
        >
          Browse Now
        </button>
        {/* <Outlet /> */}
      </section>
    </Layout>
  );
}

export default LandingPage;
