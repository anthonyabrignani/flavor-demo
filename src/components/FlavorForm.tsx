import Flavor from "../model/Flavor";
import { useState, FormEvent } from "react";

/* Task:
- Create a form that has textboxes for name and color.
- Add a submit button.
- When the form is submitted, create a Flavor object with the name and color
  from the form. Set votes to 0. Do not set id. Then call the onSubmit callback
  prop and pass it the new Flavor object.
*/

interface Props {
  onSubmit: (flavor: Flavor) => void;
}

function FlavorForm({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [votes, setVotes] = useState(0);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const flavor: Flavor = {
      name: name,
      color: color,
      votes: votes,
    };

    onSubmit(flavor);
    setName("");
    setColor("");
    setVotes(0);
  }

  return (
    <form className="FlavorForm" onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            Name
          </input>
        </label>
      </div>
      <div>
        <label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            Color
          </input>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FlavorForm;
