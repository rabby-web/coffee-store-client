import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deleteCount > 0) {
          console.log("delete success");
          //   remove
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center border bg-slate-100">
        Users: {loadedUsers.length}
      </h2>
      <div>
        <div className="overflow-x-auto border">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-lg font-medium text-slate-900"></th>
                <th className="text-lg font-medium text-slate-900">Email</th>
                <th className="text-lg font-medium text-slate-900">Time</th>
                <th className="text-lg font-medium text-slate-900">Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {loadedUsers.map((user) => (
                <tr key={user._id}>
                  <th>1</th>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn text-white  bg-slate-900"
                    >
                      {"    "}X{"    "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
