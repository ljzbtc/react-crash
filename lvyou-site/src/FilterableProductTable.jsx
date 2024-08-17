const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

import { useState } from "react";

function SearchBar({ isStockOnly, onStockOnlyChange }) {
  const handleStock = (e) => {
    onStockOnlyChange(e.target.checked);
    console.log(isStockOnly);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." />
      <br />
      <label>
        <input type="checkbox" checked={isStockOnly} onChange={handleStock} />
        Only show products in stock
      </label>
    </div>
  );
}

function ProductCategoryRow(props) {
  return (
    <tr>
      <th colSpan="2">{props.category}</th>
    </tr>
  );
}

function ProductRow(props) {
  const product = props.product;
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  if (props.isStockOnly) {
    if (product.stocked) {
      return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      );
    }
  } else {
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

function ProductTable({ products, isStockOnly }) {
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        isStockOnly={isStockOnly}
        key={product.name}
      />
    );
    lastCategory = product.category;
  });

  console.log(rows);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function FilterableProductTable({ products }) {
  const [isStockOnly, setIsStockOnly] = useState(false);
  
  products = PRODUCTS;
  return (
    <div>
      <SearchBar isStockOnly={isStockOnly} onStockOnlyChange={setIsStockOnly} />
      <ProductTable products={products} isStockOnly={isStockOnly} />
    </div>
  );
}

export default FilterableProductTable;
