import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import Pagination from "./Paginator";
import { fetchTasks } from "./api";

function TaskTable({ page }) {
  const navigate = useNavigate();
  const [ans, setAns] = useState([]);
  const [sort_by, setSortBy] = useState(parseInt(localStorage.getItem("sort_by") || 2));

  useEffect(() => {
    localStorage.setItem("sort_by", sort_by);
    fetchTasks(page, setAns, sort_by);
  }, [page, sort_by]);

  const a = !ans || !ans.tasks;
  return (
    <>
      {a ? (
        <h2>Loading ...</h2>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User name</th>
                <th scope="col">User email</th>
                <th scope="col">Task</th>
                <th scope="col">Finished</th>
                <th scope="col">Status</th>
                <th scope="col">
                  <button
                    onClick={() => {
                      navigate("/add");
                    }}
                  >
                    Create new task
                  </button>
                </th>
                <th>
                  <select
                    name="select"
                    defaultValue={sort_by}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                    }}
                  >
                    <option value="2">user name</option>
                    <option value="3">user email</option>
                    <option value="4">task</option>
                    <option value="5">finished</option>
                    <option value="6">status</option>
                  </select>
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
          <Pagination
            totalPages={ans.pages}
            currentPage={ans.current_page}
            sort_by={sort_by}
          />
        </>
      )}
    </>
  );
}

TaskTable.propTypes = {
  page: PropTypes.number.isRequired,
};

export default TaskTable;
