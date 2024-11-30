import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import Pagination from "./Paginator";
import { fetchTasks } from "./api"

function TaskTable({ page }) {
  const navigate = useNavigate();
  const [ans, setAns] = useState([]);

  useEffect(() => {
    fetchTasks(page, setAns);
  }, []);

  const a = !ans || !ans.tasks;
  return (
    <>
      {a ? (<h2>Loading ...</h2>) : (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User name</th>
              <th scope="col">User email</th>
              <th scope="col">Task</th>
              <th scope="col">Finished</th>
              <th colSpan="2">
                <button
                  onClick={() => {
                    navigate("/add");
                  }}
                >
                  Create new task
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <TaskList
              tasks={ans.tasks}
              start_number={(ans.current_page - 1) * ans.per_page + 1}
            />
          </tbody>
        </table>

        <Pagination totalPages={ans.pages} currentPage={ans.current_page} />
      </>
      )}
    </>
  );
}

TaskTable.propTypes = {
  page: PropTypes.number.isRequired,
};

export default TaskTable;
