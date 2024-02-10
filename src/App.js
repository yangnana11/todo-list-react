import { useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import './App.css';
import FilterList from "./components/FilterList";
function App(props) {
    const FILTER_MAP = {
        All: () => true,
        Active: (task) => !task.completed,
        Completed: (task) => task.completed,
    };
    const FILTER_NAMES = Object.keys(FILTER_MAP);
    const [filter, setFilter] = useState("All");
    const [isFilter, setIsFilter] = useState(false);
    function clearList() {
        setTasks([]);
    }
    function onFilter(name) {
        setFilter(name);
        setIsFilter(false);
    }
    function addTask(name) {
        const newTask = { id: `todo-${Date.now()}`, name, completed: false };
        setTasks([...tasks, newTask]);
    }
    const [tasks, setTasks] = useState(props.tasks);

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map((task) => {
            if (id === task.id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    }
    function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    }
    function editTask(id, newName) {
        const editedTaskList = tasks.map((task) => {
            if (id === task.id) {
                return { ...task, name: newName };
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    const taskList = tasks.filter(FILTER_MAP[filter]);

    const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
    const headingText = `${taskList.length} ${tasksNoun} remaining`;
    return (
        <div className="content-container">
            <FilterList list={FILTER_NAMES} 
                filter={filter} 
                setFilter={onFilter} 
                tasks={tasks} 
                setIsFilter={setIsFilter} 
                isFilter={isFilter} 
                clearList={clearList} />
            {/* <h2>{headingText}</h2> */}
            <TodoList tasks={taskList} 
                toggleTaskCompleted={toggleTaskCompleted} 
                filter={filter} 
                deleteTask={deleteTask}
                editTask={editTask} />
            <Form addTask={addTask} />
        </div>
    );
}

export default App;
