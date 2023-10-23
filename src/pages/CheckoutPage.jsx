import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../components/Button";
import { toRupiah } from "../utils/formatter";

function CheckoutPage() {
  const { dataCheckout } = useSelector((state) => state.checkout);
  console.log(dataCheckout);

  const schema = yup.object().shape({
    name: yup.string("Field Name is required"),
    email: yup.string().email().required("Email is required"),
    // bookingdate: yup.date().required("date is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    console.log(data);

    const payload = {
      customerName: data.name,
      customerEmail: data.email,
      customerCity: data.city,
      delivery: data.delivery,
      wrap: data.wrap,
      pokemonName: dataCheckout.name,
      price: dataCheckout.price,
      qty: dataCheckout.qty,
    };

    axios
      .post("http://localhost:3000/bookings", payload)
      .then(() => {
        alert("Successfully made a new booking!");
        reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="px-20">
      <h1 className="text-3xl font-semibold">Checkout</h1>
      <div className="grid grid-cols-2 gap-20 mt-8">
        <div className="w-[500px]">
          <h2>Shipping Details</h2>
          <hr />
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                placeholder="Name"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                {...register("name")}
                id="name"
                // type="number"
              />
              <p className="error">{errors.name?.message}</p>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                {...register("email")}
                id="email"
              />
              <p className="error">{errors.email?.message}</p>
            </div>

            {/* <div className="flex flex-col">
              <label htmlFor="bookingdate">Booking Date</label>
              <input
                type="date"
                id="bookingdate"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                {...register("bookingdate")}
              />
              <DatePicker
                id="bookingdate"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                {...register("bookingdate")}
              />
              <p className="error">{errors.bookingdate?.message}</p>
            </div> */}

            <div>
              <label htmlFor="city">City</label>
              <select
                placeholder="City"
                className="p-4 pe-12 w-full rounded-lg border-[1px] border-gray-300 text-gray-700 sm:text-sm"
                {...register("city")}
                id="city"
              >
                <option value="">Please select</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bandung">Bandung</option>
              </select>
            </div>

            <div className="flex gap-8">
              <div className="flex gap-2">
                <input
                  type="radio"
                  id="sameday"
                  {...register("delivery")}
                  value="sameday"
                />
                <label htmlFor="sameday">Same Day</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="radio"
                  id="regular"
                  {...register("delivery")}
                  value="regular"
                />
                <label htmlFor="regular">Regular</label>
              </div>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" {...register("wrap")} id="wrap" />
              <label htmlFor="wrap">Extra Wrap</label>
            </div>

            <Button isPrimary type="submit">
              Purchase
            </Button>
          </form>
        </div>
        <div>
          <h2>Your Order</h2>
          <hr />
          <div className="flex flex-col">
            <div className="flex justify-between mt-4">
              <img src={dataCheckout.img} alt="foto" className="w-16" />

              <h3 className="font-bold">{dataCheckout.name}</h3>
              <span>{dataCheckout.qty}</span>
              <span>{toRupiah(dataCheckout.price)}</span>
            </div>
          </div>

          <hr />

          <div className="flex justify-between mt-4">
            <span className="font-bold">Total</span>
            <span className="font-bold">
              {toRupiah(dataCheckout.qty * dataCheckout.price)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;
