var React = require("react")

var Map = React.createClass({
	propTypes: {
		coordinates: React.PropTypes.array,
	},

	getDefaultProps: function() {
		return {
			coordinates: [],
			mapOptions: {
				center: { lat: -34.397, lng: 150.644},
				zoom: 4
			}
		}
	},

	deleteMarkers: function() {
		this.state.markers.forEach(function(marker) {
			marker.setMap(null);
		})
	},

	drawMarkers: function(coordinates) {
		var markers = []
		coordinates.forEach(function(coordinate) {
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(coordinate.lat, coordinate.lng),
				map: this.state.map
			});
			markers.push(marker);
		}, this);
		return markers;
	},

	componentWillReceiveProps: function(nextProps) {
		this.deleteMarkers();
		var markers = this.drawMarkers(nextProps.coordinates);
		this.setState({
			markers: markers
		});
	},

	componentDidMount: function() {
		var ltlng = new google.maps.LatLng(-34.397, 150.644)
		var map = new google.maps.Map(
			this.getDOMNode(), this.props.mapOptions);

		this.setState({
			map: map,
			markers: []
		})
	},

	render: function() {
		return (
			<div className="map-canvas"></div>
		)
	},

});
 
module.exports = Map
