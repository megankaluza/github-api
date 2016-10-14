var Template = require('./../js/github.js').templateModule;

$(document).ready(function(){
  $("#getUsername").click(function(){
    var name = $("#name").val();
    var newTemplate = new Template(name);
    $("#output-name").text(newTemplate.getUsername());
  });
});
