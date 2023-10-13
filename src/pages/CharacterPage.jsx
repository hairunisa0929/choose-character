import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import useSWR from "swr";
import Card from "../components/Card";

// function CharacterPage() {
//   const navigate = useNavigate();
//   const [data, setData] = useState();
//   const [loading, setLoading] = useState(false);

//   const onClickCard = (id) => {
//     navigate(`/characters/${id}`);
//   };

//   const onClickGetData = () => {
//     fetch("http://localhost:3000/characters")
//       .then((res) => res.json())
//       .then((json) => {
//         setData(json);
//       })
//       .catch((error) => console.log(error));
//   };

//   const onClickPostData = () => {
//     const payload = {
//       name: "Meowth",
//       type: "Psychic",
//       description:
//         "When it locks eyes with an enemy, it will use a mix of psi moves, such as Hypnosis and Confusion.",
//       img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png",
//     };

//     // fetch("http://localhost:3000/characters", {
//     //   method: "POST",
//     //   body: JSON.stringify(payload),
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     // }).then(() => console.log("New pokemon added!"));

//     axios
//       .post("http://localhost:3000/characters", payload)
//       .then(() => {
//         console.log("New pokemon added!");
//         fetchData();
//       })
//       .catch((error) => console.log(error));
//   };

//   const fetchData = async () => {
//     setLoading(true);

//     try {
//       const response = await axios.get("http://localhost:3000/characters");
//       setData(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <section>
//       <div className="flex justify-center gap-4">
//         <button
//           className="rounded-lg bg-sky-400 p-2 text-white mt-2 self-center"
//           onClick={onClickGetData}
//         >
//           Get Data
//         </button>

//         <button
//           className="rounded-lg bg-sky-400 p-2 text-white mt-2 self-center"
//           onClick={onClickPostData}
//         >
//           Post Data
//         </button>
//       </div>

//       <div className="flex justify-center gap-4 mt-8">
//         {loading ? (
//           <BeatLoader color="#38BDF8" />
//         ) : (
//           data?.map(({ id, name, img }) => (
//             <Card
//               title={name}
//               image={img}
//               key={id}
//               onClick={() => onClickCard(id)}
//             />
//           ))
//         )}
//       </div>
//     </section>
//   );
// }

function CharacterPage() {
  const navigate = useNavigate();

  const getCharacters = (url) =>
    axios.get(url).then((response) => response.data);

  const { data, isLoading, error, mutate } = useSWR(
    "http://localhost:3000/characters",
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
        <button
          className="rounded-lg bg-sky-400 p-2 text-white mt-2 self-center"
          onClick={onClickPostData}
        >
          Post Data
        </button>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        {isLoading ? (
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
  );
}

export default CharacterPage;
