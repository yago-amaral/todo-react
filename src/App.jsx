import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    return (
        <div className='App'>
            <h1>Listinha de Tarefas</h1>
            <hr style={{
                border: "none",
                backgroundColor: "white",
                height: "1px"
            }} />

            <TodoForm />

            <TodoList />
        </div>
    );
}

export default App
