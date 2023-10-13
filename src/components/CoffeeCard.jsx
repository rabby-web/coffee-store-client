const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, details, category, photo } =
    coffee || {};
  return (
    <div>
      <div className="card card-side justify-center items-center shadow-xl m-4 gap-5 bg-[#ECEAE3]">
        <div>
          <figure>
            <img src={photo} alt="Movie" />
          </figure>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-left">
            <h2 className="">Name: {name}</h2>
            <p className="text-lg font-semibold text-black">
              Details: {details}
            </p>
            <p className="text-lg font-semibold text-black">
              Quantity: {quantity}
            </p>
            <p className="text-lg font-semibold text-black">
              Supplier: {supplier}
            </p>
            <p className="text-lg font-semibold text-black">Taste: {taste}</p>
            <p className="text-lg font-semibold text-black">
              Category: {category}
            </p>
          </div>
          <div className="card-actions justify-end">
            <div className=" flex flex-col gap-3">
              <button className="btn btn-outline">View</button>
              <button className="btn btn-outline">Update</button>
              <button className="btn btn-error btn-outline">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
