

$("#memberbtn").click(function(){
    $("#memberModal").modal()
})

$("#loginbtn").click(function(){
    $("#loginModal").modal()
})

$("#reservebtn").click(function(){
    $("#reserveModal").modal()
})

$("#reservebtn2").click(function(){
    $("#reserveModal").modal()
})

$('#choice').change(function(){
    if ($(this).val() == "Team") {
        $('#teamDiv').show();
        $('#team1name').attr('required', '');
        $('#team1email').attr('data-error', 'This field is required.');
        $('#team2name').attr('required', '');
        $('#team2email').attr('data-error', 'This field is required.');
        $('#team3name').attr('required', '');
        $('#team3email').attr('data-error', 'This field is required.');
      } else {
        $('#teamDiv').hide();
        $('#team1name').removeAttr('required');
        $('#team1email').removeAttr('data-error');
        $('#team2name').removeAttr('required');
        $('#team2email').removeAttr('data-error');
        $('#team3name').removeAttr('required');
        $('#team3email').removeAttr('data-error');
    }
})

$("#choice").trigger("change");

$( window ).on( "load", function() {
    var thisDay = new Date().getDate();
    if (thisDay >= 7) {
        $("#reservebtn").attr("disabled", '');
        $("#reservebtn2").attr("disabled", '');
        
        
    } else {
        $('#reservebtn').removeAttr('disabled');
        $('#reservebtn2').removeAttr('disabled');
        
    }
  } );