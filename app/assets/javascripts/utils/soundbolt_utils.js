Soundbolt.Utilities.showErrors = function($domElement, error_messages){
  var message = error_messages.responseJSON[0];
  var content = JST['error']({ message: message });
  $domElement.html("");
  $domElement.html(content);
}
