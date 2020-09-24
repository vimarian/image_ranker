// $('.sortable li').focus(function() {
//
//    $(this).addClass("ui-selecting");
//    console.log(this)
// });
// $('.sortable li').focusout(function() {
//    $(this).removeClass("ui-selecting");
// });
jQuery(document).ready(function($) {
$('.sortable li').bind('keydown', function(event) {
  console.log('li', this)
  if (event.which == 37) { // left
    $(this).insertBefore($(this).prev());
  }
  if (event.which == 38) { //up
    $(this).insertBefore($(this).prev().prev().prev().prev().prev().prev().prev().prev().prev().prev()
      .prev().prev().prev().prev().prev().prev().prev().prev().prev().prev()
      .prev().prev().prev().prev().prev().prev().prev().prev().prev().prev()
      .prev().prev().prev().prev().prev().prev().prev().prev().prev().prev()
      .prev().prev().prev().prev().prev().prev().prev().prev().prev().prev());
  }
  if (event.which == 39) { // right
    $(this).insertAfter($(this).next());
  }
  if (event.which == 40) { // down
    $(this).insertBefore($(this).next().next().next().next().next().next().next().next().next().next().next()
      .next().next().next().next().next().next().next().next().next().next()
      .next().next().next().next().next().next().next().next().next().next()
      .next().next().next().next().next().next().next().next().next().next()
      .next().next().next().next().next().next().next().next().next().next());
    //needs to be one more than prev!
  }
  if (event.which == 84 || event.which == 33) { // "t" or page-up
    $(this).parent().prepend($(this));
  }
  if (event.which == 66 || event.which == 34) { // "b" or page-down
    $(this).parent().append($(this));
  }
  $(this).focus();
});
});
