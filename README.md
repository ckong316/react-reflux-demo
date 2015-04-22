# Flask + React + Google Maps + Jest

## Basic example that uses ReactJs, Reflux and Google Maps API

- Uses a select dropdown to interact with user
- Upon a selection, a Reflux action is triggered to update the map
- The store handles the action by updating the state of the top level React component
- The top level component populates the props properties of all its children, and the map is updated

## To Run:
```
$ pip install flask
$ npm install
$ webpack           # if this doesn't work, try to install globally (`npm install webpack -g`)
$ python app.py
```

## To Test:

### Jest:
```
$ npm run test-jest
```