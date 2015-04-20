Basic example that uses ReactJs, Reflux and Google Maps API

- Uses a select dropdown to interact with user
- Upon a selection, a Reflux action is triggered to update the map
- The store handles the action by updating the state of the top level React component
- The top level component populates the props properties of all its children, and the map is updated

To Run:
-npm install
-webpack
-python app.py