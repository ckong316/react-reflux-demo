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


  // Test which depend on store
  it('changes value when selected', function() {
    var testForm = TestUtils.renderIntoDocument(<Form />);
    var selectEl = TestUtils.findRenderedDOMComponentWithTag(testForm, 'select').getDOMNode();
    var lastSelectOption = selectEl.children[3];

    // NOTE: Mock should be created before interaction,
    // so that interactions with mock can be recorded.
    // This creates a reference to the mocked store and
    // expects it to be clean
    var {actions} = require('../store.jsx');

    expect(actions.filterMarkers).not.toBeCalled();

    // Trigger change event on select el and check that call to store was made
    TestUtils.Simulate.change(selectEl, {target: {value: lastSelectOption.value}});

    // TODO would prefer this; is it possible?
    // open select el and click an option
    // TestUtils.Simulate.click(selectEl);
    // TestUtils.Simulate.click(lastSelectOption, {eventData: {value: lastSelectOption.value}});

    // WARNING:
    // This test is actually not a good thing, since the state should just come from the store
    // and not set state itself.
    expect(selectEl.value).toEqual('Third');

    // BETTER:
    // Check that the anticipated action is called with a resonable arg
    expect(actions.filterMarkers).toBeCalledWith('Third');
  });


  // Ensure mocking is not being conflated between tests
  it('changes value when selected', function() {
    var {actions} = require('../store.jsx');

    var testForm = TestUtils.renderIntoDocument(<Form />);
    var selectEl = TestUtils.findRenderedDOMComponentWithTag(testForm, 'select').getDOMNode();
    var lastSelectOption = selectEl.children[3];

    expect(actions.filterMarkers).not.toBeCalled();
    TestUtils.Simulate.change(selectEl, {target: {value: lastSelectOption.value}});
    expect(actions.filterMarkers).toBeCalledWith('Third');
  });

});