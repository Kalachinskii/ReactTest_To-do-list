// корень приложения - все то что будет в приложении
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// подключаемые компаненты
import Header from "./Header";
import Search from "./Search";
import List from "./List";
import AddItem from "./AddItem";

// точка сбора компонентов и библиотек
const App = () => {
    // список задач
    const initionData = [
        { id: 1, title: "To do app", done: true, important: true },
        { id: 2, title: "To drink coffee", done: false, important: false },
        { id: 3, title: "To wash car", done: true, important: true },
    ];

    /*
    по умолчанию
    state = [];
    хук (запушить новое значение массив задач)
    диструктизация задачи в tasks а функцию в setTasks
    состояние должно быть по конкретной задачи
    в ListItem тогда по 1 конкретной задачи
    в list по всем задачам
*/

    const [tasks, setTasks] = useState(initionData);

    /*                          неактуально
    done не только работает в связи но и зависит другая информация
    const [done, setDone] = useState(0);
    const getTaskHendler = (tasks) => {
        //                      .filter
        // фильтруем массив по done=true - остальное выбрасываем
        // const count = tasks.filter((item) => item.done).length;
        //                      reduce
        const count = tasks.reduce((count, item) => {
            return count + (item.done ? 1 : 0);
        }, 0);
        // отображаем кол-во выполненых задачь при клике
        setDone(count);
        return count;
    };
    Эффект для обновления состояния при загрузке страницы
    useEffect(() => {
        const count = getTaskHendler(tasks);
        setDone(count); // Обновляем состояние
     }, []); // Пустой массив зависимостей, выполнить эффект только один раз при загрузке
    */

    // Important
    const changeImportantHandler = (id) => {
        // возвращает индекс элемента из массива tasks на который нажали
        const ind = tasks.findIndex((item) => {
            return item.id === id;
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

    // Done
    const changeDoneHandler = (id) => {
        const ind = tasks.findIndex((item) => {
            return item.id === id;
        });

        let newTasks = [...tasks];
        newTasks[ind].done = !newTasks[ind].done;
        // выполнить(зачеркнуть)/отменить задачу
        setTasks(newTasks);
    };

    // delete
    const deleteItemHandler = (id) => {
        const ind = tasks.findIndex((item) => {
            return item.id === id;
        });

        let newTasks = [...tasks];
        newTasks.splice(ind, 1);
        setTasks(newTasks);
    };

    // изменения происходит по всему коду где задействованы tasks при
    // изменении в setTasks т.о. изменения в tasks происходят и в детях
    const done = tasks.reduce((count, item) => {
        return count + (item.done ? 1 : 0);
    }, 0);

    const todo = tasks.length - done;

    return (
        <div className="todo-app">
            <Header todo={todo} done={done} />
            <Search />
            <List
                getTask={tasks}
                onDeleteItem={deleteItemHandler}
                onImportant={changeImportantHandler}
                onDone={changeDoneHandler}
            />
            <AddItem />
        </div>
    );
};

export default App;
