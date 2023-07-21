import TodoItem from "./TodoItem";
import "./css/TodoList.css";

function TodoList({ listState }) {
    const [ list, setList ] = listState;
    return (
        <div className="todo-list">
            {
                list.map((item, index) => 
                <TodoItem listState={listState} key={index + 1}>{item}</TodoItem>)
            }
            {
                list.length > 0 &&
                <button
                    className="delete-all-btn"
                    onClick={() => setList([])}
                >Deletar tudo</button>
            }
        </div>
    );
}

export default TodoList;