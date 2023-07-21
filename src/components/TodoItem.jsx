import { useEffect, useState } from "react";
import "./css/TodoItem.css";

function TodoItem({ listState, children, }) {
    const [ list, setList ] = listState;

    const [ classList, setClassList ] = useState([ "todo-item" ]);
    const [ className, setClassName ] = useState(classList.join(" "));
    const [ index ] = useState(list.length - 1);

    useEffect(() => {
        setClassName(classList.join(" "));
    }, [classList]);

    return (
        <div className={className}>
            <span
                onClick={() => toggleCompleted([classList, setClassList])}
            >{ children }</span>
            <button
                className="delete-btn"
                onClick={() => deleteItem(listState, index)}
            >Deletar</button>
        </div>
    );
}

function toggleCompleted([ classList, setClassList ]) {
    const newClassList = [...classList];

    if (classList.includes("completed"))
        newClassList.pop();
    else
        newClassList.push("completed");

    setClassList(newClassList);
}

function deleteItem([list, setList], itemIndex) {
    const newList = [...list];

    newList.splice(itemIndex, 1);
    setList(newList);

    console.log(`Item ${itemIndex} deletado`);
}

export default TodoItem;