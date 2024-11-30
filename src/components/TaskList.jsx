import TaskLine from "./TaskLine";

export default function TaskList({ tasks, start_number }) {
  return tasks.map((task, index) => {
    const obj = {...task, number: start_number + index};
    return <TaskLine key={task.task_id} {...obj} />;
  });
}
