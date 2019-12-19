import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        todos: []
    }
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
}

create(newTodo){
    this.setState(() => ({
        todos: [...this.state.todos, newTodo]
    }));
}

remove(id){
    this.setState(() => ({
        todos: this.state.todos.filter(todo => todo.id !== id)
    }));
}

update(id, updatedTask) {
const updatedTodos = this.state.todos.map((todos) => {
    if (todos.id === id) {
        return {...todos, task: updatedTask}
    }
    return todo;
});
this.setState(() => ({ todos: updatedTodos }));
}

render() {
    const todos = this.state.todos.map((todo) => {
        return (
            <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            removeTodo={this.remove}
            updatedTodo={this.update}
            />
        )
    });
    return (

        <div>
            <h1>Todo List</h1>
            <NewTodoForm createTodo={this.create}/>
            <ul>{todos}</ul>
        </div>
    )
}
}
