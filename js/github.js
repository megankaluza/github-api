var apiKey = require('./../.env').apiKey;

Git = function(name) {
  this.name = name;
}

function Git(){
}

Git.prototype.getUsername = function(name) {
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
    $("#avatar").empty();
    console.log(response);
    $("#output-name").text(response.name);
    $("#avatar").append("<img src=" + response.avatar_url + ">");
  }).fail(function(error){
  });

  $.get('https://api.github.com/users/' + name + '/repos?visibility=public&access_token=' + apiKey).then(function(response){
    $("#repos").empty();
    console.log(response);
    for (i = 0; i < response.length; i++) {
      $("#repos").append("<div class='info'<h2><a href='" + response[i].html_url + "' target='_blank'>Repository</a>: <br><span>" + response[i].name + "</span></h2><p>" + response[i].description + "</p></div>");
    };
  }).fail(function(error){
  });
};

exports.gitModule = Git;
