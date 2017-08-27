var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');


describe('TodoList', () => {
    it('should be exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todos item', () => {
        var todos = [{
                        id: 1,
                        text: 'Walk the dog'
                     },
                     {
                        id: 2,
                        text: 'Clean the floor'
                     }];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);

    });
});