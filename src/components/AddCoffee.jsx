import swal from "sweetalert";

const AddCoffee = () => {
  const handleCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      details,
      category,
      photo,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal({
            title: "Successfully Added Coffee!",
            text: "Successfully Added Coffee to MongoDB!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] rounded-md p-20">
      <h2 className="text-3xl font-extrabold text-center ">Add Coffee</h2>
      <p className="text-base mb-3 text-slate-500">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleCoffee}>
        <div className="md:flex">
          <div className="form-control md:w-1/2 mx-2">
            <label className="label">
              <span className="label-text text-lg text-black">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
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

export default AddCoffee;
