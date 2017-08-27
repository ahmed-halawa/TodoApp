var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Todo = require('Todo');

describe('Todo', () => {
    it('should be exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle prop with id on click', () => {
        var dummyData = {
            id: 11,
            text: 'todo text whatever',
            completed: false
        }
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...dummyData} onToggle={spy} />);
        var $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(11);
    })
});