var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

    handleOnChange: function () {
        console.log('checked has been changed');
    },
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';

        var renderDate = () => {
            var message = 'Created ';
            var timeStamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timeStamp = completedAt;
            }
            return (message + moment.unix(timeStamp).format('MMM D, YYYY @ h:mm a'));
        }

        return (
            <div className={todoClassName} onClick={() => {
                    this.props.onToggle(id);
                }}>
                <div>
                    <input type="checkbox" onChange={this.handleOnChange} checked={completed} />                    
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});

module.exports = Todo;