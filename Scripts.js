function changeMenu(filename) {
    let img = document.querySelector('#Menuimg');
    img.setAttribute('src', filename);
}

var submitted = false;
$(document).ready(function() {
    $('#gform').on('submit', function(e) {
        e.preventDefault(); // Previne comportamentul default de trimitere a formularului

        var $submitButton = $('#Trimis');

        // Schimbă textul butonului
        $submitButton.val('Se trimite...');
        $submitButton.prop('disabled', true);

        // Afișează un mesaj de confirmare
        $(this).prepend('<p class="confirm-message">Cererea a fost trimisă!</p>');

        // Simulează trimiterea formularului (în caz că folosești un iframe ascuns)
        setTimeout(function() {
            // Resetează formularul
            $('#gform')[0].reset();

            // Reîncărcare pagină după ce mesajul a fost afișat pentru un timp
            location.reload(true);
        }, 2000); // 2 secunde întârziere
    });
});

