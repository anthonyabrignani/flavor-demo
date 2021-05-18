import Flavor from "../model/Flavor";

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
  return (
    <form className="FlavorForm">
      
    </form>
  );
}

export default FlavorForm;