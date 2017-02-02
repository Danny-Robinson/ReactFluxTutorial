"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link; //NOT WORKING, NO CLUE WHY

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1> Pluralsight Administration</h1>
                <p> React, React Router, and Flux for ultra-responsive web apps. </p>
                <a href="/#about" className="btn btn-primary btn-lg">Learn more</a>
            </div>
        );
    }
});

module.exports = Home;