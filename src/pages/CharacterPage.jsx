import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import Layout from "../layouts/Layout";
import { BeatLoader } from "react-spinners";

// const allCharacters = [
//   {
//     id: 1,
//     name: "Charmander",
//     type: "Fire",
//     img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
//   },
//   {
//     id: 2,
//     name: "Pikachu",
//     type: "Electric",
//     img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
//   },
//   {
//     id: 3,
//     name: "Poliwag",
//     type: "Water",
//     img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
//   },
//   {
//     id: 4,
//     name: "Onix",
//     type: "Rock",
//     img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",
//   },
// ];

function CharacterPage() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  const onClickCard = (id, name) => {
    navigate(`/characters/${id}`);
    // navigate({
    //   pathname: `/characters/${id}`,
    //   search: createSearchParams({
    //     name: name,
    //   }).toString(),
    // });

    // navigate(`/characters/${id}`, {
    //   state: {
    //     name: name,
    //   },
    // });
  };

  const onClickGetData = () => {
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.log(error));
  };

  const onClickPostData = () => {
    const payload = {
      name: "Hypno",
      type: "Psychic",
      description:
        "When it locks eyes with an enemy, it will use a mix of psi moves, such as Hypnosis and Confusion.",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png",
    };

    // fetch("http://localhost:3000/characters", {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(() => console.log("New pokemon added!"));

    axios
      .post("http://localhost:3000/characters", payload)
      .then(() => {
        console.log("New pokemen added!");
        setRefresh(!refresh);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get("http://localhost:3000/characters");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [refresh]);
  console.log(loading);
  return (
    <Layout>
      <section>
        <div className="flex justify-center gap-4">
          <button
            className="rounded-lg bg-sky-400 p-2 text-white mt-2 self-center"
            onClick={onClickGetData}
          >
            Get Data
          </button>

          <button
            className="rounded-lg bg-sky-400 p-2 text-white mt-2 self-center"
            onClick={onClickPostData}
          >
            Post Data
          </button>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {loading ? (
            <BeatLoader color="#38BDF8" />
          ) : (
            data?.map(({ id, name, img }) => (
              <Card
                title={name}
                image={img}
                key={id}
                onClick={() => onClickCard(id, name)}
              />
            ))
          )}
        </div>
      </section>
    </Layout>
  );
}

export default CharacterPage;
