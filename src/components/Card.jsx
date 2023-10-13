function Card({ title, image, onClick }) {
  return (
    <div
      className="flex flex-col justify-center items-center max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <img className="w-60" src={image} alt={title} />

      <div className="font-bold text-xl py-4">{title}</div>
    </div>
  );
}

export default Card;
