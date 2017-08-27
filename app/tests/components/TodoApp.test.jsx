var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should be exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to todos state on handleAddTodo', () => {
        var todoText = 'todo text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);
        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it('should toggle completed value when handleToggle called', () => {

        var dummyData = {
            id: 11,
            text: 'todo text whatever',
            completed: false
        }
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({ todos: [dummyData] });

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);        

    });
});