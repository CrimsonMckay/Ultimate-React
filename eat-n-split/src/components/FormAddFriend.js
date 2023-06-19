import { useState } from "react";
import Button from "./Button";
export default function FormAddFriend({ onAddFriend }) {
  const [friendName, setFriend] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    if (!friendName || !image) alert("Please fill in all fields");
    onAddFriend({ id, name: friendName, image: `${image}?={id}`, balance: 0 });
    setFriend("");
    setImage("https://i.pravatar.cc/48");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>👩🏻‍🤝‍👩🏻 Friend name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriend(e.target.value)}
      />
      <label>🌆Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
