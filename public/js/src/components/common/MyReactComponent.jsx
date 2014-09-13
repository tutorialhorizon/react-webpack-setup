/**
 * @jsx React.DOM
 */

var React = require('react'),
    MyReactComponent = React.createClass({

    // The object returned by this method sets the initial value of this.state
    getInitialState: function(){
        console.log('Get Initial component state');
    	return {};
    },

    // The object returned by this method sets the initial value of this.props
    // If a complex object is returned, it is shared among all component instances		
    getDefaultProps: function(){
        console.log('Get Initial component state');
    	return {};
    },

    // Returns the jsx markup for a component
    // Inspects this.state and this.props create the markup
    // Should never update this.state or this.props
    render: function(){
        console.log('render');
    	return (<div>
            <input type="button" value="Change component state" onClick={this._handleClick}/>
        </div>);
    },

    // An array of objects each of which can augment the lifecycle methods
    mixins: [],

    // Functions that can be invoked on the component without creating instances
    statics: {
    	aStaticFunction: function(){}
    },

    // -- Lifecycle Methods --

    // Invoked once before first render
    componentWillMount: function(){
    	// Calling setState here does not cause a re-render
        console.log('componentWillMount');
    },

    // Invoked once after the first render
    componentDidMount: function(){
        console.log('componentDidMount');
    	// You now have access to this.getDOMNode()
    },

    // Invoked whenever there is a prop change
    // Called BEFORE render
    componentWillReceiveProps: function(nextProps){
        console.log('componentWillReceiveProps');
    	// Not called for the initial render
    	// Previous props can be accessed by this.props
    	// Calling setState here does not trigger an an additional re-render
    },

    // Determines if the render method should run in the subsequent step
    // Called BEFORE a render
    // Not called for the initial render
    shouldComponentUpdate: function(nextProps, nextState){
        console.log('shouldComponentUpdate');
    	// If you want the render method to execute in the next step
    	// return true, else return false
        return true;
    },

    // Called IMMEDIATELY BEFORE a render
    componentWillUpdate: function(nextProps, nextState){
        console.log('componentWillUpdate');
    	// You cannot use this.setState() in this method
    },

    // Called IMMEDIATELY AFTER a render
    componentDidUpdate: function(prevProps, prevState){
        console.log('componentDidUpdate');
    },

    // Called IMMEDIATELY before a component is unmounted
    componentWillUnmount: function(){
        console.log('componentWillUnmount');
    },

    _handleClick: function(){
        console.log('==Updating State==')
        this.setState({
            'key':'value'
        });
    }

});

module.exports = MyReactComponent;