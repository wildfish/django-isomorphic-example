var React = require('react');

var Data = React.createClass({
    getInitialState: function() {
        return this.props;
    },

    componentDidMount: function() {
        // Here data could be fetched from the server
        if (!this.state.data.list_of_data) {
            this.setState({
                data: {
                    list_of_data: ['foo', 'bar', 'baz']
                }
            });
        }
    },

    render: function() {
        var dataList = this.state.data.list_of_data || [];

        return (
            <div>
                <h2>List of data</h2>
                <a href="/" onClick={this.state.handleClick}>Home</a>
                <ul>
                    {dataList.map(function(data, i) {
                        return <li key={"d-" + i}>{data}</li>
                    })}
                </ul>
            </div>
        )
    }
});

module.exports = Data;

