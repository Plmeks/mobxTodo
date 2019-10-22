import * as React from 'react';
import { TodoList } from './todoList/components/TodoList';
import { TodoList as TodoListStore } from './todoList/store/TodoList';
import { Todo } from './todoList/store/Todo';

const store = new TodoListStore();

const Root = () => (
    <TodoList todoList={store} />
);

export { Root };
