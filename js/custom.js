$(document).ready(function(){
    
    $('.menu-icon').click(function(){
        if($('#sub-menu').hasClass('hidden')){
            $('#sub-menu').removeClass('hidden');
            $('#menu-change').removeClass('fa-bars').addClass('fa-times');
            $('#header, #sub-menu').animate({
                height: "75vh"
            }, 1000 );
        } else {
            $('#header, #sub-menu').animate({
                height: "0vh"
            }, 1000, function(){
                $('#menu-change').removeClass('fa-times').addClass('fa-bars');
                $('#sub-menu').addClass('hidden');
            });
        }
    });

});