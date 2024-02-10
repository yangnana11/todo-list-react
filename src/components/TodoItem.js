import { useState } from "react";
import editIcon from './../assets/edit.svg';
import deleteIcon from './../assets/delete.svg';
import cancelIcon from './../assets/cancel.svg';
function TodoItem(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");
    function handleChange(e) {
        setNewName(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }
    const editingTemplate = (
        <form className="" onSubmit={handleSubmit}>
            <div className="">
                <input autoFocus id={props.id} className="" type="text" value={newName} onChange={handleChange} />
            </div>
            <div className="">
                <button type="button" className="" onClick={() => setEditing(false)}>
                    <img src={cancelIcon} alt="Cancel" width={30} height={30} />
                </button>
                {/* <button type="submit" className="">
                    Save
                    <span className="">new name for {props.name}</span>
                </button> */}
            </div>
        </form>
    );
    const viewTemplate = (
        <div className="item-container">
            <div className="">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="">
                <button type="button" className="" onClick={() => setEditing(true)}>
                    <img src={editIcon} alt="Edit" width={30} height={30} />
                </button>
                <button
                    type="button"
                    className=" __danger"
                    onClick={() => props.deleteTask(props.id)}>
                    <img src={deleteIcon} alt="Delete" width={30} height={30} />
                </button>
            </div>
        </div>
    );
    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default TodoItem;