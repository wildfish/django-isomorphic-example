var React = require('react');
var router = require('./router');

var App = React.createClass({
    getInitialState: function () {
        return {pathname: this.props._request.path || '/'};
    },

    componentDidMount: function () {
        var _this = this;
        window.onpopstate = function (e) {
            _this.updateUrl(window.location.pathname);
        };
    },

    handleClick: function (e) {
        if (window.history.pushState !== undefined) {
            e.preventDefault();
            window.history.pushState(null, null, e.target.pathname + e.target.search);
            this.updateUrl(e.target.pathname);
        }
    },

    updateUrl: function (pathname) {
        this.setState({pathname: pathname});
    },

    getPathName: function () {
        return this.state.pathname;
    },

    render: function () {
        return (
            React.createElement(router.getComponent(this.getPathName()), {data: this.props, handleClick: this.handleClick})
        )
    }
});

module.exports = App;

