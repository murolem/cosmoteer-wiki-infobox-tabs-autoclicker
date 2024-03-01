/*
 * made by aliser
 * repo: https://github.com/murolem/cosmoteer-wiki-infobox-tabs-autoclicker
*/

$(function() {
  var tabButtons = $(".portable-infobox .pi-panel-scroll-wrapper .pi-section-navigation li");
  tabButtons.on("mouseenter", function(e) {
    e.currentTarget.click();
  });
});
