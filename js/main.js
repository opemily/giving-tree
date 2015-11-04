$(function () {

   var  logList= [],
        $log = $('#log'),
        $prompt = $('#prompt');
        apples = 10000;



$prompt.keypress(function( event ) {
  if ( event.which == 13 ) {
     promptCommand = $prompt.val();
     //console.log(promptCommand);
     $log.append('<li class="command">' + promptCommand +'</li>');
     $prompt.val('');
     if (promptCommand === 'apples'){
      $log.append('<li class="action"> The Giving Tree has ' + apples +' apples on her branches</li>')
     }

  } 
});





});