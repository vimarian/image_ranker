// $(document).ready(function () {
//     var cookieName = "galaxy_ranking"
//     var list = localStorage.getItem(cookieName)
//
//     var test = $("#sortable").html()
//     //console.log(test)
//     $('#save_button').on('click', test)
// });

function test(){
  //console.log('miau')
  localStorage.removeItem("galaxy_ranking");
  var cookieName = "galaxy_ranking"
  var test = $("#sortable").html()
  localStorage.setItem(cookieName, test)
  console.log('in local storage')
}
