function changeMenu(filename) {
    let img = document.querySelector('#Menuimg');
    img.setAttribute('src', filename);
}


var submitted = false;

$('#gform').on('submit', function(e) {
    e.preventDefault(); // Previne trimiterea și reîncărcarea implicită a paginii.
    $('#gform *').fadeOut(2000); // Animația de fade out
    $('#gform').prepend('Your submission has been processed...');

    // Așteaptă câteva secunde înainte de a reîncărca pagina
    setTimeout(function() {
        submitted = true;
        $('#gform').submit(); // Trimiterea efectivă a formularului
        location.reload(); // Reîncarcă pagina după trimitere
    }, 2000);
});

