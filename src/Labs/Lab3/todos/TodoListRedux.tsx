/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function TodoListRedux() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div>
      <hr />
      <h3>Redux Todo List</h3>
      <h5>Demonstrate Common State Management With Redux (from Lab 4)</h5>
      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroup.Item key={todo.id}>{todo.title}</ListGroup.Item>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
