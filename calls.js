var articles = [];

function Calls (options){
  this.title = options.title;
  this.paragraph = options.paragraph;
}

Calls.prototype.toHtml = function() {
  var $newCalls = $('article.template').clone();

  $newCalls.find('h3').text(this.title);
  $newCalls.find('p').html(this.paragraph);
  $newCalls.removeClass('template');
  return $newCalls;
};
portfolioArticles.forEach(function(element){
  articles.push(new Calls(element));
});

articles.forEach(function(display) {
  $('body').append(display.toHtml());
});
