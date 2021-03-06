/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

var app = app || {};

(function(module) {

  const homeView = {};

  // Show and hide nav links after clicking hamburger menu
  $('i.icon-menu').on('click', function(event) {
    event.preventDefault();
    $('nav#nav-bar').find('li').toggle();
  });

  let renderTrendingIssues = Handlebars.compile($('#trending-issues-template').html());
  // trending issues to the DOM!
  homeView.index = () => {
    // Remove <li>'s to prepare for reloading them
    $('#trending-section').children('ul').empty();
    // Map issues
    let mappedIssues = module.userIssues.all.map(renderTrendingIssues);
    // Append issues to #trending-section
    $('#trending-section ul').append(mappedIssues);
  };

  // Attach homeView object to module. Module is the same as app.
  module.homeView = homeView;
})(app);
