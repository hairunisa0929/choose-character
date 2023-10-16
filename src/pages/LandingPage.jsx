import Hero from "../assets/hero.png";
import Button from "../components/Button";
import useRegularHooks from "../hooks/useRegularHooks";

function LandingPage() {
  const {navigate} = useRegularHooks();

  const onClickBrowse = () => {
    navigate("/characters");
  };

  return (
    <section className="flex flex-col items-center">
      <img src={Hero} alt="hero image" />
      <h1 className="text-xl font-bold capitalize">
        Find your favorite pokemon
      </h1>
      <Button isPrimary onClick={onClickBrowse} className="w-fit">
        Browse Now
      </Button>
    </section>
  );
}

export default LandingPage;
