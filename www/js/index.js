$(document).on('pagecreate', function() {
    // Ajouter une tâche
    $('.ajouter').on('click', function() {
        ajouterTache();
    });

    // Réinitialiser le formulaire
    $('.reset').on('click', function() {
        reinitialiser();
    });

    
    $('#taskList').on('swiperight', 'li', function() {
        $(this).toggleClass('completed');
        $(this).appendTo('#tacheFaites');
    });

    
    $('#taskList').on('swipeleft', 'li', function() {
        $(this).remove();
    });

   
    $('#tacheFaites').on('swiperight', 'li', function() {
        $(this).toggleClass('completed');
        $(this).appendTo('#taskList');
    });

    // Swipe left pour supprimer une tâche terminée
    $('#tacheFaites').on('swipeleft', 'li', function() {
        $(this).remove();
    });
});

// Fonction pour ajouter une tâche à la liste en cours
function ajouterTache() {
    const task = $('#task').val().trim();
    
    if (task !== '') {
        const newItem = $('<li>').text(task);
        $('#taskList').append(newItem).listview('refresh');
        $('#task').val('').focus();
    }
}

// Fonction pour réinitialiser le formulaire
function reinitialiser() {
    $('#taskList').empty().listview('refresh');
    $('#tacheFaites').empty();
    $('#task').val('').focus();
}
