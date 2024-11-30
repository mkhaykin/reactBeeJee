const fetchTask = (task_id, formUpdater) => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Charset: "utf8",
    },
  };
  return fetch(`${import.meta.env.VITE_API_URL}/api/task/${task_id}`, options)
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      formUpdater(responseData);
    })
    .catch(function (res) {
      console.warn(res);
    });
};

const fetchTaskAdd = (user_name, user_email, text) => {
  const options = {
    method: "POST",
    headers: {
      "access-control-allow-origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json",
      Charset: "utf8",
    },
    body: JSON.stringify({
      user_name: user_name,
      user_email: user_email,
      text: text,
    }),
  };
  return fetch(`${import.meta.env.VITE_API_URL}/api/task`, options)
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
};

const fetchTaskUpd = (task_id, text, is_completed) => {
  console.log(text);
  console.log(is_completed);
  const options = {
    method: "PUT",
    headers: {
      "access-control-allow-origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json",
      Charset: "utf8",
    },
    body: JSON.stringify({
      text: text,
      is_completed: is_completed,
    }),
  };
  return fetch(`${import.meta.env.VITE_API_URL}/api/task/${task_id}`, options)
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
};

const fetchTaskDel = (task_id) => {
  const options = {
    method: "DELETE",
    headers: {
      "access-control-allow-origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json",
      Charset: "utf8",
    },
  };
  return fetch(`${import.meta.env.VITE_API_URL}/api/task/${task_id}`, options)
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
};

export { fetchTask, fetchTaskAdd, fetchTaskUpd, fetchTaskDel };
