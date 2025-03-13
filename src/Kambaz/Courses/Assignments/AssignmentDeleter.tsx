import { Modal, Button } from "react-bootstrap";

export default function AssigmentDeleter({
  show,
  handleClose,
  dialogTitle,
  deleteAssignment,
}: {
  show: boolean;
  handleClose: () => void;
  dialogTitle: string;
  deleteAssignment: () => void;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            deleteAssignment();
            handleClose();
          }}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
