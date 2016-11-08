(function(module) {
  var aboutme = {};

  aboutme.reveal = function() {
    $('.eachPart').hide();
    $('#About').show();
  };
  module.aboutme = aboutme;
})(window);
