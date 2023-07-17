import "./TodoItem.css";

function TodoItem({ completed, children }) {
    const classList = [ "todo-item" ];

    if (completed) {
        classList.push("completed");
    }

    return (
        <div className={classList.join(" ")}>
            <span>{ children }</span>
            <button className="delete-btn">Deletar</button>
        </div>
    );
}

export default TodoItem;