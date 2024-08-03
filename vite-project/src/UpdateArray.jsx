import { useState, useRef } from "react";

function UpdateArray() {
  const [Items, setItems] = useState(["item1", "item2", "item3"]);

  const inputFoodRef = useRef(null);

  function handleAddItem() {
    const input = inputFoodRef.current.value;
    setItems([...Items, input]);
    inputFoodRef.current.value = "";
  }
  function hanldleRemoveItem(index) {
    setItems(Items.filter((item, i) => i !== index && item !== ""));
  }
  function handleKeydown(e) {
    if (e.key == "Enter") {
      handleAddItem();
    }
  }

  return (
    <div>
      <h1>list of food</h1>
      <ul>
        {Items.map((item, index) => (
          <li key={index} onClick={() => hanldleRemoveItem(index)}>
            {" "}
            {item}
          </li>
        ))}
      </ul>
      <input
        type="text"
        ref={inputFoodRef}
        placeholder="enter the food"
        onKeyDown={handleKeydown}
      />
      <button onClick={handleAddItem}>Add items</button>
    </div>
  );
}

export default UpdateArray;

// import { useState } from "react";

// function UpdateArray() {
//   const [items, setItems] = useState(["item1", "item2", "item3"]);

//   function handleAddItem() {
//     const input = document.getElementById("foodinput");
//     const value = input.value;
//     input.value = "";
//     setItems([...items, value]);
//     // setItems([...items, `item${items.length + 1}`]);
//   }
//   function handleRemoveItem(index) {

//     setItems(items.filter((item, i) => i !== index));
//     // setItems(items.slice(0, -1));
//   }
//   function handleKeyDown(e) {
//     if (e.key === "Enter") {
//       handleAddItem();
//     }
//   }

//   return (
//     <>
//       <div>
//         <h1>list of food</h1>
//         <ul>
//           {items.map((item, index) => (
//             <li key={index} onClick={() => handleRemoveItem(index)}>
//               {item}
//             </li>
//           ))}
//         </ul>
//         <input type="text" id="foodinput" onKeyDown={handleKeyDown} />
//         <button onClick={handleAddItem}>Add Item</button>
//         <button onClick={handleRemoveItem}>Remove Item</button>
//       </div>
//     </>
//   );
// }
