import styles from "./List.module.css";
import ListItem from "./ListItem";
import { useState } from "react";

function List({
  title,
  type,
  listData,
  children,
  checkTaskHandler,
  deleteTaskHandler,
}) {
  //props.title, props.type, props.listData, props.children

  if (children) {
    <h2 className={styles.title}>{title}</h2>;
    return <>{children}</>;
  }

  if (!listData) {
    return <h2 className={styles.title}>No tasks inserted yet</h2>;
  }

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      {type === "ordered" ? (
        <ol>
          {listData.map((item, index) => (
            <li key={index}>
              <ListItem
                checkTaskHandler={checkTaskHandler}
                deleteTaskHandler={deleteTaskHandler}
                item={item}
                index={index}
              />
            </li>
          ))}
        </ol>
      ) : (
        <ul>
          {listData.map((item, index) => (
            <li key={index}>
              <ListItem
                checkTaskHandler={checkTaskHandler}
                deleteTaskHandler={deleteTaskHandler}
                item={item}
                index={index}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default List;
