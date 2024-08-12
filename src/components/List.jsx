import styles from "./List.module.css";
import ListItem from "./ListItem";

function List({ title, type, listData, children }) {
  //props.title, props.type, props.listData, props.children

  if (children) {
    <h2 className={styles.title}>{title}</h2>;
    return <>{children}</>;
  }

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      {type === "ordered" ? (
        <ol>
          {listData.map((item, index) => (
            <li key={index}>
              <ListItem item={item} index={index} />
            </li>
          ))}
        </ol>
      ) : (
        <ul>
          {listData.map((item, index) => (
            <li key={index}>
              <ListItem item={item} index={index} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default List;
