/** @jsx React.DOM */
var React         = require('react');
// var TestComponent = require('./components/TestComponent.jsx');
var MainComponent = require('./components/MainComponent.jsx');

React.render(
  <MainComponent/>,
  document.getElementById("react-container")
);