/*
author:Midchilda
Script para  citas.
*/
$(document).ready(function() {
    $('#paso2').hide();
    $('#paso3').hide();
});
$(document).ready(function() {
    $('#to2').click(function() {
    	$('#paso1').hide();
        $('#paso2').show();
        $('#paso3').hide();
    });
    $('#to3').click(function() {
    	$('#paso1').hide();
        $('#paso2').hide();
        $('#paso3').show();
    });
    $('#backto1').click(function() {
    	$('#paso1').show();
        $('#paso2').hide();
        $('#paso3').hide();
    });
      $('#backto2').click(function() {
    	$('#paso1').hide();
        $('#paso2').show();
        $('#paso3').hide();
    });
});