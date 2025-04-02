import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((_item, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables">
      <h3>Array State Variable</h3>
      <Button className="btn-success gap-2 mb-2" onClick={addElement}>
        Add Element
      </Button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <Button
              className="btn-danger m-2"
              onClick={() => deleteElement(index)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
