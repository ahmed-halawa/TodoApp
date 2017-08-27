var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        }
    },
    componentDidUpdate: function () {
        // gets fired after [props or state] get updated
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo: function (todoText) {
        // var newTodos = this.state.todos;

        // var {id} = this.state.todos[this.state.todos.length - 1];
        // var todoObject = {
        //     id: id + 1,
        //     text: todoText
        // };
        // this.setState({ todos: newTodos.concat(todoObject)});

        // Spread Operator
        this.setState({ todos: [...this.state.todos, 
            { 
                id: uuid(),
                text: todoText,
                completed: false,
                createdAt: moment().unix(),
                completedAt: undefined
            }
        ] });
    },
    onSearch: function (showCompleted, searchText) {
        this.setState({ 
                showCompleted: showCompleted,
                searchText: searchText.toLowerCase()
            });
        // console.log(showCompleted, searchText);
    },
    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined;
            }

            return todo;
        });
        
        this.setState({todos: updatedTodos});
    },
    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.onSearch} />
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
                            <AddTodo handleAddTodo={this.handleAddTodo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;