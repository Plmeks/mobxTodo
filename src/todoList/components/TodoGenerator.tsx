import * as React from 'react';

interface ITodoGeneratorProps {
    onTodoAdd?(title: string): void;
}

interface ITodoGeneratorState {
    todoTitle: string
}

class TodoGenerator extends React.Component<ITodoGeneratorProps, ITodoGeneratorState> {
    readonly state = {
        todoTitle: ""
    };

    onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            todoTitle: event.target.value
        });
    }

    onButtonClick = () => {
        const {onTodoAdd} = this.props;

        if (onTodoAdd) {
            onTodoAdd(this.state.todoTitle);
            this.setState({
                todoTitle: ""
            })
        }
    }

    render() {
        const {todoTitle} = this.state;

        return (
            <>
                <input
                    type="text"
                    value={todoTitle}
                    onChange={this.onInputChange}
                    placeholder="Enter todo text"
                />

                &nbsp;

                <button onClick={this.onButtonClick}>
                    Add todo
                </button>
            </>
        );
    }
}

export { TodoGenerator };
