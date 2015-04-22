var __path__ = '../Form.jsx';


// mark as not mocked and mocked dependencies
jest.dontMock(__path__);


// test dependencies
var React = require('react/addons')
var TestUtils = React.addons.TestUtils;
var Form = require(__path__);

describe('Form', function() {

  it('has a select el', function() {
    var testForm = TestUtils.renderIntoDocument(<Form />);
    var selectEl = TestUtils.findRenderedDOMComponentWithTag(testForm, 'select').getDOMNode();
    expect(selectEl).toBeDefined();
  });

  it('has a default value', function() {
    var testForm = TestUtils.renderIntoDocument(<Form />);
    var selectEl = TestUtils.findRenderedDOMComponentWithTag(testForm, 'select').getDOMNode();
    expect(selectEl.value).toEqual('Default');
  });

  it('should hae 4 children', function() {
    var testForm = TestUtils.renderIntoDocument(<Form />);
    var selectEl = TestUtils.findRenderedDOMComponentWithTag(testForm, 'select').getDOMNode();

    expect(selectEl.children.length).toEqual(4);
  });

  /*
    // THIS TEST IS FAILING IN JEST BC OF INTERACTION BETWEEN REFLUX AND JEST MOCKING
    // https://github.com/spoike/refluxjs/issues/292
    // https://github.com/facebook/jest/issues/306#issuecomment-81463843


  it('changes value when selected', function() {
    var testForm = TestUtils.renderIntoDocument(<Form />);
    var selectEl = TestUtils.findRenderedDOMComponentWithTag(testForm, 'select').getDOMNode();
    var lastSelectOption = selectEl.children[3];

    // trigger change event on select el
    TestUtils.Simulate.change(selectEl, {eventData: {value: lastSelectOption.value}});

    // TODO would prefer this; is it possible?
    // open select el and click an option
    // TestUtils.Simulate.click(selectEl);
    // TestUtils.Simulate.click(lastSelectOption, {eventData: {value: lastSelectOption.value}});

    expect(selectEl.value).toEqual('Third');
  });
  */
});