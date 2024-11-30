import "./App.css";
import Main from "./components/Main";
import Task from "./components/TaskForm";
import LoginForm from "./components/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="add" element={<Task action="add"/>} />
          <Route exact path="edit/:id" element={<Task action="upd"/>} />
          <Route exact path="drop/:id" element={<Task action="del"/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
