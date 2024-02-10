import TodoItem from "./TodoItem";
import icon from './../assets/icon.svg'

function TodoList(props) {
    const taskList = props.tasks.map((task) => (
        <TodoItem id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={props.toggleTaskCompleted}
            deleteTask={props.deleteTask} 
            editTask={props.editTask} />
    ));
    const listTemplate = (
        <ul
            role="list"
            className="list-container"
            aria-labelledby="list-heading">
            {taskList}
        </ul>
    );
    const initTemplate = (
        <div className="init-container">
            <figure>
                <img src={icon} alt="Todo List" width={178} height={204}/>
            </figure>
            <p>Your Tasks List is Empty</p>
            <p>You don't have any active tasks right now. Try to add some!</p>
        </div>
    )
    return props.tasks.length==0 && props.filter=="All" ? initTemplate : listTemplate;
}
export default TodoList;