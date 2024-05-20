import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex flex-col items-center">
      <p className="text-xl text-center">👋 Welcome! Please start by telling us your name:</p>
    <input type="text"
        placeholder="Your full name"
        value={username}
        className="input w-72 my-3"
        onChange={(e) => setUsername(e.target.value)}/>

      {username !== "" && (
        <div>
          <Button to="/order/new">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
