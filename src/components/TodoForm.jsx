import "./TodoForm.css";

function TodoForm() {
    return (
        <form>
            <input type="text" placeholder="Adicione uma tarefa" />
            <button type="submit" className="add-btn">Adicionar</button>
        </form>
    );
}

export default TodoForm;