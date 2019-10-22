import * as React from 'react';
import { observer } from 'mobx-react';
import { TodoItem } from './TodoItem';
import { TodoGenerator } from './TodoGenerator';
import { ITodoList } from '../store/TodoList';

interface ITodoListProps {
    todoList: ITodoList
}

@observer
class TodoList extends React.Component<ITodoListProps> {
    addTodo = (title: string) => {
        const {todoList} = this.props;
        todoList.addTodoItem(title);
    }

    render() {
        const {todoList} = this.props;

        return (
            <>
                <ul>
                    {todoList.todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                        />
                    ))}
                </ul>

                <TodoGenerator onTodoAdd={this.addTodo} />
                <p>Tasks left: {todoList.unfinishedTodosCount}</p>
            </>
        );
    }
}

export { TodoList };
