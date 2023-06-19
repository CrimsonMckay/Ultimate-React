import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  //  const [isShow,setIsShow]=useState(false);
  const [friends, setIFriends] = useState(initialFriends);
  const handleAddfriends = (friend) => {
    setIFriends([...friends, friend]);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friendList={friends} />
        {isOpen && <FormAddFriend onAddFriend={handleAddfriends} />}

        <Button onClick={() => setIsOpen((show) => !show)}>
          {isOpen ? "close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendList({ friendList }) {
  return (
    <ul>
      {friendList.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)} GH₵
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes {Math.abs(friend.balance)} GH₵
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💰 Bill value</label>
      <input type="text" />

      <label>👛 Your expense</label>
      <input type="text" />

      <label>👭 X's expense</label>
      <input type="text" disabled />
      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="user">x</option>
      </select>
    </form>
  );
}
export default App;
