import { observable, action } from 'mobx';

interface ITodo {
    id: number;
    title: string,
    finished: boolean,
    finishTodo(): void
}

class Todo implements ITodo {
    id = Math.random();
    @observable title = "";
    @observable finished = false

    constructor(title: string) {
        this.title = title;
    }

    @action finishTodo = () => {
        this.finished = !this.finished;
    }
}

export { ITodo, Todo };
