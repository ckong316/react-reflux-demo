var React = require("react");
var {actions} = require('./store.jsx');


//Component that generates the select dropdown
var DropdownMenu = React.createClass({
	getInitialState: function() {
		return {
			selectValue: "Default"
		}
	},

	updateValue: function(event) {
		var newSelectValue = event.target.value;
		this.setState({
			selectValue: newSelectValue
		});

		actions.filterMarkers(newSelectValue);
	},

	render: function() {
		return (
			<div>
				<select className="filter-options" value={this.state.selectValue} onChange={this.updateValue}>
					<option value="Default">None</option>
				    <option value="First">First</option>
				    <option value="Second">Second</option>
				    <option value="Third">Third</option>
				</select>
			</div>
		)
	},
});

module.exports = DropdownMenu
