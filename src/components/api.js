const API_URL = `${import.meta.env.VITE_API_PROTOCOL}://${
  import.meta.env.VITE_API_HOST
}:${import.meta.env.VITE_API_PORT}/${import.meta.env.VITE_API_PATH}`;

const fetchAPI = (url, method, body, funcJson, funcErr) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Charset: "utf8",
  };

  const token = localStorage.getItem("access-token");
  if (token != null && token != undefined) {
    headers.Authorization = `Bearer ${token}`;
  }

  let options = {
    method: method,
    headers: headers,
  };

  if (method != "GET" && body) {
    options.body = JSON.stringify(body);
  }

  return fetch(`${API_URL}${url}`, options)
    .then((response) => {
      if (response.status >= 400) {
        const error = new Error("Ошибка авторизации");
        error.status = response.status;
        throw error;
      }
      return response.json();
    })
    .then((responseData) => {
      if (funcJson && funcJson instanceof Function) {
        funcJson(responseData);
      }
    })
    .catch(function (res) {
      if (funcErr && funcErr instanceof Function) {
        funcErr({ ...res });
      }
    });
};

const fetchTasks = (query_page, formUpdater) => {
  return fetchAPI(
    `/tasks?page=${query_page ? query_page : 1}`,
    "GET",
    undefined,
    formUpdater,
    undefined
  );
};

const fetchTask = (task_id, formUpdater) => {
  return fetchAPI(`/task/${task_id}`, "GET", undefined, formUpdater, undefined);
};

const fetchTaskAdd = (
  user_name,
  user_email,
  text,
  is_completed,
  funcProc,
  funcErr
) => {
  const body = {
    user_name: user_name,
    user_email: user_email,
    text: text,
    is_completed: is_completed,
  };

  return fetchAPI("/task", "POST", body, funcProc, funcErr);
};

const fetchTaskUpd = (task_id, text, is_completed, funcProc, funcErr) => {
  const body = {
    text: text,
    is_completed: is_completed,
  };

  return fetchAPI(`/task/${task_id}`, "PUT", body, funcProc, funcErr);
};

const fetchTaskDel = (task_id, funcProc, funcErr) => {
  return fetchAPI(`/task/${task_id}`, "DELETE", undefined, funcProc, funcErr);
};

export {
  fetchAPI,
  fetchTasks,
  fetchTask,
  fetchTaskAdd,
  fetchTaskUpd,
  fetchTaskDel,
};
