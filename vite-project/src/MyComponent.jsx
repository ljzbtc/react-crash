import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("liu");
  const [age, setAge] = useState(25);
  const [isStudent, setIsStudent] = useState(true);

  const updateName = () => {
    setName("John Doe");
  };
  const updateAge = () => {
    setAge(age + 1);
  };
  const updateIsStudent = () => {
    setIsStudent(!isStudent);
  }

  return (
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age:{age}</p>
      <button onClick={updateAge}>Set Age</button>
        <p>Is Student:{isStudent ? "Yes" : "No"}</p>
        <button onClick={updateIsStudent}>Set Status</button>
    </div>
  );
}

export default MyComponent;
