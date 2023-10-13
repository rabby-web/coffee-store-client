import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  return (
    <>
      <div className="bg-[#F5F4F1] rounded p-4">
        <h1 className="text-4xl font-semibold text-purple-700">
          Hot Cold Coffee: {coffees.length}
          <div className="m-4 p-2 gap-5">
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
            ))}
          </div>
        </h1>
      </div>
    </>
  );
}

export default App;
