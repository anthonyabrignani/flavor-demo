import { useState } from "react";
import Flavor from "../model/Flavor";
import FlavorDetails from "./FlavorDetails";
import FlavorForm from "./FlavorForm";
import FlavorList from "./FlavorList";

/* Task:
Remember to use immutability:
- Fill in the addFlavor function. Add a flavor to the flavors array in state.
  Set the id of the new flavor using the `id` const. Test it using the "Test Add" button.
  Check the console.
- Fill in the upvoteFlavor function. Add a vote to the flavor with the given id. Test it
  using the "Test Upvote" button. Check the console.
- Fill in the getFlavorById function. Test it by checking the console for flavor1 and
  flavor3.
*/

let nextId: number = 4;

function FlavorParent() {
  const [ flavors, setFlavors ] = useState<Flavor[]>([
    { id: 1, name: "Chocolate", color: "brown", votes: 0 },
    { id: 2, name: "Strawberry", color: "pink", votes: 0 },
    { id: 3, name: "Mint", color: "palegreen", votes: 0 },
  ]);

  function addFlavor(flavor: Flavor): void {
    const id = nextId++;
    setFlavors(prev => [ ...prev, { ...flavor, id }]);
  }

  function upvoteFlavor(flavorId: number): void {
    setFlavors(prev => prev.map(flavor => {
      if (flavor.id === flavorId) {
        return { ...flavor, votes: flavor.votes + 1};
      } else {
        return flavor;
      }
    }));
  }

  function getFlavorById(flavorId: number): Flavor|undefined {
    return flavors.find(flavor => flavor.id === flavorId);
  }

  function testAdd() {
    addFlavor({name: "superman", color: "skyblue", votes: 0});
  }
  function testUpvote() {
    upvoteFlavor(2);
  }
  const flavor1 = getFlavorById(1) ?? flavors[0];
  const flavor3 = getFlavorById(3) ?? flavors[0];

  console.log(flavors);
  console.log("#2 votes", flavors[1].votes);
  console.log("flavor1", flavor1.name);
  console.log("flavor3", flavor3.name);

  return (
    <div className="FlavorParent">
      <h3>Flavor List</h3>
      <FlavorList flavors={flavors} />
      <h3>Flavor Details #1</h3>
      <FlavorDetails flavor={flavor1} onVote={upvoteFlavor} />
      <h3>Flavor Details #3</h3>
      <FlavorDetails flavor={flavor3} onVote={upvoteFlavor} />
      <h3>Flavor Form</h3>
      <FlavorForm onSubmit={addFlavor} />
      <h3>Testing...</h3>
      <button onClick={testAdd}>Test Add</button>
      <button onClick={testUpvote}>Test Upvote</button>
    </div>
  );
}

export default FlavorParent;