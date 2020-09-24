jQuery(document).ready(function($) {
  var gallery = []; // array of gallery elements
  jQuery(document).ready(function($) {
    $(".fancybox").each(function(i) {
      gallery.push(this.href); // push element to the array

      // bind your click and double-click events
      $(this).on({
        click: function(event) {
          event.preventDefault();
        },
        dblclick: function(event) {
          $.fancybox(gallery, {
            openEffect: 'fade',
            closeEffect: 'fade',
            titleShow: true,
            title: this.title,
            loop: false,
            padding: 0,
            helpers: {
              title: {
                position: 'top'
              }
            },
            index: i // starts gallery from clicked element
          });
        }
      });
    });
  }); // ready
});
//console.log(gallery)
