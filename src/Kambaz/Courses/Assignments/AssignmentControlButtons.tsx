import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <IoEllipsisVertical className="float-end fs-4 mt-1" />
      <BsPlus className="float-end fs-2" />
      <div className="float-end border border-dark rounded fs-6 p-1 text-muted">40% of Total</div>
    </div>
  );
}
