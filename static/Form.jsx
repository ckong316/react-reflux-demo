var React = require("react")
var actions = require('./store.jsx').actions


var DropdownMenu = React.createClass({
	getInitialState: function() {
		return {
			selectValue: 'None'
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
			<div className="filter-options">
				<select value={this.state.selectValue} onChange={this.updateValue}>
					<option value="None"/>None</option>
				    <option value="First">First</option>
				    <option value="Second">Second</option>
				    <option value="Third">Third</option>
				</select>
			</div>
		)
	},


});
 



module.exports = DropdownMenu