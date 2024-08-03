import PropTypes from "prop-types";

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};

function List(props) {
  const itemsList = props.items;

  const category = props.category;

  

  const listItems = itemsList.map((item) => (
    <li key={item.id}>
      {item.name}:&nbsp;<b>{item.price}</b>
    </li>
  ));

  return (
    <div>
      <h2 className="List-title">{category}</h2>
      <ul className="List">{listItems}</ul>
    </div>
  );
}

export default List;
