import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { useParams } from "react-router";

import { fetchTask, fetchTaskAdd, fetchTaskUpd, fetchTaskDel } from "./api";

function Input({ labelText, itemName, itemType, ...params }) {
  itemType = itemType || "text";
  return (
    <div className="form-group">
      <label className="form-control-label" htmlFor={itemName}>
        {labelText}
      </label>

      <input
        className="form-control form-control-lg"
        id={itemName}
        name={itemName}
        required
        type={itemType}
        {...params}
      />
    </div>
  );
}

function Text({ labelText, itemName, ...params }) {
  return (
    <div className="form-group">
      <label className="form-control-label" htmlFor={itemName}>
        {labelText}
      </label>

      <textarea
        className="form-control form-control-lg"
        id={itemName}
        name={itemName}
        required
        {...params}
      />
    </div>
  );
}

function Check({ labelText, itemName, ...params }) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        id={itemName}
        name={itemName}
        type="checkbox"
        {...params}
      />
      <label className="form-check-label" htmlFor={itemName}>
        {labelText}
      </label>
    </div>
  );
}

export default function Task({ action }) {
  const { id } = useParams();

  const [user_name, setUserName] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [text, setText] = useState("");
  const [is_completed, setIsCompleted] = useState(false);
  const [is_confirm_deletion, setIsConfirmDeletion] = useState(false);

  const navigate = useNavigate();

  function setValues(values) {
    setUserName(values.user_name);
    setUserEmail(values.user_email);
    setText(values.text);
    setIsCompleted(values.is_completed);
  }
  
  useEffect(() => {
    if (id !== undefined) {
      fetchTask(id, setValues);
    }
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();

    if (action === "add") {
      fetchTaskAdd(user_name, user_email, text);
      navigate("/");
    } else if (action === "upd") {
      fetchTaskUpd(id, text, is_completed);
    } else if (action === "del") {
      if (is_confirm_deletion) {
        fetchTaskDel(id);
        navigate("/");
      } else {
        alert("Для удаления установите флагом 'Confirm deletion'.");
      }
    }
  }

  function rendUserName(action) {
    return (
      <Input
        labelText="User name"
        itemName="user_name"
        placeholder="enter user name..."
        disabled={action !== "add"}
        value={user_name}
        onChange={(e) => setUserName(e.target.value)}
      />
    );
  }

  function rendUserEmail(action) {
    return (
      <Input
        labelText="User email"
        itemName="user_email"
        placeholder="enter user email..."
        disabled={action !== "add"}
        value={user_email}
        type="email"
        onChange={(e) => setUserEmail(e.target.value)}
      />
    );
  }

  function rendText(action) {
    return (
      <Text
        labelText="Task"
        itemName="text"
        placeholder="enter task description..."
        disabled={action === "del"}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    );
  }

  function rendIsCompleted(action) {
    return (
      <Check
        labelText="Task completed"
        itemName="is_completed"
        itemType="checkbox"
        className="form-check-input"
        disabled={action === "del"}
        checked={is_completed}
        onChange={() => setIsCompleted(!is_completed)}
      />
    );
  }

  function rendIsConfirmDelete() {
    return (
      <Check
        labelText="Confirm deletion"
        itemName="is_confirm_deletion"
        itemType="checkbox"
        className="form-check-input"
        checked={is_confirm_deletion}
        onChange={() => setIsConfirmDeletion(!is_confirm_deletion)}
      />
    );
  }

  function rendTitle(action) {
    if (action === "add") {
      return "Create task";
    } else if (action === "upd") {
      return "Update task";
    } else if (action === "del") {
      return "Delete task";
    }
  }

  return (
    <div className="content-section">
      <form onSubmit={handleSubmit}>
        <fieldset className="form-group">
          <legend className="border-bottom mb-4">{rendTitle(action)}</legend>
          {rendUserName(action)}
          {rendUserEmail(action)}
          {rendText(action)}
          {rendIsCompleted(action)}
          {action === "del" ? rendIsConfirmDelete(action) : ""}
        </fieldset>
        <div className="form-group">
          <button className="btn btn-outline-info" type="Submit">
            {rendTitle(action)}
          </button>
          <input type="button" className="btn btn-outline-info" onClick={()=> navigate('/')} value="Back to list"/>
        </div>
      </form>
    </div>
  );
}



Input.propTypes = {
    labelText: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    itemType: PropTypes.string,
};

Text.propTypes = {
  labelText: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
};

Check.propTypes = {
  labelText: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
};

Task.propTypes = {
  action: PropTypes.string.isRequired,
};
