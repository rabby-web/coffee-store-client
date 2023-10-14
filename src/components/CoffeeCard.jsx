import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, quantity, supplier, taste, details, category, photo } =
    coffee || {};

  const handelDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-69gxgpo3p-rabby-webs-projects.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
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
              <Link to={`/updateCoffee/${_id}`}>
                <button className="btn btn-outline">Update</button>
              </Link>
              <button
                onClick={() => handelDelete(_id)}
                className="btn btn-error btn-outline"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
