import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [inputTask, setInputTask] = useState(""); // retorna um array [ variavel, funcao ]
  const [list, setList] = useState([
    { completed: false, content: "Read JS Book" },
    { completed: false, content: "Study Algebra" },
    { completed: false, content: "Do homework" },
    { completed: false, content: "Create expeses spreadsheet" },
    { completed: false, content: "Create new report" },
    { completed: false, content: "Write informative email" },
    { completed: false, content: "Organize Documents" },
    { completed: false, content: "Prepare budget spreadsheet" },
  ]);

  useEffect(() => {
    console.log("useEffect executado");
    const savedList = JSON.parse(localStorage.getItem("savedList"));
    console.log(savedList);
    if (Array.isArray(savedList)) {
      console.log("isArray");
      setList(savedList);
    }

    return () => {
      console.log("componente desmontado");
    };
  }, []);

  const handleAddTask = () => {
    setList([...list, { completed: false, content: inputTask }]);
    localStorage.setItem("savedList", JSON.stringify(list));
    setInputTask("");
  };

  const checkTask = (index) => {
    list[index].completed = !list[index].completed;
    setList([...list]);
    localStorage.setItem("savedList", JSON.stringify(list));
  };

  const deleteTask = (index) => {
    list.splice(index, 1);
    setList([...list]);
    localStorage.setItem("savedList", JSON.stringify(list));
  };

  return (
    <div
      style={{
        width: "700px",
        border: "1px solid",
        padding: "8px",
        margin: "8px auto 8px auto",
        backgroundColor: "lightgray",
      }}
    >
      <Header />
      <input
        value={inputTask}
        onChange={(event) => setInputTask(event.target.value)}
        type="text"
        style={{ marginRight: "5px" }}
      />
      <button onClick={handleAddTask}>Add task</button>
      <List
        checkTaskHandler={checkTask}
        deleteTaskHandler={deleteTask}
        type="ordered"
        title="Tasks"
        listData={list}
      />
    </div>
  );
}

export default App;
