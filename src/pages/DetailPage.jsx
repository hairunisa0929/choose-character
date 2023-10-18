import { useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
import useSWR from "swr";
import Button from "../components/Button";
import useRegularHooks from "../hooks/useRegularHooks";
import { CheckoutContext } from "../context/CheckoutContext";
import { checkoutBooking } from "../store/actions/checkoutAction";

const fetcher = (url) => axios.get(url).then((response) => response.data);

function DetailPage() {
  const { id } = useParams();
  const { navigate } = useRegularHooks();
  const { setDataCheckout } = useContext(CheckoutContext);
  const dispatch = useDispatch();

  const { data, isLoading } = useSWR(
    `http://localhost:3000/characters/${id}`,
    fetcher
  );

  if (isLoading) return <BeatLoader color="#38BDF8" />;

  const onClickBuyNow = () => {
    // setDataCheckout(data);
    dispatch(checkoutBooking(data));
    navigate("/checkout");
  };

  return (
    <section>
      <div className="flex">
        <img src={data.img} alt={data.name} className="w-1/2" />

        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">{data.name}</h1>
          <div>
            <span>Type</span>
            <span className="bg-sky-400 text-white py-[5px] px-[8px] ml-2 rounded-lg">
              {data.type}
            </span>
          </div>
          <p>{data.description}</p>
          <span>Quantity</span>
          <div className="flex flex-row h-10 rounded-lg bg-transparent mt-1">
            <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none text-2xl font-thin">
              −
            </button>
            <input
              type="number"
              className="outline-none focus:outline-none text-center bg-gray-300 w-20 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value="0"
              disabled
            />
            <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer text-2xl font-thin">
              +
            </button>
          </div>
          <Button isPrimary onClick={onClickBuyNow} className="w-fit">
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
