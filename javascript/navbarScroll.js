$(window).scroll(()=>{
    if($(window).scrollTop()>20){
        $('.nav').addClass('navShadow');
    }else{
        $('.nav').removeClass('navShadow');
    }

    if($(window).scrollTop()>210){
        $('#about').removeClass('active');
        $('#contact').addClass('active');

    }else if($(window).scrollTop()<210){
        $('#about').addClass('active');
        $('#contact').removeClass('active');
    }
    
    
})