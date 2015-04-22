var React = require('react');
var Reflux = require('reflux');

//Default data - mocks an external API call
var allCoordinates = {
	"First": [
		{ "lat": -34.397, "lng": 150.644},
		{ "lat": -50.397, "lng": 150.644},
		{ "lat": -25.397, "lng": 150.644},
	],
	"Second": [
		{ "lat": -34.397, "lng": 155.644},
		{ "lat": -37.397, "lng": 155.644},
		{ "lat": -39.397, "lng": 155.644},
	],
	"Third": [
		{ "lat": -34.397, "lng": 145.644},
		{ "lat": -37.397, "lng": 145.644},
		{ "lat": -39.397, "lng": 145.644},
	]
}

var actions = Reflux.createActions(
	["filterMarkers"]
)

var store = Reflux.createStore({
	listenables: [actions],

	onFilterMarkers(value) {
		//Call external database with new data - mocked for now
		coordinates = allCoordinates[value]
		this.trigger({coordinates});
	},

	getInitialState() {
		return {
			coordinates: null,
		}
	}
})

module.exports = {
	store: store,
	actions: actions,
}
