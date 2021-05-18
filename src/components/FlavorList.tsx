import Flavor from "../model/Flavor";

/* Task:
- Display a table of all the given flavors.
- Include a column for name and a column for votes.
- Make each name an <a> tag that links to "#" + the id of the flavor. e.g. href="#2"
*/

interface Props {
  flavors: Flavor[];
}

function FlavorList({ flavors }: Props) {
  return (
    <div className="FlavorList">
      
    </div>
  );
}

export default FlavorList;