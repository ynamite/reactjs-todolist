import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);
    const [todoValue, setTodoValue] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        formData = new FormData(event.target);
        const newTodo = formData.get('todo');
        handleAddTodos(newTodo);
    }

    function persistData(newList) {
        localStorage.setItem('todos', JSON.stringify({ todos: newList }));
    }

    function handleAddTodos(newTodo) {
        const newTodoList = [...todos, newTodo];
        persistData(newTodoList);
        setTodos(newTodoList);
    }

    function handleDeleteTodos(index) {
        const newTodoList = todos.filter(
            (todo, todoIndex) => todoIndex !== index
        );
        persistData(newTodoList);
        setTodos(newTodoList);
    }

    function handleEditTodos(index) {
        const valueToBeEdited = todos[index];
        setTodoValue(valueToBeEdited);
        handleDeleteTodos(index);
    }

    useEffect(() => {
        if (!localStorage) return;
        let localTodos = localStorage.getItem('todos');
        if (!localTodos) return;
        localTodos = JSON.parse(localTodos).todos;
        setTodos(localTodos);
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TodoInput
                    todoValue={todoValue}
                    setTodoValue={setTodoValue}
                    handleAddTodos={handleAddTodos}
                />
            </form>
            <TodoList
                todos={todos}
                handleEditTodos={handleEditTodos}
                handleDeleteTodos={handleDeleteTodos}
            />
        </>
    );
}

export default App;
