import PropTypes from 'prop-types';

export default function TotoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props;
    return (
        <header>
            <input
                type="text"
                placeholder="Enter a task"
                value={todoValue}
                name="todo"
                onChange={(event) => setTodoValue(event.target.value)}
            />
            <button
                onClick={() => {
                    handleAddTodos(todoValue);
                    setTodoValue('');
                }}>
                Add
            </button>
        </header>
    );
}

TotoInput.propTypes = {
    handleAddTodos: PropTypes.func.isRequired,
};

TotoInput.propTypes = {
    todoValue: PropTypes.string.isRequired,
};

TotoInput.propTypes = {
    setTodoValue: PropTypes.func.isRequired,
};
