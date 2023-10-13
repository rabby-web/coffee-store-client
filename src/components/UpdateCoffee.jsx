import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, details, category, photo } =
    coffee;
  const updateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const updateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      details,
      category,
      photo,
    };
    console.log(updateCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal({
            title: "Coffee Updated!",
            text: "Successfully Update Coffee!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] rounded-md p-20">
      <h2 className="text-3xl font-extrabold text-center ">
        Update Coffee: {name}
      </h2>
      <form onSubmit={updateCoffee}>
        <div className="md:flex">
          <div className="form-control md:w-1/2 mx-2">
            <label className="label">
              <span className="label-text text-lg text-black">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mx-2">
            <label className="label ">
              <span className="label-text text-lg text-black">
                Available Quantity
              </span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* ---- */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 mx-2">
            <label className="label">
              <span className="label-text text-lg text-black">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mx-2">
            <label className="label ">
              <span className="label-text text-lg text-black">Taste</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* ---- */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 mx-2">
            <label className="label">
              <span className="label-text text-lg text-black">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mx-2">
            <label className="label ">
              <span className="label-text text-lg text-black">Details</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* ---- */}
        <div className="md:flex">
          <div className="form-control w-full mx-2">
            <label className="label">
              <span className="label-text text-lg text-black">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="bg-[#D2B48C] w-full m-2 rounded-lg py-3 px-4 my-5 text-lg font-semibold"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
