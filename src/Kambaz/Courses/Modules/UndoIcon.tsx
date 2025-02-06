import { FaCircle } from "react-icons/fa";
import { TbCancel } from "react-icons/tb";

export default function UndoIcon() {
  return (
    <span className="me-1 position-relative">
      <TbCancel
        style={{ top: "0px" }}
        className="me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
}
