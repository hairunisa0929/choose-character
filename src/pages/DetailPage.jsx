import axios from "axios";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((response) => response.data);

function DetailPage() {
  const { id } = useParams();

  const { data, isLoading } = useSWR(`http://localhost:3000/characters/${id}`, fetcher);

  if (isLoading) return <BeatLoader color="#38BDF8" />;

  return (
    <section>
      <div className="flex">
        <img src={data.img} alt={data.name} />

        <div className="flex flex-col gap-4 max-w-[430px]">
          <h1 className="font-bold text-2xl">{data.name}</h1>
          <div>
            <span>Type</span>
            <span className="bg-sky-400 text-white py-[5px] px-[8px] ml-2 rounded-lg">
              {data.type}
            </span>
          </div>
          <p>{data.description}</p>
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
