import axios from "axios";
import { BeatLoader } from "react-spinners";
import useSWR from "swr";
import Card from "../components/Card";
import Button from "../components/Button";
import useRegularHooks from "../hooks/useRegularHooks";
import { useSelector } from "react-redux";

function CharacterPage() {
  const { navigate } = useRegularHooks();
  const token = useSelector((state) => state.auth.token);

  const getCharacters = (url) =>
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + token, //set token di header satu per satu
        },
      })
      .then((response) => response.data);

  // axios.get(url).then((response) => response.data);

  const { data, isLoading, error, mutate } = useSWR(
    "http://localhost:3000/660/characters",
    getCharacters,
    {
      onSuccess: (data) => data.sort((a, b) => a.name.localeCompare(b.name)),
    }
  );

  if (error) return alert(JSON.stringify(error));

  const onClickPostData = () => {
    const payload = {
      name: "Hypno",
      type: "Psychic",
      description:
        "When it locks eyes with an enemy, it will use a mix of psi moves, such as Hypnosis and Confusion.",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png",
    };

    axios
      .post("http://localhost:3000/characters", payload)
      .then(() => {
        console.log("New pokemon added!");
        mutate();
      })
      .catch((error) => console.log(error));
  };

  const onClickCard = (id) => {
    navigate(`/characters/${id}`);
  };

  return (
    <section>
      <div className="flex justify-center gap-4">
        <Button
          isPrimary
          className="self-center w-fit"
          onClick={onClickPostData}
        >
          Post Data
        </Button>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        {isLoading ? (
          <BeatLoader color="#38BDF8" />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data?.map(({ id, name, img }) => (
              <Card
                title={name}
                image={img}
                key={id}
                onClick={() => onClickCard(id, name)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CharacterPage;
