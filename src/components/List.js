import React, { useState } from "react";
import ListItem from "./ListItem";

const List = () => {
    // список задач
    const initionData = [
        { id: 1, title: "To do app", done: true, important: true },
        { id: 2, title: "To drink coffee", done: false, important: false },
        { id: 3, title: "To wash car", done: false, important: true },
    ];
    // по умолчанию
    // state = [];
    // хук (запушить новое значение массив задач)
    // диструктизация задачи в tasks а функцию в setTasks
    // состояние должно быть по конкретной задачи
    // в ListItem тогда по 1 конкретной задачи
    // в list по всем задачам

    let [tasks, setTasks] = useState(initionData);

    const changeImportantHandler = (id) => {
        // возвращает индекс элемента из массива tasks на который нажали
        const ind = tasks.findIndex((item) => {
            return item.id == id;
        });

        //                  spread operator
        // копия массива
        let newTasks = [...tasks];
        // вносим изменения при клике
        newTasks[ind].important = !newTasks[ind].important;
        // отправляем на обработку с отрисовкой в виртуальный DOM
        setTasks(newTasks);

        //                      map
        // let newTasks = tasks.map((item) => {
        //     return item;
        // });
        // newTasks[ind].important = !newTasks[ind].important;
        // setTasks(newTasks);

        //                 КОНКАТИНАЦИЯ
        // let newTasks = [].concat(tasks);
        // newTasks[ind].important = !newTasks[ind].important;
        // setTasks(newTasks);
    };

    const changeDoneHandler = (id) => {
        const ind = tasks.findIndex((item) => {
            return item.id == id;
        });

        let newTasks = [...tasks];
        newTasks[ind].done = !newTasks[ind].done;
        setTasks(newTasks);
    };

    const deleteItemHandler = (id) => {
        const ind = tasks.findIndex((item) => {
            return item.id == id;
        });

        let newTasks = [...tasks];
        newTasks.splice(ind, 1);
        setTasks(newTasks);
    };

    const items = tasks.map((item) => (
        // каждый однотипный элемент должен индексироваться key=
        <ListItem
            key={item.id}
            item={item}
            // onDeleteItem={(id) => deleteItemHandler(id)}
            onDeleteItem={deleteItemHandler}
            // onChangeDone={(id) => changeDoneHandler(id)}
            onChangeDone={changeDoneHandler}
            // onChangeImportant={(id) => changeImportantHandler(id)}
            onChangeImportant={changeImportantHandler}
        />
    ));

    return <ul className="list-group todo-list">{items}</ul>;
};

export default List;
