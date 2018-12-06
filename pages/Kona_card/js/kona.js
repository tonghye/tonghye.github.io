// memu tab
$('.menu').each(function(i, e){
    $(e).find('li').on('click', function(){
       var idx = $(this).index();
       $(e).find('li').eq(idx).addClass('menu_on').siblings().removeClass('menu_on');
       return false;
    });
});
/* $('.menu').find('li').on('click',function(){
    $('li').toggleClass('menu_on');
}); */

// Q&A list
$('.tblist').each(function(i, e){
    $(e).find('dl').on('click', function(){
       var idx = $(this).index();
       $(e).find('dl').eq(idx).addClass('tb_on').siblings().removeClass('tb_on');
       return true;
    });
    $(".tb_on").click(function(){ 
        $("dd").toggleClass("slow"); 
    }); 
});

// page number
$('.pgon').each(function(i, e){
    $(e).find('div').on('click', function(){
       var idx = $(this).index();
       $(e).find('div').eq(idx).addClass('pg_on').siblings().removeClass('pg_on');
       return false;
    });
});