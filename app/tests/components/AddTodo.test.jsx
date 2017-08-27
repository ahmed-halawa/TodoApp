var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should be exist', () => {
        expect(AddTodo).toExist();
    });

    it('should be call handleAddTodo prop with valid data', () => {
        var todoText = 'Check mail';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>); 

        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        console.log($el.find('form')[0]);
        TestUtils.Simulate.submit($el.find('form')[0]);


        expect(spy).toHaveBeenCalledWith(todoText);
    });

});