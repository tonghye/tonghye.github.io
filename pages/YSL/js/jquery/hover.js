// mouse over & out : hover
$(document).ready(function(){
    $("button").mouseover(function(){
        $("button").css("background-color","#fff");
        $("button").css("color","#000");
        $("button").css("font-weight","600");
        $("button").css("transition","all 2s");

    });
    $("button").mouseout(function(){
        $("button").css("background-color","#000")
        $("button").css("color","#fff");
        $("button").css("transition","all 2s");
        $("button").css("font-weight","600");
    });
});