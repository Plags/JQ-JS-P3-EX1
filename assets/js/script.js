$(document).ready(function(){
  var click = 0
   $('#clickMe').click(function(){
     click++;
     $('#text').html("Votre score est de"+click);
   })
})
