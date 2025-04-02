import { FaPlus } from "react-icons/fa6";
import { Button, FormControl, FormGroup } from "react-bootstrap";
import { GoSearch } from "react-icons/go";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentsControls({ cid }: { cid: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";

  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <GoSearch className="float-start fs-2 me-2 pt-1" />
      <FormGroup className="float-start">
        <FormControl placeholder="Search..." />
      </FormGroup>
      {isFaculty && (
        <>
          <a href={`#/Kambaz/Courses/${cid}/Assignments/${uuidv4()}`}>
            <Button
              variant="danger"
              size="lg"
              className="me-1 float-end"
              id="wd-add-module-btn"
            >
              <FaPlus
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />
              Assignment
            </Button>
          </a>
          <Button
            variant="secondary"
            size="lg"
            className="me-1 float-end"
            id="wd-view-progress"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Group
          </Button>
        </>
      )}
    </div>
  );
}
