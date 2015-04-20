var React = require('react');
var Reflux = require('reflux');
var store = require('./store.jsx').store;
var actions = require('./store.jsx').actions;
var Map = require('./Map.jsx');
var FormFilter = require('./Form.jsx');



var App = React.createClass({

	mixins: [Reflux.connect(store)],

	render: function() {
		return (
			<div>
				<Map coordinates={this.state.coordinates}/>
				<FormFilter />
			</div>
		)
	}

})


React.render(<App />, document.getElementById('content'));