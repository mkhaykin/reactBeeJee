import PropTypes from "prop-types";

function TaskLine( item ) {
  return (
    <tr key={item.task_id}>
      <th scope="row">{item.number}</th>
      <td>{item.user_name}</td>
      <td>{item.user_email}</td>
      <td>{item.text}</td>
      <td align="center">{item.is_completed ? "✔" : ""}</td>
      <td>{item.status}</td>
      <td>
        <a href={"edit/" + item.task_id }>
        <img src="/icon-edit.png"/>
        </a>
      </td>
      <td>
      <a href={"drop/" + item.task_id }>
        <img src="/icon-drop.png"/>
        </a>
      </td>
    </tr>
  );
}

TaskLine.propTypes = {
  task_id: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  user_name: PropTypes.string.isRequired,
  user_email: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  is_completed: PropTypes.bool.isRequired,
};

export default TaskLine;
