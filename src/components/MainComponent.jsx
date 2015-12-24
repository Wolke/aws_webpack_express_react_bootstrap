/** @jsx React.DOM */
var React           = require('react');
// var ReactBootstrap = require('react-bootstrap');
var Row = require('react-bootstrap').Row;

var Col = require('react-bootstrap').Col;
// <Col xs={6} md={4} />
var MainComponent = React.createClass({
  render: function() {
    return (
        
            
                <Row>
                  <Col md={3} sm={6} className={"portfolio-item"}>
                    <figure className="portfolio-image">
                      <img className="img-responsive" src="assets/img/fox.jpg" height="300" width="400" alt="" />
                      <figcaption className="portfolio-caption">React 1</figcaption>
                    </figure>
                  </Col>
                  <Col md={3} sm={6} className={"portfolio-item"}>
                    <figure className="portfolio-image">
                      <img className="img-responsive" src="assets/img/fox.jpg" height="300" width="400" alt="" />
                      <figcaption className="portfolio-caption">React 2</figcaption>
                    </figure>
                  </Col>
                  <Col md={3} sm={6} className={"portfolio-item"}>
                    <figure className="portfolio-image">
                      <img className="img-responsive" src="assets/img/fox.jpg" height="300" width="400" alt="" />
                      <figcaption className="portfolio-caption">React 3</figcaption>
                    </figure>
                  </Col>
                </Row>
            

      
      )}
});

module.exports = MainComponent;