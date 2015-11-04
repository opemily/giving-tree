$(function () {

   var  logList= [],
        $log = $('#log'),
        $prompt = $('#prompt');



$prompt.keypress(function( event ) {
  if ( event.which == 13 ) {
     promptCommand = $prompt.val();
     //console.log(promptCommand);
     $log.append('<li class="command">' + promptCommand +'</li>');
     $prompt.val('');

  } 
});





});