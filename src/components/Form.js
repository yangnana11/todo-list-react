import { useState } from "react";
function Form(props) {
    const [name, setName] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        props.addTask(name);
        setName("");
    }
    function handleChange(event) {
        setName(event.target.value);
    }
    return (
        <form className="add-container" onSubmit={handleSubmit}>
            <input
                type="text"
                id="new-todo-input"
                className=""
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="">
                add task
            </button>
        </form>
    );
}

export default Form;
