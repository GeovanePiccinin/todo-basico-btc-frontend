function ListItem({ item, index, checkTaskHandler, deleteTaskHandler }) {
  const color = index % 2 === 0 ? "cornflowerblue" : "pink";

  return (
    <div style={{ backgroundColor: color, display: "flex", padding: "8px" }}>
      <div style={{ flex: "1" }}>
        <input
          style={{ marginRight: "4px" }}
          type="checkbox"
          onChange={() => checkTaskHandler(index)}
        />
        <span
          style={{ textDecoration: item.completed ? "line-through" : "none" }}
        >
          {item.content}
        </span>
      </div>
      <button onClick={() => deleteTaskHandler(index)}>Delete</button>
    </div>
  );
}
export default ListItem;
