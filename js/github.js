var apiKey = require('./../.env').apiKey;

Git = function(name) {
  this.name = name
}

Git.prototype.getUsername = function(name) {
  // $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
  //   $("#avatar").empty();
  //   console.log(response);
  //     $("#output-name").text(response.name);
  //     $("#avatar").append("<img src=" + response.avatar_url + ">");
  // }).fail(function(error){
  // });
};

exports.gitModule = Git;
