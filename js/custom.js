function setActiveMenu(paths) {
  $("#new_topbar .nav-link").each(function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active')
    }
  })
  if(paths.length === 2){
    let route = paths[1]
    switch(route) {
      case '':
      case 'home':
        $('#new_topbar .nav-link.home').addClass('active')
        break;
      case 'about':
        $('#new_topbar .nav-link.about').addClass('active')
        break;
      case 'discord':
        $('#new_topbar .nav-link.discord').addClass('active')
        break;
      case 'blog':
        $('#new_topbar .nav-link.blog').addClass('active')
        break;
    }
  }
}
$(document).ready(function() {
  var pathname = window.location.pathname;
  var paths = pathname.split('/')
  console.log({paths})
  // ["", "learn", "about"]
  
  setActiveMenu(paths)
})