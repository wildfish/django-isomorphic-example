var React = require('react');

var Home = React.createClass({
    getInitialState: function() {
        return this.props;
    },

    render: function() {
        return (
            <div>
                <h2>Home</h2>
                <p>This is the home view</p>
                <a href="/data/" onClick={this.state.handleClick}>Data view</a>
            </div>
        )
    }
});

module.exports = Home;

