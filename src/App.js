import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Card from "./components/Card";

const schoolTasks = [
  "Read JS Book",
  "Study Algebra",
  "Do homework",
  "Create expeses spreadsheet",
];

const workTasks = [
  "Create new report",
  "Write informative email",
  "Organize Documents 2",
  "Prepare budget spreadsheet",
];

function App() {
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

      <List type="ordered" title="Work Tasks" listData={workTasks} />
      <List type="unsorted" title="School Tasks" listData={schoolTasks} />

      <List title="Custom Work tasks">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {workTasks.map((item, i) => (
            <Card key={i} content={item} title="Custom item" />
          ))}
        </div>
      </List>
    </div>
  );
}

export default App;
