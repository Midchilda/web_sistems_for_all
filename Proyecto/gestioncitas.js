/*
author:Midchilda
Script para  gestioncitas.
*/
$(document).ready(function() {
    $('#modify-date').hide();
    $('#delete-date').hide();
});
$(document).ready(function() {
    $('.modify').click(function() {
    	$('#delete-date').hide();
        $('#modify-date').show();
       
    });
    $('.delete').click(function() {
    	$('#modify-date').hide();
        $('#delete-date').show();
    });
    $('.back').click(function() {
        $('#modify-date').hide();
        $('#delete-date').hide();
    });
    
});