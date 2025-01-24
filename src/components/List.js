import React from "react";
import ListItem from "./ListItem";

const List = ({ tasks, onDeleteItem, onDone, onImportant }) => {
    const items = tasks.map((item) => (
        // каждый однотипный элемент должен индексироваться key=
        <ListItem
            key={item.id}
            item={item}
            // onDeleteItem={(id) => deleteItemHandler(id)}
            onDeleteItem={(id) => onDeleteItem(id)}
            // onChangeDone={(id) => changeDoneHandler(id)}
            onChangeDone={(id) => onDone(id)}
            // onChangeImportant={(id) => changeImportantHandler(id)}
            onChangeImportant={(id) => onImportant(id)}
        />
    ));

    return <ul className="list-group todo-list">{items}</ul>;
};

export default List;
