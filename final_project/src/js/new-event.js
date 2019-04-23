//The import and export statements have been standardized in ES2015. Although they are not supported in most browsers yet, webpack does support them out of the box.
import jquery_editable_select from 'jquery-editable-select';
require("jquery-editable-select/dist/jquery-editable-select.css");

$(function() {
  // jquery-editable-select is required for this line to work
  $('.event-type').editableSelect();
  $('.event-type.es-input').attr('placeholder','Choose or enter event type');
});

