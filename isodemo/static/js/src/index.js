var React = require('react');
var App = require('./app');

var Component = React.createFactory(App);

React.render(
    Component(window.props),
    document.getElementById('app')
);

