/** @jsx React.DOM */
var React           = require('react');
var ReactBootstrap = require('react-bootstrap');
// var Button = require('react-bootstrap').Button;

var TestComponent = React.createClass({
  render: function() {
    return (
      <div><Button bsStyle="primary">我好棒</Button>Hello GG!!</div>
    );
  }
});

module.exports = TestComponent;