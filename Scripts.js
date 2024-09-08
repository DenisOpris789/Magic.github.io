function changeMenu(filename) {
    let img = document.querySelector('#Menuimg');
    img.setAttribute('src', filename);
}


var submitted=false;

$('#gform').on('submit', function(e) {
    $('#gform *').fadeOut(2000);
    $('#gform').prepend('Your submission has been processed...');
    location.reload();
    });
    