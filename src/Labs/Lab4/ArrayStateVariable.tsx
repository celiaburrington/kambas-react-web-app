import { useState } from "react";

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
      <button onClick={addElement}>Add Element</button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {" "}
            {item}
            <button onClick={() => deleteElement(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
