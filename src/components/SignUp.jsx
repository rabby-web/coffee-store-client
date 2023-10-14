import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(password, email);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // new user has been create
        const createdAt = result?.user?.metadata?.creationTime;

        const user = { email, createdAt: createdAt };
        fetch(
          "https://coffee-store-server-69gxgpo3p-rabby-webs-projects.vercel.app/user",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              console.log("successfully create");
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
        <h2 className="text-center font-semibold text-2xl">Sign Up</h2>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
