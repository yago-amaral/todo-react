import { useState } from "react";
import "./css/TodoForm.css";

function TodoForm({ listState }) {
    const [ inputText, setInputText ] = useState("");
    const [ list, setList ] = listState;

    return (
            <form onSubmit={
                (e) => {
                    e.preventDefault();
                    addNewItem(inputText, listState);
                    setInputText("");
                }
            }>
            <input type="text" required value={inputText} placeholder="Adicione uma tarefa" onChange={
                (e) => {
                    setInputText(e.target.value);
                }
            } />
            <button type="submit" className="add-btn">Adicionar</button>
        </form>
    );
}

function addNewItem(inputText, [list, setList]) {
    const newList = [...list];

    newList.unshift(inputText);
    setList(newList);
};

export default TodoForm;