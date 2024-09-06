function changeMenu(filename) {
    let img = document.querySelector('#Menuimg');
    img.setAttribute('src', filename);
}

var submitted = false;

$('#gform').on('submit', function(e) {
    location.reload();
  });
  
