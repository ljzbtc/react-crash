function ClickEvent() {
  const handleClick = (event) => {
    event.target.textContent = "😯OUCHI";
  };

  return <button onClick={(event) => handleClick(event)}>Click me</button>;
}

export default ClickEvent;
