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

// portfolioArticles.forEach(function(element){
//   articles.push(new Calls(element));
// });

articles.forEach(function(display) {
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

Calls.fetchAll = function() {
  if (localStorage.array) {


  } else {
    $.getJSON('array.json', function(data, message, xhr) {
      data.forEach(function(section) {
        // $('body').append(section.toHtml());
        // section.toHtml();
        console.log(section);
      });
      // Article.loadAll(data);
    });

  }
  // articleView.renderIndexPage();
};
Calls.fetchAll();
