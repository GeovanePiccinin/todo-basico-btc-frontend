function ListItem({ item, index }) {
  const color = index % 2 === 0 ? "cornflowerblue" : "pink";

  return <div style={{ backgroundColor: color }}>{item}</div>;
}
export default ListItem;
