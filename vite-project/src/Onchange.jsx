import { useState } from "react";

function Onchange() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comments, setComments] = useState("");
  const [payment, setPayment] = useState("Cash");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }
  function handleCommentsChange(e) {
    setComments(e.target.value);
  }
  function handlePaymentChange(e) {
    setPayment(e.target.value);
  }
  function handleShippingChange(e) {
    setShipping(e.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name:{name}</p>
      <input value={quantity} onChange={handleQuantityChange} />
      <p>Name:{quantity}</p>
      <textarea
        value={comments}
        onChange={handleCommentsChange}
        placeholder="please leave message"
      />
      <p>Comments:{comments}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Please select </option>
        <option value="Credit">Credit</option>
        <option value="Paypal">Paypal</option>
        <option value="Cash">Cash</option>
      </select>
      <p>Payment:{payment}</p>
      <label>
        <input
          type="radio"
          value="Pickup"
          checked={shipping === "Pickup"}
          onChange={handleShippingChange}
        />
        Pick up
      </label><br/>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
      </label>
      <label>Delivery</label>
      <p>Shipping:{shipping}</p>
    </div>
  );
}

export default Onchange;
