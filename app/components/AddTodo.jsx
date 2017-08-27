var React = require('react');

var AddTodo = React.createClass({

    handleOnSubmit: function (e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;

        if(todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.handleAddTodo(todoText);            
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        
        return (
            <div className="container__footer">
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do ?" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;