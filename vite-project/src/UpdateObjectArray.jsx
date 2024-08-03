import { useState } from "react";

function UpdateObjectArray() {
  const [cars, setCar] = useState([]);

  function handleAddCar() {
    const year = document.getElementById("year").value;
    const maker = document.getElementById("maker").value;
    const modal = document.getElementById("modal").value;
    setCar(cars=>[...cars, { dd:year, maker, modal }]);
    setCar([...cars, { dd:year, maker, modal }]);

    //reset
    document.getElementById("year").value = "";
    document.getElementById("maker").value = "";
    document.getElementById("modal").value = "";

    console.log(cars);
  }

  function handleRmoveObeject(car) {
    setCar(cars.filter((item) => item !== car));
  }

  return (
    <div>
      <h1>List of Car Objects</h1>

      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRmoveObeject(car)}>
            {car.year} {car.maker} {car.modal}
          </li>
        ))}
      </ul>

      <input type="text" id="year" placeholder="enter car year" />
      <br />
      <input type="text" id="maker" placeholder="enter car maker" />
      <br />
      <input type="text" id="modal" placeholder="enter car model" />
      <br />

      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default UpdateObjectArray;
