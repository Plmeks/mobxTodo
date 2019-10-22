import { observable, computed, action } from 'mobx';
import { ITodo, Todo } from './Todo'; 

interface ITodoList {
    todos: ITodo[],
    addTodoItem(title: string): void,
    unfinishedTodosCount: number;
}

class TodoList implements ITodoList {
    @observable todos: ITodo[] = [];

    constructor() {
        this.todos.push(
            new Todo("Get Coffee"),
            new Todo("Write simpler code")
        );
    }

    @computed get unfinishedTodos() {
        return this.todos.filter((todo: ITodo) => !todo.finished);
    }

    @computed get unfinishedTodosCount() {
        return this.unfinishedTodos.length;
    }

    @action addTodoItem = (title: string) => {
        this.todos.push(new Todo(title));
    }
}

export { ITodoList, TodoList };
