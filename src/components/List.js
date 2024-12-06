import React, { useState } from "react";
import ListItem from "./ListItem";

const List = () => {
    // список задач
    // оно должно быть как состояние
    const initionData = [
        { id: 1, title: "To do app", done: true, important: true },
        { id: 2, title: "To drink coffee", done: false, important: false },
        { id: 3, title: "To wash car", done: false, important: true },
    ];

    // по умолчанию
    // state = [];
    // хук (запушить новое значение массив задач)
    // диструктизация задачи в tasks а функцию в setTasks
    let [tasks, setTasks] = useState(initionData);

    // стили
    const style = { color: "black", fontWeight: "normal" };

    const clickHandler = (id) => {
        // возвращает индекс элемента из массива tasks на который нажали
        const ind = tasks.findIndex((item) => {
            return item.id == id;
        });

        // копия массива
        let newTasks = [...tasks];
        // вносим изменения при клике
        newTasks[ind].important = !newTasks[ind].important;
        // отправляем но обработку в виртуальный DOM
        setTasks(newTasks);
    };

    /* arr.map(name => ()) - делаем с () а не с {} */
    /* {} - делают логику, () - возвращают JSX  */
    /* желательно делать не в return  */
    const items = tasks.map((item) => (
        // каждый однотипный элемент должен индексироваться key=
        <li key={item.id} className="list-group-item">
            <span
                className={`
        todo-list-item 
        ${item.important ? "important" : ""} 
        ${item.done ? "done" : ""}`}
            >
                <span className="todo-list-item-label">{item.title}</span>
                <button
                    onClick={() => clickHandler(item.id)}
                    type="button"
                    className="btn btn-outline-success btn-sm float-end"
                >
                    <i className="fa fa-exclamation"></i>
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-end"
                >
                    <i className="fa fa-trash"></i>
                </button>
            </span>
        </li>
        // <ListItem item={item} key={item.id} />
    ));

    return (
        <ul className="list-group todo-list">
            {/* нельзя использовать foreach вывод через map */}
            {items}
        </ul>
    );
};

export default List;
