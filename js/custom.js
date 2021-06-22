function setActiveMenu(paths) {
  $("#topbar .nav-link").each(function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active')
    }
  })
  if(paths.length === 2){
    let route = paths[1]
    switch(route) {
      case 'about':
        $('#topbar .nav-link.about').addClass('active')
        break;
      case 'discord':
        $('#topbar .nav-link.discord').addClass('active')
        break;
      case 'blog':
        $('#topbar .nav-link.blog').addClass('active')
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