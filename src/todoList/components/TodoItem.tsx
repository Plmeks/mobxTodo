import * as React from 'react';
import { ITodo } from '../store/Todo';
import { observer } from 'mobx-react';

interface ITodoItemProps {
    todo: ITodo;
    onTodoItemClick?(id: number): void
}

@observer
class TodoItem extends React.PureComponent<ITodoItemProps> {
    render() {
        const {todo} = this.props;

        return (
            <li>
                <label>
                    <input
                        type="checkbox"
                        checked={todo.finished}
                        onChange={todo.finishTodo}
                    />
                    &nbsp;
                    <span className={todo.finished ? 'crossed' : ''}>{todo.title}</span>
                </label>
            </li>
        );
    }
}

export { TodoItem };
