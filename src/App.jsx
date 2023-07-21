import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from 'react';
import './App.css';

function App() {
    const listState = useState([]);

    return (
        <div className='App'>
            <h1>Listinha de Tarefas</h1>
            <hr style={{
                border: "none",
                backgroundColor: "white",
                height: "1px"
            }} />

            <TodoForm listState={listState} />

            <TodoList listState={listState} />
        </div>
    );
}

export default App;
