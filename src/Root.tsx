import * as React from 'react';
import { TodoList } from './todoList/components/TodoList';
import { TodoList as TodoListStore } from './todoList/store/TodoList';

const store = new TodoListStore();

const Root = () => (
    <TodoList todoList={store} />
);

export { Root };
