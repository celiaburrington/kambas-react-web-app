import { FaPlus } from "react-icons/fa6";
import { Button, FormControl, FormGroup } from "react-bootstrap";
import { GoSearch } from "react-icons/go";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <GoSearch className="float-start fs-2 me-2 pt-1"/>
      <FormGroup className="float-start">
        <FormControl placeholder="Search..." />
      </FormGroup>
      <Button
        variant="danger"
        size="lg"
        className="me-1 float-end"
        id="wd-add-module-btn"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="me-1 float-end"
        id="wd-view-progress"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>
    </div>
  );
}
