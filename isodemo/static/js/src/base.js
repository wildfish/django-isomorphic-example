var React = require('react');
var App = require('./app');

var Base = React.createClass({
    stringify: function() {
        return {__html: "window.props=" + JSON.stringify(this.props)};
    },

    render: function() {
        return (
            <div>
                <h1>Base component</h1>
                <div id="app"><App {...this.props} /></div>
                <script type="text/javascript" dangerouslySetInnerHTML={this.stringify()} />
            </div>
        )
    }
});


module.exports = Base;

