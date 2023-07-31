import { useCallback, useRef, useState } from "react";




const ToDoList = () => {
    console.log("starting...");
    const todos = ["Buy groceries", "Clean the house", "Walk the dog"];
    const [toDoItemList, setToDoItemList] = useState(todos);
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setToDoItemList([...toDoItemList, newTodo]);
            setNewTodo('');
        }
    };

    return (
        <>
            {toDoItemList.length > 0 ?
                <ul className="list-group">{
                    toDoItemList.map((todo, index) => (
                        <button
                            key={index}
                            className={`btn btn-outline-primary rounded border p-2 mb-4  ${selectedItemIndex === index ? 'active' : ''}`}
                            onClick={() => setSelectedItemIndex(index)}>
                            {todo}
                        </button>
                    ))
                }</ul>
                : <p>"there are no to-dos"</p>
            }

            <label>
                To do item :
                <input type="text" id="newItem" name="newItem" onChange={(event)=>{setNewTodo(event.target.value);}} />
            </label>
            <input type="submit" value="Submit" onClick={handleAddTodo} />

        </>

    )
};

export default ToDoList;