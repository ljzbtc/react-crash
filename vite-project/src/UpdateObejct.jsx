import { useState } from "react";

function UpdateObject() {
  const [car, setCar] = useState({
    model: "Mustang",
    make: "red",
    year: 1964,
  });

  const handleYearChange = (e) => {
    setCar((c) => ({ ...c, year: e.target.value }));
  };
  const handleMakeChange = (e) => {
    setCar((c) => ({ ...c, make: e.target.value }));
  };
  const handleModelChange = (e) => {
    setCar((c) => ({ ...c, model: e.target.value }));
  };

  return (
    <div>
      <p>
        Your Favorite car is {car.year} {car.make} {car.model}
      </p>
      <input type="text" value={car.model} onChange={handleModelChange} />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="number" value={car.year} onChange={handleYearChange} />
    </div>
  );
}
export default UpdateObject;
