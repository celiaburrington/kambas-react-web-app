import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
import { Button, FormControl } from "react-bootstrap";

export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { sum } = useSelector((state: any) => state.addReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-add-redux">
      <h3>Add Redux</h3>
      <h4>
        {a} + {b} = {sum}
      </h4>
      <FormControl
        className="w-25"
        type="number"
        defaultValue={a}
        onChange={(e) => setA(parseInt(e.target.value))}
      />
      <FormControl
        className="w-25"
        type="number"
        defaultValue={b}
        onChange={(e) => setB(parseInt(e.target.value))}
      />
      <Button id="wd-add-redux-click" onClick={() => dispatch(add({ a, b }))}>
        Add Redux
      </Button>
      <hr />
    </div>
  );
}
