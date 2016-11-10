'use strict';
var articles = [];

function Calls (options){
  this.title = options.title;
  this.paragraph = options.paragraph;
}

Calls.prototype.toHtml = function() {
  var $newCalls = $('article.template').clone();
  $newCalls.attr('id',this.title);
  $newCalls.find('h3').text(this.title);
  $newCalls.find('p').html(this.paragraph);
  $newCalls.removeClass('template');
  return $newCalls;
};

$.ajax({
  url: 'https://api.github.com/users/pavelpark/repos',
  headers: {'Authorization': 'token ' + githubToken},
  type: 'GET',
  success: function (data, message, xhr) {
    var viewData = data;
    console.log(viewData);
  }
});

articles.forEach(function(display) {
  console.log(display + ' display');
  $('body').append(display.toHtml());
});
// Article Load All
Calls.loadAll = function(inputData) {
  inputData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  })
  .forEach(function(ele) {
    Calls.articles.push(new Calls(ele));
  });
};

(function() {
  if (localStorage.array) {

  } else {
    $.getJSON('array.json', function(data) {
      data.map(function(section) {
        section = new Calls(section);
        $('body').append(section.toHtml());
        console.log(section + ' sections');
      });
    });
  }
}());
