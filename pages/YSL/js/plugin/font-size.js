$(document).ready(function(){
    function autoFont(){
      $(".rp").css('font-size', Math.max(Math.min($(".rp").width() / (1.1 * 14))));
   }
});