import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 3, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away💼 </h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(description);
  };

  const handleChange = (e) => {
    console.log(description);
    setDescription(e.target.value);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your 😍 trip</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num, i) => (
          <option value={num} key={i}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        placeholder="Item...."
        onChange={(e) => handleChange(e)}
      />
      <button>Add</button>
    </form>
  );
}
function PackagingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {""}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed x (x%)</em>
    </footer>
  );
}