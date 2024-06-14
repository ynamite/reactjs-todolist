import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList(props) {
    const { todos } = props;
    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard
                        index={todoIndex}
                        key={todoIndex}
                        {...props}>
                        <p>{todo}</p>
                    </TodoCard>
                );
            })}
        </ul>
    );
}
