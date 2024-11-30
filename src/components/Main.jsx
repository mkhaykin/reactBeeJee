import { useSearchParams } from "react-router-dom";
import TaskTable from "./TaskTable";

export default function Main() {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page"));
  return (
    <div className="content-section">
      <TaskTable page={!page ? 1 : page} />
    </div>
  );
}
